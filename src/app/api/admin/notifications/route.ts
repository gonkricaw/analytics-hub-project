import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { randomUUID } from "crypto";

const notificationSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  message: z.string().min(1, { message: "Message is required" }),
  type: z.string().min(1, { message: "Type is required" }),
  user_ids: z.array(z.string()).optional(),
});

export async function GET(request: Request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 },
      );
    }

    // Check if user has permission to access notifications
    if (session.user.role !== "admin") {
      return NextResponse.json({ error: "Permission denied" }, { status: 403 });
    }

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    // Calculate offset for pagination
    const skip = (page - 1) * limit;

    // Get total count for pagination
    const totalCount = await prisma.idnbi_Notification.count();

    // Get notifications with pagination
    const notifications = await prisma.idnbi_Notification.findMany({
      orderBy: {
        created_at: "desc",
      },
      skip,
      take: limit,
      include: {
        _count: {
          select: { idnbi_UserNotificationStatus: true },
        },
      },
    });

    return NextResponse.json(
      {
        notifications,
        pagination: {
          page,
          limit,
          totalCount,
          totalPages: Math.ceil(totalCount / limit),
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return NextResponse.json(
      { error: "Failed to fetch notifications" },
      { status: 500 },
    );
  }
}

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

    // Check if user has permission to create notifications
    if (session.user.role !== "admin") {
      return NextResponse.json({ error: "Permission denied" }, { status: 403 });
    }

    // Parse and validate the request body
    const body = await request.json();

    try {
      const validatedData = notificationSchema.parse(body);

      // Create the notification
      const notification = await prisma.idnbi_Notification.create({
        data: {
          id: randomUUID(),
          title: validatedData.title,
          message: validatedData.message,
          type: validatedData.type,
          updated_at: new Date(),
        },
      });

      // If specific user_ids are provided, only assign to those users
      // Otherwise, assign to all users
      if (validatedData.user_ids && validatedData.user_ids.length > 0) {
        // Create notification status entries for specific users
        const userNotificationStatuses = validatedData.user_ids.map(
          (userId) => ({
            userId: userId,
            notificationId: notification.id,
          }),
        );

        await prisma.idnbi_UserNotificationStatus.createMany({
          data: userNotificationStatuses,
        });
      } else {
        // Get all users
        const users = await prisma.idnbi_User.findMany({
          select: { id: true },
        });

        // Create notification status entries for all users
        const userNotificationStatuses = users.map((user) => ({
          userId: user.id,
          notificationId: notification.id,
        }));

        await prisma.idnbi_UserNotificationStatus.createMany({
          data: userNotificationStatuses,
        });
      }

      // Log the action in AuditLog
      await prisma.idnbi_AuditLog.create({
        data: {
          id: randomUUID(),
          userId: session.user.id,
          action: "CREATE",
          resource: "NOTIFICATION",
          resourceId: notification.id,
          details: JSON.stringify({
            title: notification.title,
            type: notification.type,
          }),
        },
      });

      return NextResponse.json(notification, { status: 201 });
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
    console.error("Error creating notification:", error);
    return NextResponse.json(
      { error: "Failed to create notification" },
      { status: 500 },
    );
  }
}
