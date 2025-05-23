// Helper function for admin authorization
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";

/**
 * Check if the current user has admin privileges
 * @param request - The NextRequest object (optional, for compatibility)
 * @returns Promise<{ isAdmin: boolean; session: any; error?: NextResponse }>
 */
export async function checkAdminAuth(request?: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return {
        isAdmin: false,
        session: null,
        error: NextResponse.json(
          { error: "Authentication required" },
          { status: 401 }
        ),
      };
    }

    // Check if user has admin role (uppercase ADMIN from database)
    if (session.user.role !== "ADMIN") {
      return {
        isAdmin: false,
        session,
        error: NextResponse.json(
          { error: "Unauthorized - Admin access required" },
          { status: 403 }
        ),
      };
    }

    return {
      isAdmin: true,
      session,
    };
  } catch (error) {
    console.error("Error checking admin auth:", error);
    return {
      isAdmin: false,
      session: null,
      error: NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      ),
    };
  }
}

/**
 * Legacy helper function for backward compatibility
 * @param request - The NextRequest object
 * @returns Promise<boolean>
 */
export async function isAdmin(request?: NextRequest): Promise<boolean> {
  const authResult = await checkAdminAuth(request);
  return authResult.isAdmin;
}
