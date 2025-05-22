import { NextRequest, NextResponse } from "next/server";
import { rateLimitRequest } from "@/lib/rate-limit";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import * as Sentry from "@sentry/nextjs";
import authOptions from "@/lib/auth";
import prisma from "@/lib/prisma";
import { createAuditLogServer } from "@/lib/auditLog";
import { sendSystemWarningEmail } from "@/lib/email";

/**
 * POST /api/auth/login
 * Rate-limited login endpoint
 */
export async function POST(request: NextRequest) {
  try {
    // Check for rate limiting (5 attempts per minute per IP)
    const rateLimitResponse = await rateLimitRequest(
      request,
      "auth:login",
      5,
      60,
    );
    if (rateLimitResponse) {
      // Rate limit exceeded
      await createAuditLogServer({
        action_type: "LOGIN_RATE_LIMIT",
        target_resource: "USER",
        ip_address:
          request.ip || request.headers.get("x-forwarded-for") || "127.0.0.1",
        details: JSON.stringify({
          message: "Rate limit exceeded for login attempts",
          ip:
            request.ip || request.headers.get("x-forwarded-for") || "127.0.0.1",
        }),
      });

      // Send system warning for repeated rate limit violations
      const ip =
        request.ip || request.headers.get("x-forwarded-for") || "127.0.0.1";
      const recentViolations = await prisma.idnbi_AuditLog.count({
        where: {
          action_type: "LOGIN_RATE_LIMIT",
          ip_address: ip,
          created_at: {
            gte: new Date(Date.now() - 10 * 60 * 1000), // Last 10 minutes
          },
        },
      });

      if (recentViolations >= 3) {
        // Send warning after 3 rate limit violations in 10 minutes
        sendSystemWarningEmail(
          "REPEATED_LOGIN_ATTEMPTS",
          {
            ipAddress: ip,
            violations: recentViolations,
            timeWindow: "10 minutes",
          },
          "high",
        );
      }

      return rateLimitResponse;
    }

    // Get body data
    const { email, password, callbackUrl } = await request.json();

    // Check if email is provided
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if IP is blocked
    const ip =
      request.ip || request.headers.get("x-forwarded-for") || "127.0.0.1";
    const blockedIP = await prisma.idnbi_IPBlocklist.findUnique({
      where: {
        ip_address: ip,
        blocked_until: {
          gte: new Date(),
        },
      },
    });

    if (blockedIP) {
      await createAuditLogServer({
        action_type: "LOGIN_BLOCKED_IP",
        target_resource: "USER",
        ip_address: ip,
        details: JSON.stringify({
          message: "Login attempt from blocked IP address",
          email,
        }),
      });

      return NextResponse.json(
        { error: "Too many failed login attempts. Please try again later." },
        { status: 403 },
      );
    }

    // Check if user exists and is not blocked
    const user = await prisma.idnbi_User.findUnique({
      where: { email },
      include: {
        role: true,
      },
    });

    if (user?.is_ip_blocked) {
      await createAuditLogServer({
        action_type: "LOGIN_BLOCKED_USER",
        target_resource: "USER",
        target_resource_id: user.id,
        ip_address: ip,
        details: JSON.stringify({
          message: "Login attempt from blocked user",
          email,
        }),
      });

      return NextResponse.json(
        {
          error:
            "This account has been temporarily locked due to too many failed login attempts.",
        },
        { status: 403 },
      );
    }

    // Forward to NextAuth's signIn function
    // Note: This is where we would normally hand off to NextAuth,
    // but since we can't directly call server-side signIn here,
    // we'll return a success response and let the client handle the actual sign-in

    return NextResponse.json({
      success: true,
      callbackUrl: callbackUrl || "/home",
    });
  } catch (error) {
    console.error("Login error:", error);
    Sentry.captureException(error);

    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
