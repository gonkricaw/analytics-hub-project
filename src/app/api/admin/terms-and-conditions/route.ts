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
 * GET /api/admin/terms-and-conditions
 * Get all terms and conditions (admin only)
 */
export async function GET(request: NextRequest) {
  // Check if user is admin
  if (!await isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  
  try {
    const termsAndConditions = await prisma.idnbi_TermsAndConditions.findMany({
      orderBy: [
        { published_at: 'desc' },
        { created_at: 'desc' },
      ],
    });
    
    return NextResponse.json(termsAndConditions);
  } catch (error) {
    console.error('Error fetching terms and conditions:', error);
    return NextResponse.json({ error: 'Failed to fetch terms and conditions' }, { status: 500 });
  }
}

/**
 * POST /api/admin/terms-and-conditions
 * Create new terms and conditions (admin only)
 */
export async function POST(request: NextRequest) {
  // Check if user is admin
  if (!await isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  
  try {
    const { version, content_html } = await request.json();
    
    // Validate required fields
    if (!version || !content_html) {
      return NextResponse.json(
        { error: 'Version and content are required' },
        { status: 400 }
      );
    }
    
    // Check if version already exists
    const existingVersion = await prisma.idnbi_TermsAndConditions.findFirst({
      where: { version },
    });
    
    if (existingVersion) {
      return NextResponse.json(
        { error: 'This version number already exists' },
        { status: 400 }
      );
    }
    
    // Create the terms and conditions
    const termsAndConditions = await prisma.idnbi_TermsAndConditions.create({
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
        action_type: 'CREATE_TERMS',
        target_resource: 'TERMS',
        target_resource_id: termsAndConditions.id,
        ip_address: request.headers.get('x-forwarded-for') || '127.0.0.1',
        details: `Created terms and conditions version ${version}`,
      },
    });
    
    return NextResponse.json({
      message: 'Terms and conditions created successfully',
      termsAndConditions,
    });
  } catch (error) {
    console.error('Error creating terms and conditions:', error);
    return NextResponse.json({ error: 'Failed to create terms and conditions' }, { status: 500 });
  }
}
