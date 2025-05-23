import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { withCsrfProtection } from "@/lib/csrf";
import * as Sentry from "@sentry/nextjs";
import crypto from "crypto";

/**
 * POST /api/users/me/terms-acceptance
 * Accept terms and conditions
 */
const handler = async (request: NextRequest) => {
  try {
    const session = await getServerSession(authOptions);

    // Verify that the user is authenticated
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to perform this action" },
        { status: 401 },
      );
    }

    const { termsId } = await request.json();

    if (!termsId) {
      return NextResponse.json(
        { error: "Terms ID is required" },
        { status: 400 },
      );
    }

    // Verify that the terms exist
    const terms = await prisma.idnbi_TermsAndConditions.findUnique({
      where: { id: termsId },
    });

    if (!terms) {
      return NextResponse.json(
        { error: "Terms and conditions not found" },
        { status: 404 },
      );
    }

    // Update the user's acceptance
    await prisma.idnbi_User.update({
      where: { id: session.user.id },
      data: {
        terms_accepted_at: new Date(),
      },
    });

    // Log the acceptance
    await prisma.idnbi_AuditLog.create({
      data: {
        id: crypto.randomUUID(),
        userId: session.user.id,
        action: "TERMS_ACCEPTANCE",
        resource: "TERMS",
        resourceId: termsId,
        ip_address: request.headers.get("x-forwarded-for") || "127.0.0.1",
        details: JSON.stringify({
          message: `User accepted terms and conditions version ${terms.version}`
        })
      },
    });

    return NextResponse.json({
      message: "Terms and conditions accepted successfully",
    });
  } catch (error) {
    console.error("Error accepting terms:", error);
    Sentry.captureException(error);
    return NextResponse.json(
      { error: "Failed to accept terms" },
      { status: 500 },
    );
  }
};

// Apply CSRF protection to the handler
export const POST = withCsrfProtection(handler);
