import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { withCsrfProtection } from "@/lib/csrf";
import { AuditActionType, createAuditLog } from "@/lib/auditLog";
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
 * PUT /api/users/me/profile
 * Update the current user's profile information
 */
const handler = async (request: NextRequest) => {
  try {
    // Get the current session
    const session = (await getServerSession(authOptions)) as ExtendedSession;

    // If there's no session or user, return 401 Unauthorized
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    // Check if it's a form data request
    const contentType = request.headers.get("content-type");

    let name = "";
    let profilePhoto: File | null = null;

    if (contentType?.includes("multipart/form-data")) {
      // Handle form data (with file upload)
      const formData = await request.formData();
      name = formData.get("name") as string;
      profilePhoto = formData.get("profile_photo") as File | null;
    } else {
      // Handle JSON data (without file upload)
      const data = await request.json();
      name = data.name;
    }

    // Validate name
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // Prepare update data
    const updateData: any = { name };

    // Handle profile photo upload if provided
    if (profilePhoto) {
      // In a real implementation, you would upload the file to storage
      // For now, we'll just log it and pretend we saved it
      console.log(
        `Would upload photo: ${profilePhoto.name}, size: ${profilePhoto.size} bytes`,
      );

      // Simulate a URL for the uploaded file
      const photoUrl = `/uploads/profile/${userId}/${Date.now()}-${profilePhoto.name}`;
      updateData.profile_photo_url = photoUrl;
    }

    // Update the user in the database
    await prisma.idnbi_User.update({
      where: { id: userId },
      data: updateData,
    }); // Record the action in the audit log
    await createAuditLog({
      actionType: AuditActionType.USER_UPDATE,
      targetResource: "USER",
      targetResourceId: userId,
      ipAddress: request.headers.get("x-forwarded-for") || "127.0.0.1",
      details: {
        action: "User updated their profile",
        changedFields: Object.keys(updateData),
      },
    });

    // Revalidate the profile path
    revalidatePath("/profile");

    return NextResponse.json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    Sentry.captureException(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};

// Apply CSRF protection to the handler
export const PUT = withCsrfProtection(handler);
