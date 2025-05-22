import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { hash, compare } from "bcryptjs";
import authOptions from "@/lib/auth";
import prisma from "@/lib/prisma";
import { withCsrfProtection } from "@/lib/csrf";
import { createAuditLog, AuditActionType } from "@/lib/auditLog";
import * as Sentry from "@sentry/nextjs";

// Interface for the extended session
interface ExtendedSession {
  user?: {
    id?: string;
    name?: string | null;
    email?: string | null;
  };
}

/**
 * PUT /api/users/me/password
 * Update the current user's password
 */
async function handlePasswordChange(request: NextRequest) {
  try {
    // Get the current session
    const session = (await getServerSession(authOptions)) as ExtendedSession;

    // If there's no session or user, return 401 Unauthorized
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    // Parse the request body
    const { currentPassword, newPassword } = await request.json();

    // Validate inputs
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: "Current password and new password are required" },
        { status: 400 },
      );
    }

    // Validate password strength
    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: "New password must be at least 8 characters long" },
        { status: 400 },
      );
    }

    // Get the user from the database
    const user = await prisma.idnbi_User.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Verify the current password
    const isPasswordValid = await compare(currentPassword, user.password_hash);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Current password is incorrect" },
        { status: 400 },
      );
    }

    // Hash the new password
    const hashedPassword = await hash(newPassword, 12);

    // Update the user's password
    await prisma.idnbi_User.update({
      where: { id: userId },
      data: {
        password_hash: hashedPassword,
        password_last_changed_at: new Date(),
      },
    });

    // Log the password change in audit log
    try {
      await createAuditLog({
        userId,
        actionType: AuditActionType.PASSWORD_RESET_COMPLETE,
        targetResource: "USER",
        targetResourceId: userId,
        ipAddress: request.headers.get("x-forwarded-for") || "unknown",
        details: {
          password_changed_by_user: true,
        },
      });
    } catch (auditError) {
      Sentry.captureException(auditError);
      console.error("Error logging password change:", auditError);
      // Continue execution - don't fail the request because of audit log
    }

    return NextResponse.json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error("Error updating password:", error);
    Sentry.captureException(error);
    return NextResponse.json(
      { error: "Failed to update password" },
      { status: 500 },
    );
  }
}

// Export the password change endpoint with CSRF protection
export const PUT = withCsrfProtection(handlePasswordChange);
