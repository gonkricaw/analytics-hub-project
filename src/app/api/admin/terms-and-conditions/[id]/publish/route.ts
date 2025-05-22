import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import authOptions from "@/lib/auth";

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
 * POST /api/admin/terms-and-conditions/[id]/publish
 * Publish terms and conditions (admin only)
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
    // Check if terms and conditions exist
    const existingTerms = await prisma.idnbi_TermsAndConditions.findUnique({
      where: { id },
    });

    if (!existingTerms) {
      return NextResponse.json(
        { error: "Terms and conditions not found" },
        { status: 404 },
      );
    }

    // Check if already published
    if (existingTerms.published_at) {
      return NextResponse.json(
        { error: "These terms and conditions are already published" },
        { status: 400 },
      );
    }

    // Update the terms and conditions to mark as published
    const publishedTerms = await prisma.idnbi_TermsAndConditions.update({
      where: { id },
      data: {
        published_at: new Date(),
      },
    });

    // Reset terms_accepted_at for all users to enforce re-acceptance
    await prisma.idnbi_User.updateMany({
      data: {
        terms_accepted_at: null,
      },
    });

    // Create audit log
    const session = await getServerSession(authOptions);
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: session?.user.id,
        action_type: "PUBLISH_TERMS",
        target_resource: "TERMS",
        target_resource_id: id,
        ip_address: request.headers.get("x-forwarded-for") || "127.0.0.1",
        details: `Published terms and conditions version ${existingTerms.version}`,
      },
    });

    return NextResponse.json({
      message: "Terms and conditions published successfully",
      termsAndConditions: publishedTerms,
    });
  } catch (error) {
    console.error("Error publishing terms and conditions:", error);
    return NextResponse.json(
      { error: "Failed to publish terms and conditions" },
      { status: 500 },
    );
  }
}
