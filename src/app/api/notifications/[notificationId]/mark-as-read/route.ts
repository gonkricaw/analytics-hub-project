import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(
  request: Request,
  { params }: { params: { notificationId: string } },
) {
  try {
    const { notificationId } = params;

    // Check authentication
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 },
      );
    }

    // Check if notification exists for this user
    const notification = await prisma.idnbi_UserNotificationStatus.findUnique({
      where: {
        userId_notificationId: {
          userId: session.user.id,
          notificationId: notificationId,
        },
      },
    });

    if (!notification) {
      return NextResponse.json(
        { error: "Notification not found" },
        { status: 404 },
      );
    }

    // Update notification status
    const updatedNotification =
      await prisma.idnbi_UserNotificationStatus.update({
        where: {
          userId_notificationId: {
            userId: session.user.id,
            notificationId: notificationId,
          },
        },
        data: {
          read: true,
          read_at: new Date(),
        },
      });

    return NextResponse.json(updatedNotification, { status: 200 });
  } catch (error) {
    console.error("Error marking notification as read:", error);
    return NextResponse.json(
      { error: "Failed to mark notification as read" },
      { status: 500 },
    );
  }
}
