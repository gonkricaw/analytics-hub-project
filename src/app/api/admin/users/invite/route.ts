import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { hash } from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import prisma from '@/lib/prisma';
import authOptions from '@/lib/auth';
import { withCsrfProtection } from '@/lib/csrf';
import { createAuditLog, AuditActionType } from '@/lib/auditLog';
import * as Sentry from '@sentry/nextjs';

// Helper function to check if user is admin
async function isAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return false;
  }
  
  // Check if user has admin role
  return session.user.role === 'Admin';
}

/**
 * POST /api/admin/users/invite
 * Invite a new user (admin only)
 */
async function handleUserInvite(request: NextRequest) {
  try {
    // Check if user is admin
    if (!await isAdmin()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    
    const { name, email, roleId } = await request.json();
    
    // Validate required fields
    if (!name || !email || !roleId) {
      return NextResponse.json(
        { error: 'Name, email, and role are required' },
        { status: 400 }
      );
    }
    
    // Check if email already exists
    const existingUser = await prisma.idnbi_User.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }
    
    // Check if the role exists
    const role = await prisma.idnbi_Role.findUnique({
      where: { id: roleId }
    });
    
    if (!role) {
      return NextResponse.json(
        { error: 'Invalid role' },
        { status: 400 }
      );
    }
    
    // Generate a temporary password
    const temporaryPassword = uuidv4().substring(0, 8);
    const hashedPassword = await hash(temporaryPassword, 12);
    
    // Create the user
    const user = await prisma.idnbi_User.create({
      data: {
        name,
        email,
        password_hash: hashedPassword,
        role_id: roleId,
        is_active: true,
        force_password_change: true,
        created_by: (await getServerSession(authOptions))?.user?.id || null
      }
    });

    // Get the current session for audit logging
    const session = await getServerSession(authOptions);
    const adminId = session?.user?.id;
    
    // Log the user invitation in audit log
    if (adminId) {
      await createAuditLog({
        userId: adminId,
        actionType: AuditActionType.USER_CREATE,
        targetResource: 'USER',
        targetResourceId: user.id,
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        details: {
          invited_user_email: email,
          invited_user_name: name,
          assigned_role: role.name,
          force_password_change: true
        }
      });
    }
    
    // Return the success response with the temporary password
    return NextResponse.json({
      success: true,
      userId: user.id,
      temporaryPassword
    });
  } catch (error) {
    console.error('Error inviting user:', error);
    Sentry.captureException(error);
    return NextResponse.json(
      { error: 'Failed to invite user' },
      { status: 500 }
    );
  }
}

// Export the user invitation endpoint with CSRF protection
export const POST = withCsrfProtection(handleUserInvite);
