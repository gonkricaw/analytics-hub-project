import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { hash } from "bcryptjs";
import prisma from "@/lib/prisma";
import { rateLimitRequest } from "@/lib/rate-limit";
import * as Sentry from "@sentry/nextjs";
import { AuditActionType, createAuditLog } from "@/lib/auditLog";

/**
 * POST /api/auth/forgot-password
 * Request a password reset link for a given email address
 */
export async function POST(request: NextRequest) {
  try {
    // Check for rate limiting (3 attempts per 10 minutes per IP)
    const rateLimitResponse = await rateLimitRequest(
      request,
      "auth:forgot-password",
      3,
      600,
    );
    if (rateLimitResponse) {
      // Rate limit exceeded
      await createAuditLog({
        actionType: AuditActionType.PASSWORD_RESET_REQUEST,
        targetResource: "AUTH",
        ipAddress: request.headers.get("x-forwarded-for") || "127.0.0.1",
        details: {
          message: "Rate limit exceeded for forgot password requests",
        },
      });

      return rateLimitResponse;
    }

    // Parse the request body
    const { email } = await request.json();

    // Validate input
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if the user exists
    const user = await prisma.idnbi_User.findUnique({
      where: { email },
    });

    // For security reasons, don't reveal if the user exists or not
    // We'll return a success response even if the user doesn't exist
    if (!user) {
      console.log(`Password reset requested for non-existent email: ${email}`);
      return NextResponse.json({
        message:
          "If your email is registered, you will receive a password reset link shortly.",
      });
    }

    // Generate a random token
    const token = randomUUID();
    // Hash the token before storing it (for security)
    const tokenHash = await hash(token, 10);

    // Store the token in the database
    // Delete any existing tokens for this user first
    await prisma.idnbi_PasswordResetToken.deleteMany({
      where: { user_id: user.id },
    });

    // Create a new token with expiration time (1 hour from now)
    await prisma.idnbi_PasswordResetToken.create({
      data: {
        token_hash: tokenHash,
        user_id: user.id,
        expires_at: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
      },
    }); // Record the action in the audit log
    await createAuditLog({
      userId: user.id,
      actionType: AuditActionType.PASSWORD_RESET_REQUEST,
      targetResource: "AUTH",
      ipAddress: request.headers.get("x-forwarded-for") || "127.0.0.1",
      details: {
        message: "Password reset link requested",
        email: user.email,
      },
    });

    // Send email with reset link
    try {
      // In a real implementation, use sendTemplatedEmail from @/lib/email
      // For now, we'll log it to the console
      console.log(
        `Password reset link for ${email}: /reset-password?token=${token}`,
      );

      // TODO: Implement proper email sending
      // await sendTemplatedEmail(
      //  'forgot_password',
      //  user.email,
      //  'Reset Your Password',
      //  {
      //    name: user.name || '',
      //    resetLink: `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`,
      //    expiresIn: '1 hour'
      //  }
      //);
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error("Error sending reset email:", emailError);
      Sentry.captureException(emailError);
    }

    // Return success response
    return NextResponse.json({
      message:
        "If your email is registered, you will receive a password reset link shortly.",
    });
  } catch (error) {
    console.error("Error processing forgot password request:", error);
    Sentry.captureException(error);

    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
