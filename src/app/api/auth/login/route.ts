import { NextRequest, NextResponse } from "next/server";
import { rateLimitRequest } from "@/lib/rate-limit";
import * as Sentry from "@sentry/nextjs";
import prisma from "@/lib/prisma";
import { createServerAuditLog } from "@/lib/auditLog";
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
      await createServerAuditLog({
        actionType: "LOGIN_RATE_LIMIT",
        targetResource: "USER",
        ipAddress:
          request.headers.get("x-forwarded-for") || "127.0.0.1",
        details: {
          message: "Rate limit exceeded for login attempts",
          ip:
            request.headers.get("x-forwarded-for") || "127.0.0.1",
        },
        headers: request.headers,
      });

      // Send system warning for repeated rate limit violations
      const ip =
        request.headers.get("x-forwarded-for") || "127.0.0.1";
      const recentViolations = await prisma.idnbi_AuditLog.count({
        where: {
          action: "LOGIN_RATE_LIMIT",
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
    const { email, callbackUrl } = await request.json();
    // Password will be handled by NextAuth later

    // Check if email is provided
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if IP is blocked
    const ip =
      request.headers.get("x-forwarded-for") || "127.0.0.1";
    const blockedIP = await prisma.idnbi_IPBlocklist.findUnique({
      where: {
        ip_address: ip,
        blocked_until: {
          gte: new Date(),
        },
      },
    });

    if (blockedIP) {
      await createServerAuditLog({
        actionType: "LOGIN_BLOCKED_IP",
        targetResource: "USER",
        ipAddress: ip,
        details: {
          message: "Login attempt from blocked IP address",
          email,
        },
        headers: request.headers,
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
        idnbi_UserRole: {
          include: {
            idnbi_Role: true,
          },
        },
      },
    });

    if (user?.is_ip_blocked) {
      await createServerAuditLog({
        actionType: "LOGIN_BLOCKED_USER",
        targetResource: "USER",
        targetResourceId: user.id,
        ipAddress: ip,
        details: {
          message: "Login attempt from blocked user",
          email,
        },
        headers: request.headers,
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
