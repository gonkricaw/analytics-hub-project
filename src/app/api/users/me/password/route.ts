import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { hash, compare } from 'bcryptjs';
import authOptions from '@/lib/auth';
import prisma from '@/lib/prisma';

// Interface for the extended session
interface ExtendedSession {
  user?: {
    id?: string;
    name?: string | null;
    email?: string | null;
  };
}

/**
 * PUT /api/users/me/password
 * Update the current user's password
 */
export async function PUT(request: Request) {
  try {
    // Get the current session
    const session = await getServerSession(authOptions) as ExtendedSession;

    // If there's no session or user, return 401 Unauthorized
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userId = session.user.id;
    
    // Parse the request body
    const { currentPassword, newPassword } = await request.json();
    
    // Validate inputs
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Current password and new password are required' },
        { status: 400 }
      );
    }
    
    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: 'New password must be at least 8 characters long' },
        { status: 400 }
      );
    }
    
    // Get the user from the database to verify current password
    const user = await prisma.idnbi_User.findUnique({
      where: { id: userId },
    });
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    // Verify the current password
    const isPasswordValid = await compare(currentPassword, user.password_hash);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Current password is incorrect' },
        { status: 400 }
      );
    }
    
    // Hash the new password
    const hashedPassword = await hash(newPassword, 10);
    
    // Update the password
    await prisma.idnbi_User.update({
      where: { id: userId },
      data: {
        password_hash: hashedPassword,
        // If it was a temporary password, mark it as no longer temporary
        temp_password_flag: false
      }
    });
    
    // Record the action in the audit log
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: userId,
        action_type: 'PASSWORD_CHANGE',
        target_resource: 'USER',
        target_resource_id: userId,
        ip_address: request.headers.get('x-forwarded-for') || '127.0.0.1',
        details: 'User changed their password'
      }
    });
    
    return NextResponse.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
