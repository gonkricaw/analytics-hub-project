import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { hash } from "bcryptjs";
import prisma from "@/lib/prisma";
import authOptions from "@/lib/auth";

/**
 * POST /api/auth/first-login-password
 * Change password on first login
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    // Verify that the user is authenticated
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to perform this action" },
        { status: 401 },
      );
    }

    // Check if the user actually needs to change their password
    const user = await prisma.idnbi_User.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (!user.temp_password_flag) {
      return NextResponse.json(
        { error: "Password change is not required" },
        { status: 400 },
      );
    }

    // Get the new password from the request
    const { newPassword } = await request.json();

    if (!newPassword || newPassword.length < 8) {
      return NextResponse.json(
        { error: "New password must be at least 8 characters long" },
        { status: 400 },
      );
    }

    // Hash the new password
    const hashedPassword = await hash(newPassword, 10);

    // Update the user's password and remove the temp flag
    await prisma.idnbi_User.update({
      where: { id: user.id },
      data: {
        password_hash: hashedPassword,
        temp_password_flag: false,
      },
    });

    // Log the password change
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: user.id,
        action_type: "PASSWORD_CHANGE",
        target_resource: "USER",
        target_resource_id: user.id,
        ip_address: request.headers.get("x-forwarded-for") || "127.0.0.1",
        details: "User changed password on first login",
      },
    });

    return NextResponse.json({
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    return NextResponse.json(
      { error: "Failed to change password" },
      { status: 500 },
    );
  }
}
