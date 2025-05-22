import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import authOptions from "@/lib/auth";

// Helper function to check if user is admin
async function isAdmin(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return false;
  }

  // Check if user has admin role
  return session.user.role === "Admin";
}

/**
 * DELETE /api/admin/ip-blocks/[ipAddress]
 * Remove an IP block (admin only)
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { ipAddress: string } },
) {
  // Check if user is admin
  if (!(await isAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { ipAddress } = params;

  try {
    // Check if the IP block exists
    const existingBlock = await prisma.idnbi_IPBlocklist.findUnique({
      where: { ip_address: ipAddress },
    });

    if (!existingBlock) {
      return NextResponse.json(
        { error: "IP block not found" },
        { status: 404 },
      );
    }

    // Delete the IP block
    await prisma.idnbi_IPBlocklist.delete({
      where: { ip_address: ipAddress },
    });

    // Create audit log
    const session = await getServerSession(authOptions);
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: session?.user.id,
        action_type: "UNBLOCK_IP",
        target_resource: "IP_BLOCKLIST",
        target_resource_id: ipAddress,
        ip_address: request.headers.get("x-forwarded-for") || "127.0.0.1",
        details: `IP ${ipAddress} unblocked`,
      },
    });

    return NextResponse.json({
      message: "IP address unblocked successfully",
    });
  } catch (error) {
    console.error("Error unblocking IP:", error);
    return NextResponse.json(
      { error: "Failed to unblock IP address" },
      { status: 500 },
    );
  }
}
