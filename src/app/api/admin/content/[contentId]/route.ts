import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import authOptions from "@/lib/auth";
import prisma from "@/lib/prisma";
import { z } from "zod";

const contentUpdateSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  type: z.enum(["html", "image", "youtube", "document", "external_link_embed"]),
  content_data: z.string().min(1, { message: "Content data is required" }),
});

export async function GET(
  request: Request,
  { params }: { params: { contentId: string } },
) {
  try {
    const { contentId } = params;

    // Check authentication
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 },
      );
    }

    // Get the content
    const content = await prisma.idnbi_Content.findUnique({
      where: { id: contentId },
      include: {
        created_by_user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!content) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 });
    }

    return NextResponse.json(content, { status: 200 });
  } catch (error) {
    console.error("Error retrieving content:", error);
    return NextResponse.json(
      { error: "Failed to retrieve content" },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { contentId: string } },
) {
  try {
    const { contentId } = params;

    // Check authentication
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 },
      );
    }

    // Check if user has permission to update content
    // This is a simplified check. In a real app, you would check specific permissions
    if (session.user.role !== "admin") {
      return NextResponse.json({ error: "Permission denied" }, { status: 403 });
    }

    // Check if content exists
    const existingContent = await prisma.idnbi_Content.findUnique({
      where: { id: contentId },
    });

    if (!existingContent) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 });
    }

    // Parse and validate request body
    const body = await request.json();

    try {
      const validatedData = contentUpdateSchema.parse(body);

      // Update the content
      const updatedContent = await prisma.idnbi_Content.update({
        where: { id: contentId },
        data: {
          title: validatedData.title,
          type: validatedData.type,
          content_data: validatedData.content_data,
          updated_at: new Date(),
        },
      });

      // Log the action in AuditLog
      await prisma.idnbi_AuditLog.create({
        data: {
          userId: session.user.id,
          action: "UPDATE",
          resource: "CONTENT",
          resourceId: contentId,
          details: JSON.stringify({
            previous: {
              title: existingContent.title,
              type: existingContent.type,
            },
            updated: {
              title: updatedContent.title,
              type: updatedContent.type,
            },
          }),
        },
      });

      return NextResponse.json(updatedContent, { status: 200 });
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        return NextResponse.json(
          { error: "Validation error", details: validationError.errors },
          { status: 400 },
        );
      }
      throw validationError;
    }
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { error: "Failed to update content" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { contentId: string } },
) {
  try {
    const { contentId } = params;

    // Check authentication
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 },
      );
    }

    // Check if user has permission to delete content
    // This is a simplified check. In a real app, you would check specific permissions
    if (session.user.role !== "admin") {
      return NextResponse.json({ error: "Permission denied" }, { status: 403 });
    }

    // Check if content exists
    const existingContent = await prisma.idnbi_Content.findUnique({
      where: { id: contentId },
    });

    if (!existingContent) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 });
    }

    // Check if content is associated with any menu items
    const menuItemsCount = await prisma.idnbi_MenuItem.count({
      where: { content_id: contentId },
    });

    if (menuItemsCount > 0) {
      return NextResponse.json(
        {
          error:
            "Cannot delete content that is associated with menu items. Remove the associations first.",
        },
        { status: 400 },
      );
    }

    // Delete the content
    await prisma.idnbi_Content.delete({
      where: { id: contentId },
    });

    // Log the action in AuditLog
    await prisma.idnbi_AuditLog.create({
      data: {
        userId: session.user.id,
        action: "DELETE",
        resource: "CONTENT",
        resourceId: contentId,
        details: JSON.stringify(existingContent),
      },
    });

    return NextResponse.json(
      { message: "Content deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting content:", error);
    return NextResponse.json(
      { error: "Failed to delete content" },
      { status: 500 },
    );
  }
}
