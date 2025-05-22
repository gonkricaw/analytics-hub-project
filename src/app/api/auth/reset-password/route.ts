import { NextResponse } from "next/server";
import { hash, compare } from "bcryptjs";
import prisma from "@/lib/prisma";

/**
 * POST /api/auth/reset-password
 * Reset a user's password using a valid token
 */
export async function POST(request: Request) {
  try {
    // Parse the request body
    const { token, password } = await request.json();

    // Validate input
    if (!token || !password) {
      return NextResponse.json(
        { error: "Token and password are required" },
        { status: 400 },
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters long" },
        { status: 400 },
      );
    }

    // Find the token in the database
    const tokenRecords = await prisma.idnbi_PasswordResetToken.findMany({
      where: {},
      include: {
        user: true,
      },
    });

    // Verify each token (since we stored hash, not raw token)
    let validToken = null;
    let user = null;

    // We have to loop through and check each token hash
    for (const record of tokenRecords) {
      // Skip already used tokens
      if (record.is_used) continue;

      // Skip expired tokens
      if (record.expires_at < new Date()) continue;

      // Check if this is the right token
      try {
        const isMatch = await compare(token, record.token_hash);
        if (isMatch) {
          validToken = record;
          user = record.user;
          break;
        }
      } catch (error) {
        console.error("Error comparing token hash:", error);
      }
    }

    if (!validToken || !user) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 },
      );
    }

    // Mark the token as used
    await prisma.idnbi_PasswordResetToken.update({
      where: { id: validToken.id },
      data: { is_used: true },
    });

    // Hash the new password
    const hashedPassword = await hash(password, 10);

    // Update the user's password
    await prisma.idnbi_User.update({
      where: { id: user.id },
      data: {
        password_hash: hashedPassword,
        // Reset failed login attempts and unblock IP if it was blocked
        failed_login_attempts: 0,
        is_ip_blocked: false,
        // If it was a temporary password, mark it as no longer temporary
        temp_password_flag: false,
      },
    });

    // Record the action in the audit log
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: user.id,
        action_type: "PASSWORD_RESET",
        target_resource: "USER",
        target_resource_id: user.id,
        ip_address: request.headers.get("x-forwarded-for") || "127.0.0.1",
        details: "Password was reset using a reset token",
      },
    });

    // Return success response
    return NextResponse.json({
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error("Error processing password reset:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
