import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/auth';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// Interface for the extended session
interface ExtendedSession {
  user?: {
    id?: string;
    name?: string | null;
    email?: string | null;
  };
}

/**
 * PUT /api/users/me/profile
 * Update the current user's profile information
 */
export async function PUT(request: Request) {
  try {
    // Get the current session
    const session = await getServerSession(authOptions) as ExtendedSession;

    // If there's no session or user, return 401 Unauthorized
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    // Check if it's a form data request
    const contentType = request.headers.get('content-type');
    
    let name = '';
    let profilePhoto: File | null = null;
    
    if (contentType?.includes('multipart/form-data')) {
      // Handle form data (with file upload)
      const formData = await request.formData();
      name = formData.get('name') as string;
      profilePhoto = formData.get('profile_photo') as File | null;
    } else {
      // Handle JSON data (without file upload)
      const data = await request.json();
      name = data.name;
    }
    
    // Validate name
    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    // Prepare update data
    const updateData: any = { name };

    // Handle profile photo upload if provided
    if (profilePhoto) {
      // In a real implementation, you would upload the file to storage
      // For now, we'll just log it and pretend we saved it
      console.log(`Would upload photo: ${profilePhoto.name}, size: ${profilePhoto.size} bytes`);
      
      // Simulate a URL for the uploaded file
      const photoUrl = `/uploads/profile/${userId}/${Date.now()}-${profilePhoto.name}`;
      updateData.profile_photo_url = photoUrl;
    }

    // Update the user in the database
    await prisma.idnbi_User.update({
      where: { id: userId },
      data: updateData
    });

    // Record the action in the audit log
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: userId,
        action_type: 'PROFILE_UPDATE',
        target_resource: 'USER',
        target_resource_id: userId,
        ip_address: request.headers.get('x-forwarded-for') || '127.0.0.1',
        details: 'User updated their profile'
      }
    });

    // Revalidate the profile path
    revalidatePath('/profile');

    return NextResponse.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
