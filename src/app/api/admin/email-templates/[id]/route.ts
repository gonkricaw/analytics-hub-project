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
 * PUT /api/admin/email-templates/[id]
 * Update an email template (admin only)
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Check if user is admin
  if (!await isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  
  const { id } = params;
  
  try {
    // Check if the template exists
    const existingTemplate = await prisma.idnbi_EmailTemplate.findUnique({
      where: { id },
    });
    
    if (!existingTemplate) {
      return NextResponse.json({ error: 'Email template not found' }, { status: 404 });
    }
    
    const { subject, body_html } = await request.json();
    
    // Validate required fields
    if (!subject || !body_html) {
      return NextResponse.json(
        { error: 'Subject and body content are required' },
        { status: 400 }
      );
    }
    
    // Update the template
    const updatedTemplate = await prisma.idnbi_EmailTemplate.update({
      where: { id },
      data: {
        subject,
        body_html,
        is_custom: true, // Mark as custom since it's been edited
      },
    });
    
    // Create audit log
    const session = await getServerSession(authOptions);
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: session?.user.id,
        action_type: 'UPDATE_EMAIL_TEMPLATE',
        target_resource: 'EMAIL_TEMPLATE',
        target_resource_id: id,
        ip_address: request.headers.get('x-forwarded-for') || '127.0.0.1',
        details: `Updated email template: ${existingTemplate.template_type}`,
      },
    });
    
    return NextResponse.json({
      message: 'Email template updated successfully',
      template: updatedTemplate,
    });
  } catch (error) {
    console.error('Error updating email template:', error);
    return NextResponse.json({ error: 'Failed to update email template' }, { status: 500 });
  }
}
