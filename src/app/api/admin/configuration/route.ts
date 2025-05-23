import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import authOptions from "@/lib/auth";
import { randomUUID } from "crypto";

// Helper function to check if user is admin
async function isAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return false;
  }

  // Check if user has admin role
  return session.user.role === "Admin";
}

/**
 * GET /api/admin/configuration
 * Get system configuration (admin only)
 */
export async function GET(request: NextRequest) {
  // Check if user is admin
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    // Get existing configuration
    const config = await prisma.idnbi_SystemConfiguration.findUnique({
      where: { id: "1" },
    });

    // If no configuration exists, create default one
    if (!config) {
      const newConfig = await prisma.idnbi_SystemConfiguration.create({
        data: {
          id: "1",
          app_name: "Indonet Analytics Hub",
          updated_at: new Date(),
        }
      });
      return NextResponse.json(newConfig);
    }

    return NextResponse.json(config);
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
 * Update system configuration (admin only)
 */
export async function PUT(request: NextRequest) {
  // Check if user is admin
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { 
      app_name, 
      logo_url, 
      login_bg_url, 
      footer_text,
      default_profile_photo_url,
      jumbotron_content,
      marquee_content
    } = body;

    // Validate required fields
    if (!app_name) {
      return NextResponse.json(
        { error: "Application name is required" },
        { status: 400 },
      );
    }

    // Find existing config or create new one
    const existingConfig = await prisma.idnbi_SystemConfiguration.findUnique({
      where: { id: "1" },
    });

    let updatedConfig;
    
    if (existingConfig) {
      // Update existing config
      updatedConfig = await prisma.idnbi_SystemConfiguration.update({
        where: { id: "1" },
        data: {
          app_name,
          logo_url,
          login_bg_url,
          footer_text,
          default_profile_photo_url,
          jumbotron_content,
          marquee_content,
          updated_at: new Date(),
        },
      });
    } else {
      // Create new config
      updatedConfig = await prisma.idnbi_SystemConfiguration.create({
        data: {
          id: "1",
          app_name,
          logo_url,
          login_bg_url,
          footer_text,
          default_profile_photo_url,
          jumbotron_content,
          marquee_content,
          updated_at: new Date(),
        },
      });
    }

    // Create audit log
    const session = await getServerSession(authOptions);
    await prisma.idnbi_AuditLog.create({
      data: {
        id: randomUUID(),
        userId: session?.user.id,
        action: "UPDATE_CONFIGURATION",
        resource: "SYSTEM_CONFIG",
        resourceId: "1", 
        ip_address: request.headers.get("x-forwarded-for") || "127.0.0.1",
        details: JSON.stringify({
          previous: existingConfig,
          updated: updatedConfig,
        }),
      },
    });

    return NextResponse.json({
      message: "System configuration updated successfully",
      configuration: updatedConfig
    });
  } catch (error) {
    console.error("Error updating system configuration:", error);
    return NextResponse.json(
      { error: "Failed to update system configuration" },
      { status: 500 },
    );
  }
}
