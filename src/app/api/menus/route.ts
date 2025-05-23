// filepath: d:\Project\NEXTJS\analytics-hub-project\src\app\api\menus\route.ts
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { cacheableValue } from "@/lib/cache";
import * as Sentry from "@sentry/nextjs";

// Define types for menu items in the API response
export type MenuItem = {
  id: string;
  title: string;
  parent_id: string | null;
  order: number;
  icon_class: string | null;
  type: "link_internal" | "link_external" | "dropdown";
  target_url: string | null;
  content_id: string | null;
  children: MenuItem[];
};

// Define a type for the menu items from the database
interface DBMenuItem {
  id: string;
  title: string;
  parent_id: string | null;
  order: number;
  icon_class: string | null;
  type: string;
  target_url: string | null;
  content_id: string | null;
  other_idnbi_MenuItem?: DBMenuItem[];
}

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
    }

    // Get all menu items with caching based on user role
    // Cache for 30 minutes (1800 seconds) - balance between performance and updates
    let dbMenuItems: DBMenuItem[] = [];
    
    try {
      dbMenuItems = await cacheableValue<DBMenuItem[]>(
        `menus:role:${roleId}`,
        async () => {
          // Fetch menu items from database
          return await prisma.idnbi_MenuItem.findMany({
            where: {
              idnbi_MenuRole: {
                some: {
                  roleId: roleId,
                },
              },
            },
            include: {
              other_idnbi_MenuItem: {
                include: {
                  other_idnbi_MenuItem: true, // For handling up to 3 levels of menu hierarchy
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
    } catch (cacheError) {
      console.error("Cache error, falling back to direct DB query:", cacheError);
      
      // Fall back to direct database query without caching
      dbMenuItems = await prisma.idnbi_MenuItem.findMany({
        where: {
          idnbi_MenuRole: {
            some: {
              roleId: roleId,
            },
          },
        },
        include: {
          other_idnbi_MenuItem: {
            include: {
              other_idnbi_MenuItem: true,
            },
          },
        },
        orderBy: {
          order: "asc",
        },
      });
    }

    // Convert DB menu items to API menu items
    const convertToMenuItem = (dbItem: DBMenuItem): MenuItem => {
      // Determine the type based on whether it has children
      let menuType: MenuItem['type'] = "link_internal";
      
      if (dbItem.type === "link_external") {
        menuType = "link_external";
      } else if (
        dbItem.other_idnbi_MenuItem && 
        dbItem.other_idnbi_MenuItem.length > 0
      ) {
        menuType = "dropdown";
      }
      
      return {
        id: dbItem.id,
        title: dbItem.title,
        parent_id: dbItem.parent_id,
        order: dbItem.order,
        icon_class: dbItem.icon_class,
        type: menuType,
        target_url: dbItem.target_url,
        content_id: dbItem.content_id,
        children: dbItem.other_idnbi_MenuItem 
          ? dbItem.other_idnbi_MenuItem.map(child => convertToMenuItem(child))
          : []
      };
    };

    // Filter root menu items (those without a parent)
    const rootMenuItems = dbMenuItems.filter(item => !item.parent_id);
    
    // Create a hierarchical structure
    const menuHierarchy: MenuItem[] = rootMenuItems.map(item => convertToMenuItem(item));

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
