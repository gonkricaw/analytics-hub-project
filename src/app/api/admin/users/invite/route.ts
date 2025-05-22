import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { hash } from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
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
 * POST /api/admin/users/invite
 * Invite a new user (admin only)
 */
export async function POST(request: NextRequest) {
  // Check if user is admin
  if (!await isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  
  try {
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
      where: { email },
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }
    
    // Generate a temporary password
    const tempPassword = uuidv4().substring(0, 8);
    const hashedPassword = await hash(tempPassword, 10);
    
    // Create the user with temp_password_flag set to true
    const user = await prisma.idnbi_User.create({
      data: {
        name,
        email,
        password_hash: hashedPassword,
        role_id: roleId,
        temp_password_flag: true,
        invited_at: new Date(),
      },
    });
    
    // Get email template
    const emailTemplate = await prisma.idnbi_EmailTemplate.findUnique({
      where: { template_type: 'user_invitation' },
    });
    
    // In a real application, you would send an email with the temporary password
    // For now, we'll just log it
    console.log(`Invited user ${email} with temporary password: ${tempPassword}`);
    
    // Create audit log
    const session = await getServerSession(authOptions);
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: session?.user.id,
        action_type: 'INVITE_USER',
        target_resource: 'USER',
        target_resource_id: user.id,
        ip_address: request.headers.get('x-forwarded-for') || '127.0.0.1',
        details: `Invited user ${email} with role ${roleId}`,
      },
    });
    
    return NextResponse.json({
      message: 'User invited successfully',
      userId: user.id,
    });
  } catch (error) {
    console.error('Error inviting user:', error);
    return NextResponse.json({ error: 'Failed to invite user' }, { status: 500 });
  }
}
