import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { z } from "zod";

// Schema for menu access log
const menuAccessLogSchema = z.object({
  menuItemId: z.string().uuid(),
});

export async function POST(request: Request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 },
      );
    }

    // Parse and validate request body
    const body = await request.json();

    try {
      const validatedData = menuAccessLogSchema.parse(body);

      // Check if the menu item exists
      const menuItem = await prisma.idnbi_MenuItem.findUnique({
        where: { id: validatedData.menuItemId },
      });

      if (!menuItem) {
        return NextResponse.json(
          { error: "Menu item not found" },
          { status: 404 },
        );
      }

      // Log the menu access
      await prisma.idnbi_MenuAccessLog.create({
        data: {
          user_id: session.user.id,
          menu_item_id: validatedData.menuItemId,
        },
      });

      return NextResponse.json({ success: true }, { status: 201 });
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
    console.error("Error logging menu access:", error);
    return NextResponse.json(
      { error: "Failed to log menu access" },
      { status: 500 },
    );
  }
}
