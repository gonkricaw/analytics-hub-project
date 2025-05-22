import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import authOptions from '@/lib/auth';

// Helper function to check if user is admin
async function isAdmin(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return false;
  }
  
  // Check if user has admin role
  return session.user.role === 'Admin';
}

/**
 * PUT /api/admin/users/[userId]/status
 * Update user status (block/unblock)
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  // Check if user is admin
  if (!await isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  
  const { userId } = params;
  
  try {
    // Get status update data
    const { isBlocked } = await request.json();
    
    // Check if the user exists
    const user = await prisma.idnbi_User.findUnique({
      where: { id: userId },
    });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    // Update user status
    await prisma.idnbi_User.update({
      where: { id: userId },
      data: {
        is_ip_blocked: isBlocked,
        // If unblocking, reset failed login attempts
        ...(isBlocked === false ? { failed_login_attempts: 0 } : {}),
      },
    });
    
    // Create audit log
    const session = await getServerSession(authOptions);
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: session?.user.id,
        action_type: isBlocked ? 'BLOCK_USER' : 'UNBLOCK_USER',
        target_resource: 'USER',
        target_resource_id: userId,
        ip_address: request.headers.get('x-forwarded-for') || '127.0.0.1',
        details: `${isBlocked ? 'Blocked' : 'Unblocked'} user ${user.email}`,
      },
    });
    
    return NextResponse.json({
      message: `User ${isBlocked ? 'blocked' : 'unblocked'} successfully`,
    });
  } catch (error) {
    console.error('Error updating user status:', error);
    return NextResponse.json({ error: 'Failed to update user status' }, { status: 500 });
  }
}
