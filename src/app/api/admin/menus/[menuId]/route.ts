import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { randomUUID } from "crypto";

// Schema for menu item update
const menuItemUpdateSchema = z.object({
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

export async function GET(
  request: Request,
  { params }: { params: { menuId: string } },
) {
  try {
    const { menuId } = params;

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

    // Get the menu item with roles
    const menuItem = await prisma.idnbi_MenuItem.findUnique({
      where: { id: menuId },
      include: {
        idnbi_MenuRole: {
          select: {
            roleId: true,
          },
        },
      },
    });

    if (!menuItem) {
      return NextResponse.json(
        { error: "Menu item not found" },
        { status: 404 },
      );
    }

    // Transform the data to include the roles array
    const response = {
      ...menuItem,
      roles: menuItem.idnbi_MenuRole.map((role) => role.roleId),
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error retrieving menu item:", error);
    return NextResponse.json(
      { error: "Failed to retrieve menu item" },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { menuId: string } },
) {
  try {
    const { menuId } = params;

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
      const validatedData = menuItemUpdateSchema.parse(body);

      // First, check if menu item exists
      const existingMenuItem = await prisma.idnbi_MenuItem.findUnique({
        where: { id: menuId },
        include: {
          idnbi_MenuRole: true,
        },
      });

      if (!existingMenuItem) {
        return NextResponse.json(
          { error: "Menu item not found" },
          { status: 404 },
        );
      }

      // Update the menu item transaction
      const updatedMenuItem = await prisma.$transaction(async (tx) => {
        // Delete all existing role associations
        await tx.idnbi_MenuRole.deleteMany({
          where: { menuId: menuId },
        });

        // Update the menu item
        const updated = await tx.idnbi_MenuItem.update({
          where: { id: menuId },
          data: {
            title: validatedData.title,
            parent_id: validatedData.parent_id,
            order: validatedData.order,
            icon_class: validatedData.icon_class,
            type: validatedData.type,
            target_url: validatedData.target_url,
            content_id: validatedData.content_id,
          },
        });

        // Create new role associations
        for (const roleId of validatedData.roles) {
          await tx.idnbi_MenuRole.create({
            data: {
              menuId: menuId,
              roleId: roleId,
            },
          });
        }

        return updated;
      });

      // Log the action in AuditLog
      await prisma.idnbi_AuditLog.create({
        data: {
          id: randomUUID(),
          userId: session.user.id,
          action: "UPDATE",
          resource: "MENU_ITEM",
          resourceId: menuId,
          details: JSON.stringify({
            previous: existingMenuItem,
            updated: {
              ...updatedMenuItem,
              roles: validatedData.roles,
            },
          }),
        },
      });

      return NextResponse.json(updatedMenuItem, { status: 200 });
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
    console.error("Error updating menu item:", error);
    return NextResponse.json(
      { error: "Failed to update menu item" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { menuId: string } },
) {
  try {
    const { menuId } = params;

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

    // Check if menu item exists
    const existingMenuItem = await prisma.idnbi_MenuItem.findUnique({
      where: { id: menuId },
    });

    if (!existingMenuItem) {
      return NextResponse.json(
        { error: "Menu item not found" },
        { status: 404 },
      );
    }

    // Check if menu item has children
    const childrenCount = await prisma.idnbi_MenuItem.count({
      where: { parent_id: menuId },
    });

    if (childrenCount > 0) {
      return NextResponse.json(
        {
          error:
            "Cannot delete menu item with children. Remove children first.",
        },
        { status: 400 },
      );
    }

    // Delete the menu item and its role associations
    await prisma.$transaction(async (tx) => {
      // Delete role associations first
      await tx.idnbi_MenuRole.deleteMany({
        where: { menuId: menuId },
      });

      // Delete the menu item
      await tx.idnbi_MenuItem.delete({
        where: { id: menuId },
      });
    });

    // Log the action in AuditLog
    await prisma.idnbi_AuditLog.create({
      data: {
        id: randomUUID(),
        userId: session.user.id,
        action: "DELETE",
        resource: "MENU_ITEM",
        resourceId: menuId,
        details: JSON.stringify(existingMenuItem),
      },
    });

    return NextResponse.json(
      { message: "Menu item deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting menu item:", error);
    return NextResponse.json(
      { error: "Failed to delete menu item" },
      { status: 500 },
    );
  }
}
