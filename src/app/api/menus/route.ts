import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { cacheableValue } from "@/lib/cache";
import * as Sentry from "@sentry/nextjs";

export async function GET() {
  try {
    // Get the current authenticated user's session
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 },
      );
    }

    // Get user's role ID
    const roleId = session.user.roleId;
    if (!roleId) {
      return NextResponse.json(
        { error: "User role not defined" },
        { status: 400 },
      );
    } // Define types for menu items
    type MenuItem = {
      id: string;
      title: string;
      url: string;
      icon?: string | null;
      parent_id?: string | null;
      order: number;
      is_active: boolean;
      children: MenuItem[];
    };

    // Get all menu items with caching based on user role
    // Cache for 30 minutes (1800 seconds) - balance between performance and updates
    const menuItems = await cacheableValue<MenuItem[]>(
      `menus:role:${roleId}`,
      async () => {
        // Fetch menu items from database
        return prisma.idnbi_MenuItem.findMany({
          where: {
            menuItemRoles: {
              some: {
                role_id: roleId,
              },
            },
          },
          include: {
            children: {
              include: {
                children: true, // For handling up to 3 levels of menu hierarchy
              },
            },
          },
          orderBy: {
            order: "asc",
          },
        });
      },
      { expireInSeconds: 1800 },
    );

    // Filter root menu items (those without a parent)
    const rootMenuItems = menuItems.filter((item) => !item.parent_id);
    // Create a hierarchical structure
    const menuHierarchy = rootMenuItems.map((item: MenuItem) => {
      return {
        ...item,
        children: item.children.map((child: MenuItem) => ({
          ...child,
          children: child.children,
        })),
      };
    });

    return NextResponse.json(menuHierarchy);
  } catch (error) {
    console.error("Failed to fetch menu items:", error);
    Sentry.captureException(error);
    return NextResponse.json(
      { error: "Failed to fetch menu items" },
      { status: 500 },
    );
  }
}
