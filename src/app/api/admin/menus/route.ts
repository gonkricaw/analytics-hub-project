import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { randomUUID } from "crypto";

// Schema for menu item creation
const menuItemSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  parent_id: z.string().uuid().nullable(),
  order: z.number().int().nonnegative(),
  icon_class: z.string().nullable(),
  type: z.enum(["link_internal", "link_external", "dropdown"]),
  target_url: z.string().nullable(),
  content_id: z.string().uuid().nullable(),
  roles: z
    .array(z.string())
    .min(1, { message: "At least one role must be selected" }),
});

export async function POST(request: Request) {
  try {
    // Check authentication and admin role
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 },
      );
    }

    // Check if user has admin role
    if (session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Admin access required" },
        { status: 403 },
      );
    }

    // Parse and validate request body
    const body = await request.json();

    try {
      const validatedData = menuItemSchema.parse(body);

      // Create the menu item
      const menuItem = await prisma.idnbi_MenuItem.create({
        data: {
          id: randomUUID(),
          title: validatedData.title,
          parent_id: validatedData.parent_id,
          order: validatedData.order,
          icon_class: validatedData.icon_class,
          type: validatedData.type,
          target_url: validatedData.target_url,
          content_id: validatedData.content_id,
          updated_at: new Date(),
        },
      });

      // Create role associations
      for (const roleId of validatedData.roles) {
        await prisma.idnbi_MenuRole.create({
          data: {
            menuId: menuItem.id,
            roleId: roleId,
          },
        });
      }

      // Log the action in AuditLog
      await prisma.idnbi_AuditLog.create({
        data: {
          id: randomUUID(),
          userId: session.user.id,
          action: "CREATE",
          resource: "MENU_ITEM",
          resourceId: menuItem.id,
          details: JSON.stringify(menuItem),
        },
      });

      return NextResponse.json(menuItem, { status: 201 });
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
    console.error("Error creating menu item:", error);
    return NextResponse.json(
      { error: "Failed to create menu item" },
      { status: 500 },
    );
  }
}
