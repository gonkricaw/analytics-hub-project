import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import authOptions from "@/lib/auth";

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
 * GET /api/admin/users
 * Get all users (admin only)
 */
export async function GET(_request: NextRequest) {
  // Check if user is admin
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const users = await prisma.idnbi_User.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        idnbi_UserRole: {
          include: {
            idnbi_Role: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        last_login_at: true,
        status: true,
        created_at: true,
        terms_accepted_at: true,
      },
    });

    // Transform the result to match the expected format
    const transformedUsers = users.map(user => {
      const role = user.idnbi_UserRole[0]?.idnbi_Role || null;
      
      return {
        ...user,
        role: role,
      };
    });

    return NextResponse.json(transformedUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 },
    );
  }
}
