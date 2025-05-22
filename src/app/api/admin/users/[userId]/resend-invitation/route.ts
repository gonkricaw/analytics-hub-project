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
 * POST /api/admin/users/[userId]/resend-invitation
 * Resend invitation to a user
 */
export async function POST(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  // Check if user is admin
  if (!await isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  
  const { userId } = params;
  
  try {
    // Check if the user exists
    const user = await prisma.idnbi_User.findUnique({
      where: { id: userId },
    });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    // Generate a new temporary password
    const tempPassword = uuidv4().substring(0, 8);
    const hashedPassword = await hash(tempPassword, 10);
    
    // Update the user
    await prisma.idnbi_User.update({
      where: { id: userId },
      data: {
        password_hash: hashedPassword,
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
    console.log(`Resent invitation to ${user.email} with temporary password: ${tempPassword}`);
    
    // Create audit log
    const session = await getServerSession(authOptions);
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: session?.user.id,
        action_type: 'RESEND_INVITATION',
        target_resource: 'USER',
        target_resource_id: userId,
        ip_address: request.headers.get('x-forwarded-for') || '127.0.0.1',
        details: `Resent invitation to user ${user.email}`,
      },
    });
    
    return NextResponse.json({
      message: 'Invitation resent successfully',
    });
  } catch (error) {
    console.error('Error resending invitation:', error);
    return NextResponse.json({ error: 'Failed to resend invitation' }, { status: 500 });
  }
}
