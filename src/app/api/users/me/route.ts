import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/auth';
import prisma from '@/lib/prisma';

// Extend the Session type to include userId
interface ExtendedSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    id?: string;
  };
}

/**
 * GET /api/users/me
 * Returns the current user's profile information
 */
export async function GET() {
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

    // Fetch the user from the database
    const user = await prisma.idnbi_User.findUnique({
      where: {
        id: session.user.id,
      },
      include: {
        role: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });

    // If the user doesn't exist, return 404 Not Found
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Return the user data without sensitive information
    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      profile_photo_url: user.profile_photo_url,
      role: user.role,
      terms_accepted_at: user.terms_accepted_at,
      registered_at: user.registered_at,
      last_login_at: user.last_login_at,
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
