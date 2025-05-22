import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const read = searchParams.get('read');
    
    // Calculate offset for pagination
    const skip = (page - 1) * limit;
    
    // Build where clause
    const where: any = { user_id: session.user.id };
    
    // Filter by read status if specified
    if (read === 'true') {
      where.is_read = true;
    } else if (read === 'false') {
      where.is_read = false;
    }

    // Get total count for pagination
    const totalCount = await prisma.idnbi_UserNotificationStatus.count({
      where
    });

    // Get user notifications with pagination
    const userNotifications = await prisma.idnbi_UserNotificationStatus.findMany({
      where,
      orderBy: {
        created_at: 'desc'
      },
      skip,
      take: limit,
      include: {
        notification: true
      }
    });

    return NextResponse.json({
      notifications: userNotifications,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit)
      }
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notifications' },
      { status: 500 }
    );
  }
}
