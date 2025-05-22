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
 * GET /api/admin/ip-blocks
 * Get all blocked IPs (admin only)
 */
export async function GET(request: NextRequest) {
  // Check if user is admin
  if (!await isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  
  try {
    const ipBlocks = await prisma.idnbi_IPBlocklist.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
    
    return NextResponse.json(ipBlocks);
  } catch (error) {
    console.error('Error fetching IP blocks:', error);
    return NextResponse.json({ error: 'Failed to fetch IP blocks' }, { status: 500 });
  }
}

/**
 * POST /api/admin/ip-blocks
 * Block a new IP address (admin only)
 */
export async function POST(request: NextRequest) {
  // Check if user is admin
  if (!await isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  
  try {
    const { ipAddress, hours } = await request.json();
    
    // Validate required fields
    if (!ipAddress) {
      return NextResponse.json(
        { error: 'IP address is required' },
        { status: 400 }
      );
    }
    
    if (!hours || hours <= 0) {
      return NextResponse.json(
        { error: 'Block duration must be greater than 0' },
        { status: 400 }
      );
    }
    
    // Calculate block expiration date
    const blockedUntil = new Date();
    blockedUntil.setHours(blockedUntil.getHours() + hours);
    
    // Check if IP is already blocked
    const existingBlock = await prisma.idnbi_IPBlocklist.findUnique({
      where: { ip_address: ipAddress },
    });
    
    let block;
    
    if (existingBlock) {
      // Update existing block
      block = await prisma.idnbi_IPBlocklist.update({
        where: { ip_address: ipAddress },
        data: { blocked_until: blockedUntil },
      });
    } else {
      // Create new block
      block = await prisma.idnbi_IPBlocklist.create({
        data: {
          ip_address: ipAddress,
          blocked_until: blockedUntil,
        },
      });
    }
    
    // Create audit log
    const session = await getServerSession(authOptions);
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: session?.user.id,
        action_type: 'BLOCK_IP',
        target_resource: 'IP_BLOCKLIST',
        target_resource_id: ipAddress,
        ip_address: request.headers.get('x-forwarded-for') || '127.0.0.1',
        details: `IP ${ipAddress} blocked for ${hours} hours`,
      },
    });
    
    return NextResponse.json({
      message: 'IP address blocked successfully',
      block,
    });
  } catch (error) {
    console.error('Error blocking IP:', error);
    return NextResponse.json({ error: 'Failed to block IP address' }, { status: 500 });
  }
}
