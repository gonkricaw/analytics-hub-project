import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import authOptions from "@/lib/auth";
import * as Sentry from "@sentry/nextjs";

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
 * GET /api/admin/audit-logs
 * Get audit logs with filtering and pagination (admin only)
 */
export async function GET(request: NextRequest) {
  // Check if user is admin
  if (!(await isAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    // Get query parameters for filtering and pagination
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const userId = searchParams.get("userId");
    const actionType = searchParams.get("actionType");
    const resource = searchParams.get("resource");
    const resourceId = searchParams.get("resourceId");
    const fromDate = searchParams.get("fromDate");
    const toDate = searchParams.get("toDate");
    const ipAddress = searchParams.get("ipAddress");

    // Calculate offset for pagination
    const skip = (page - 1) * limit;

    // Build where clause for filtering
    const where: any = {};

    if (userId) {
      where.user_id = userId;
    }

    if (actionType) {
      where.action_type = actionType;
    }

    if (resource) {
      where.target_resource = resource;
    }

    if (resourceId) {
      where.target_resource_id = resourceId;
    }

    if (ipAddress) {
      where.ip_address = ipAddress;
    }

    // Date range filter
    if (fromDate || toDate) {
      where.created_at = {};

      if (fromDate) {
        where.created_at.gte = new Date(fromDate);
      }

      if (toDate) {
        where.created_at.lte = new Date(toDate);
      }
    }

    // Get total count for pagination
    const totalCount = await prisma.idnbi_AuditLog.count({ where });

    // Get audit logs
    const auditLogs = await prisma.idnbi_AuditLog.findMany({
      where,
      orderBy: {
        created_at: "desc",
      },
      skip,
      take: limit,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    // Process logs to parse JSON details if needed
    const processedLogs = auditLogs.map((log) => ({
      ...log,
      details: log.details ? JSON.parse(log.details as string) : null,
    }));

    return NextResponse.json({
      auditLogs: processedLogs,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching audit logs:", error);
    Sentry.captureException(error);
    return NextResponse.json(
      { error: "Failed to fetch audit logs" },
      { status: 500 },
    );
  }
}
