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
 * PUT /api/admin/terms-and-conditions/[id]
 * Update terms and conditions (admin only)
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
    // Check if terms and conditions exist
    const existingTerms = await prisma.idnbi_TermsAndConditions.findUnique({
      where: { id },
    });
    
    if (!existingTerms) {
      return NextResponse.json(
        { error: 'Terms and conditions not found' },
        { status: 404 }
      );
    }
    
    // Check if they are already published
    if (existingTerms.published_at) {
      return NextResponse.json(
        { error: 'Published terms and conditions cannot be modified' },
        { status: 400 }
      );
    }
    
    const { version, content_html } = await request.json();
    
    // Validate required fields
    if (!version || !content_html) {
      return NextResponse.json(
        { error: 'Version and content are required' },
        { status: 400 }
      );
    }
    
    // Check if version already exists (excluding the current one)
    if (version !== existingTerms.version) {
      const versionExists = await prisma.idnbi_TermsAndConditions.findFirst({
        where: {
          version,
          id: { not: id },
        },
      });
      
      if (versionExists) {
        return NextResponse.json(
          { error: 'This version number already exists' },
          { status: 400 }
        );
      }
    }
    
    // Update the terms and conditions
    const updatedTerms = await prisma.idnbi_TermsAndConditions.update({
      where: { id },
      data: {
        version,
        content_html,
      },
    });
    
    // Create audit log
    const session = await getServerSession(authOptions);
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: session?.user.id,
        action_type: 'UPDATE_TERMS',
        target_resource: 'TERMS',
        target_resource_id: id,
        ip_address: request.headers.get('x-forwarded-for') || '127.0.0.1',
        details: `Updated terms and conditions version ${version}`,
      },
    });
    
    return NextResponse.json({
      message: 'Terms and conditions updated successfully',
      termsAndConditions: updatedTerms,
    });
  } catch (error) {
    console.error('Error updating terms and conditions:', error);
    return NextResponse.json({ error: 'Failed to update terms and conditions' }, { status: 500 });
  }
}
