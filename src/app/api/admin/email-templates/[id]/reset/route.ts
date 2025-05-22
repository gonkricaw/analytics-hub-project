import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import authOptions from "@/lib/auth";

// Default email templates
const defaultTemplates: Record<string, { subject: string; body_html: string }> =
  {
    user_invitation: {
      subject: "Invitation to Indonet Analytics Hub",
      body_html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Welcome to Indonet Analytics Hub</h2>
        <p>Hello {{name}},</p>
        <p>You have been invited to join the Indonet Analytics Hub platform. To get started, please use the following credentials to log in:</p>
        <p><strong>Email:</strong> {{email}}</p>
        <p><strong>Temporary Password:</strong> {{temp_password}}</p>
        <p>You will be prompted to change your password upon your first login.</p>
        <p><a href="{{link}}" style="display: inline-block; background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Login Now</a></p>
        <p>If you have any questions, please contact our support team.</p>
        <p>Regards,<br>Indonet Analytics Hub Team</p>
      </div>
    `,
    },
    password_reset: {
      subject: "Password Reset Request",
      body_html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Password Reset</h2>
        <p>Hello {{name}},</p>
        <p>We received a request to reset your password. Please click the link below to create a new password:</p>
        <p><a href="{{link}}" style="display: inline-block; background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Reset Password</a></p>
        <p>This link is valid for 1 hour. If you did not request a password reset, please ignore this email.</p>
        <p>Regards,<br>Indonet Analytics Hub Team</p>
      </div>
    `,
    },
    system_warning: {
      subject: "Security Alert: Unusual Activity Detected",
      body_html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e11d48;">Security Alert</h2>
        <p>Hello {{name}},</p>
        <p>We have detected unusual activity on your account. For your security, please review recent account activity and take appropriate action if needed.</p>
        <p><a href="{{link}}" style="display: inline-block; background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Review Activity</a></p>
        <p>If you did not perform these actions, please change your password immediately and contact our support team.</p>
        <p>Regards,<br>Indonet Analytics Hub Security Team</p>
      </div>
    `,
    },
  };

// Helper function to check if user is admin
async function isAdmin(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return false;
  }

  // Check if user has admin role
  return session.user.role === "Admin";
}

/**
 * POST /api/admin/email-templates/[id]/reset
 * Reset an email template to default (admin only)
 */
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  // Check if user is admin
  if (!(await isAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { id } = params;

  try {
    // Check if the template exists
    const existingTemplate = await prisma.idnbi_EmailTemplate.findUnique({
      where: { id },
    });

    if (!existingTemplate) {
      return NextResponse.json(
        { error: "Email template not found" },
        { status: 404 },
      );
    }

    // Get default template content
    const defaultTemplate = defaultTemplates[existingTemplate.template_type];

    if (!defaultTemplate) {
      return NextResponse.json(
        { error: "No default template available for this type" },
        { status: 400 },
      );
    }

    // Reset the template to default
    const resetTemplate = await prisma.idnbi_EmailTemplate.update({
      where: { id },
      data: {
        subject: defaultTemplate.subject,
        body_html: defaultTemplate.body_html,
        is_custom: false, // Mark as default
      },
    });

    // Create audit log
    const session = await getServerSession(authOptions);
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: session?.user.id,
        action_type: "RESET_EMAIL_TEMPLATE",
        target_resource: "EMAIL_TEMPLATE",
        target_resource_id: id,
        ip_address: request.headers.get("x-forwarded-for") || "127.0.0.1",
        details: `Reset email template to default: ${existingTemplate.template_type}`,
      },
    });

    return NextResponse.json({
      message: "Email template reset successfully",
      template: resetTemplate,
    });
  } catch (error) {
    console.error("Error resetting email template:", error);
    return NextResponse.json(
      { error: "Failed to reset email template" },
      { status: 500 },
    );
  }
}
