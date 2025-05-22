import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { cacheableValue } from '@/lib/cache';
import * as Sentry from '@sentry/nextjs';

// Define notification interface
interface Notification {
  id: string;
  title: string;
  content: string;
  created_at: Date;
  is_read: boolean;
  notification: {
    id: string;
    type: string;
    priority: string;
  };
}

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
    const where: { user_id: string; is_read?: boolean } = { user_id: session.user.id };
    
    // Filter by read status if specified
    if (read === 'true') {
      where.is_read = true;
    } else if (read === 'false') {
      where.is_read = false;
    }

    // Cache key based on user and filters - shorter TTL for unread notifications
    const cacheKey = `notifications:user:${session.user.id}:read:${read}:page:${page}:limit:${limit}`;
    const cacheTTL = read === 'false' ? 60 : 300; // 1 minute for unread, 5 minutes for others
    
    interface NotificationResult {
      notifications: Notification[];
      totalCount: number;
    }
    
    const result = await cacheableValue<NotificationResult>(
      cacheKey,
      async () => {
        // Get total count for pagination
        const totalCount = await prisma.idnbi_UserNotificationStatus.count({
          where
        });
        
        // Get notifications with user status
        const notifications = await prisma.idnbi_UserNotificationStatus.findMany({
          where,
          include: {
            notification: true
          },
          orderBy: {
            created_at: 'desc'
          },
          skip,
          take: limit
        });
        
        return { notifications, totalCount };
      },
      { expireInSeconds: cacheTTL }
    );
    
    // Return notifications with pagination info
    return NextResponse.json({
      notifications: result.notifications,
      pagination: {
        page,
        limit,
        totalCount: result.totalCount,
        totalPages: Math.ceil(result.totalCount / limit)
      }
    });
  } catch (error) {
    console.error('Failed to fetch notifications:', error);
    Sentry.captureException(error);
    return NextResponse.json(
      { error: 'Failed to fetch notifications' },
      { status: 500 }
    );
  }
}
