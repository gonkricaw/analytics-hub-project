import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Get the current authenticated user's session
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Get user's role ID
    const roleId = session.user.roleId;
    if (!roleId) {
      return NextResponse.json(
        { error: 'User role not defined' },
        { status: 400 }
      );
    }

    // Get all menu items that are accessible to the user's role
    const menuItems = await prisma.idnbi_MenuItem.findMany({
      where: {
        menuItemRoles: {
          some: {
            role_id: roleId
          }
        }
      },
      include: {
        children: {
          include: {
            children: true // For handling up to 3 levels of menu hierarchy
          }
        }
      },
      orderBy: [
        { parent_id: 'asc' },
        { order: 'asc' } // Sort by the order field
      ]
    });

    // Restructure menu items to form a hierarchical structure
    const rootMenuItems = menuItems.filter(item => !item.parent_id);
    
    return NextResponse.json(rootMenuItems, { status: 200 });
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch menu items' },
      { status: 500 }
    );
  }
}
