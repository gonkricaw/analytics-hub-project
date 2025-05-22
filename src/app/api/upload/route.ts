import { getServerSession } from 'next-auth';
import { NextResponse, NextRequest } from 'next/server';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { mkdir } from 'fs/promises';
import { withCsrfProtection } from '@/lib/csrf';
import * as Sentry from '@sentry/nextjs';

// Allowed file types
const allowedFileTypes: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/webp': 'webp',
  'application/pdf': 'pdf',
  'application/msword': 'doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
  'application/vnd.ms-excel': 'xls',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
  'text/plain': 'txt',
};

// Define the handler function separately to apply CSRF protection
async function handlePost(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Check if user has permission to upload files
    // This is a simplified check. In a real app, you would check specific permissions
    if (session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Permission denied' },
        { status: 403 }
      );
    }

    // Parse the FormData
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Check file type
    if (!allowedFileTypes[file.type]) {
      return NextResponse.json(
        { error: 'File type not allowed' },
        { status: 400 }
      );
    }

    // Get file extension
    const extension = allowedFileTypes[file.type];

    // Generate unique filename
    const uniqueFilename = `${uuidv4()}.${extension}`;
    
    // Create directory structure if it doesn't exist
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (err) {
      console.error('Error creating directory:', err);
    }

    // Create path to save the file
    const filePath = join(uploadDir, uniqueFilename);
    
    // Convert the file to an ArrayBuffer and then to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Write the file to the filesystem
    await writeFile(filePath, buffer);
    
    // Create the public URL
    const fileUrl = `/uploads/${uniqueFilename}`;
    
    // Log the upload in AuditLog
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: session.user.id,
        action_type: 'FILE_UPLOAD',
        target_resource: 'FILE',
        target_resource_id: uniqueFilename,
        ip_address: request.headers.get('x-forwarded-for') || 'unknown',
        details: JSON.stringify({
          filename: file.name,
          size: file.size,
          type: file.type
        })
      }
    });

    return NextResponse.json({ 
      success: true, 
      url: fileUrl,
      filename: file.name,
      size: file.size,
      type: file.type
    }, { status: 201 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}

// Apply CSRF protection and export the POST handler
export const POST = withCsrfProtection(handlePost);
