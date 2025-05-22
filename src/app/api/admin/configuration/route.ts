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

// Default system configurations
const defaultConfigs = {
  session_timeout_minutes: "30",
  login_attempts_limit: "5",
  ip_block_duration_hours: "24",
  password_min_length: "8",
  password_require_special: "true",
  password_require_numbers: "true",
  password_require_uppercase: "true",
  system_maintenance_mode: "false",
  system_maintenance_message:
    "The system is currently undergoing maintenance. Please try again later.",
};

/**
 * GET /api/admin/configuration
 * Get all system configurations (admin only)
 */
export async function GET(request: NextRequest) {
  // Check if user is admin
  if (!(await isAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    // Get all existing configuration items
    const configs = await prisma.idnbi_SystemConfiguration.findMany();

    // Check if all default configurations exist, create them if not
    const existingKeys = configs.map((config) => config.key);
    const missingKeys = Object.keys(defaultConfigs).filter(
      (key) => !existingKeys.includes(key),
    );

    if (missingKeys.length > 0) {
      // Create missing configurations
      for (const key of missingKeys) {
        await prisma.idnbi_SystemConfiguration.create({
          data: {
            key,
            value: defaultConfigs[key as keyof typeof defaultConfigs],
          },
        });
      }

      // Fetch configurations again to include newly created ones
      return NextResponse.json(
        await prisma.idnbi_SystemConfiguration.findMany(),
      );
    }

    return NextResponse.json(configs);
  } catch (error) {
    console.error("Error fetching system configuration:", error);
    return NextResponse.json(
      { error: "Failed to fetch system configuration" },
      { status: 500 },
    );
  }
}

/**
 * PUT /api/admin/configuration
 * Update multiple system configurations (admin only)
 */
export async function PUT(request: NextRequest) {
  // Check if user is admin
  if (!(await isAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { configs } = await request.json();

    if (!Array.isArray(configs)) {
      return NextResponse.json(
        {
          error:
            'Invalid request format. "configs" should be an array of key-value pairs.',
        },
        { status: 400 },
      );
    }

    // Update each configuration item
    const updatePromises = configs.map(async (config) => {
      const { key, value } = config;

      if (!key) {
        throw new Error("Configuration key is required");
      }

      // Check if the configuration exists
      const existingConfig = await prisma.idnbi_SystemConfiguration.findUnique({
        where: { key },
      });

      if (existingConfig) {
        return prisma.idnbi_SystemConfiguration.update({
          where: { key },
          data: { value },
        });
      } else {
        return prisma.idnbi_SystemConfiguration.create({
          data: { key, value },
        });
      }
    });

    await Promise.all(updatePromises);

    // Create audit log
    const session = await getServerSession(authOptions);
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: session?.user.id,
        action_type: "UPDATE_CONFIGURATION",
        target_resource: "SYSTEM_CONFIG",
        target_resource_id: null,
        ip_address: request.headers.get("x-forwarded-for") || "127.0.0.1",
        details: `Updated ${configs.length} system configuration items`,
      },
    });

    return NextResponse.json({
      message: "System configuration updated successfully",
    });
  } catch (error) {
    console.error("Error updating system configuration:", error);
    return NextResponse.json(
      { error: "Failed to update system configuration" },
      { status: 500 },
    );
  }
}
