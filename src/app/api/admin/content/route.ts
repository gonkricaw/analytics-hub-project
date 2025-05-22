import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const contentSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  type: z.enum(['html', 'image', 'youtube', 'document', 'external_link_embed']),
  content_data: z.string().min(1, { message: "Content data is required" })
});

export async function GET(
  request: Request
) {
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
    const search = searchParams.get('search') || '';
    const type = searchParams.get('type') || undefined;

    // Calculate offset
    const skip = (page - 1) * limit;

    // Build where clause
    const where: any = {};
    
    if (search) {
      where.title = {
        contains: search,
        mode: 'insensitive'
      };
    }
    
    if (type) {
      where.type = type;
    }

    // Get total count for pagination
    const totalCount = await prisma.idnbi_Content.count({ where });

    // Get contents
    const contents = await prisma.idnbi_Content.findMany({
      where,
      orderBy: {
        created_at: 'desc'
      },
      skip,
      take: limit,
      select: {
        id: true,
        title: true,
        type: true,
        content_data: true,
        created_at: true,
        updated_at: true,
        created_by_user: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    return NextResponse.json({
      contents,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit)
      }
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching contents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch content items' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Check if user has permission to create content
    // This is a simplified check. In a real app, you would check specific permissions
    if (session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Permission denied' },
        { status: 403 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
      try {
      const validatedData = contentSchema.parse(body);
      
      // Create the content
      // For external_link_embed content, we'll use UUIDv4 for special access management
      const content = await prisma.idnbi_Content.create({
        data: {
          title: validatedData.title,
          type: validatedData.type,
          content_data: validatedData.content_data,
          created_by_user_id: session.user.id
        }
      });

      // Log the action in AuditLog
      await prisma.idnbi_AuditLog.create({
        data: {
          user_id: session.user.id,
          action: 'CREATE',
          resource_type: 'CONTENT',
          resource_id: content.id,
          details: JSON.stringify({
            title: content.title,
            type: content.type
          })
        }
      });

      return NextResponse.json(content, { status: 201 });
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        return NextResponse.json(
          { error: 'Validation error', details: validationError.errors },
          { status: 400 }
        );
      }
      throw validationError;
    }
  } catch (error) {
    console.error('Error creating content:', error);
    return NextResponse.json(
      { error: 'Failed to create content' },
      { status: 500 }
    );
  }
}
