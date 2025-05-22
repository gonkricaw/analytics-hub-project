import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { hash } from 'bcryptjs';
import prisma from '@/lib/prisma';

/**
 * POST /api/auth/forgot-password
 * Request a password reset link for a given email address
 */
export async function POST(request: Request) {
  try {
    // Parse the request body
    const { email } = await request.json();

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if the user exists
    const user = await prisma.idnbi_User.findUnique({
      where: { email },
    });

    // For security reasons, don't reveal if the user exists or not
    // We'll return a success response even if the user doesn't exist
    if (!user) {
      console.log(`Password reset requested for non-existent email: ${email}`);
      return NextResponse.json({ 
        message: 'If your email is registered, you will receive a password reset link shortly.'
      });
    }

    // Generate a random token
    const token = randomUUID();
    // Hash the token before storing it (for security)
    const tokenHash = await hash(token, 10);
    
    // Store the token in the database
    // Delete any existing tokens for this user first
    await prisma.idnbi_PasswordResetToken.deleteMany({
      where: { user_id: user.id },
    });

    // Create a new token with expiration time (1 hour from now)
    await prisma.idnbi_PasswordResetToken.create({
      data: {
        token_hash: tokenHash,
        user_id: user.id,
        expires_at: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
      },
    });

    // Record the action in the audit log
    await prisma.idnbi_AuditLog.create({
      data: {
        user_id: user.id,
        action_type: 'PASSWORD_RESET_REQUESTED',
        target_resource: 'AUTH',
        target_resource_id: null,
        ip_address: request.headers.get('x-forwarded-for') || '127.0.0.1',
        details: 'Password reset link requested'
      },
    });

    // In a real implementation, send an email with the reset link
    // For now, we'll log it to the console
    console.log(`Password reset link for ${email}: /reset-password?token=${token}`);

    // TODO: Send email with token using email service

    // Return success response
    return NextResponse.json({ 
      message: 'If your email is registered, you will receive a password reset link shortly.'
    });
  } catch (error) {
    console.error('Error processing forgot password request:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
