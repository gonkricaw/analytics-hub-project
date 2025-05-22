// This file contains the configuration for NextAuth
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import prisma from './prisma';
import * as Sentry from '@sentry/nextjs';
import { sendSystemWarningEmail } from './email';
import { getRateLimiter } from './rate-limit';

// Rate limiter for login attempts - 5 attempts per minute
const loginRateLimiter = getRateLimiter('auth:login', 5, 60);

/**
 * Record a failed login attempt, update user's failed login attempts count,
 * and potentially block IP addresses after too many failures
 */
async function recordFailedLoginAttempt(email: string, ip: string = '127.0.0.1') {
  try {
    // Find the user to increment their failed login attempts
    const user = await prisma.idnbi_User.findUnique({ 
      where: { email } 
    });
    
    if (user) {
      // Update user's failed login attempts
      await prisma.idnbi_User.update({
        where: { id: user.id },
        data: {
          failed_login_attempts: { increment: 1 },
          is_ip_blocked: user.failed_login_attempts + 1 >= 15 // Block after 15 attempts
        }
      });
    }

    // We need to handle the upsert differently since we have a compound unique key
    const existingLog = await prisma.idnbi_FailedLoginAttemptLog.findFirst({
      where: {
        ip_address: ip,
        email: email
      }
    });

    if (existingLog) {
      // Update existing log
      await prisma.idnbi_FailedLoginAttemptLog.update({
        where: { id: existingLog.id },
        data: {
          count: { increment: 1 },
          timestamp: new Date()
        }
      });
    } else {
      // Create new log
      await prisma.idnbi_FailedLoginAttemptLog.create({
        data: {
          ip_address: ip,
          email: email,
          count: 1
        }
      });
    }

    // Check if we should block this IP
    const failedAttempts = await prisma.idnbi_FailedLoginAttemptLog.findMany({
      where: {
        ip_address: ip,
        timestamp: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
        }
      }
    });    // Type-safe calculation of total attempts
    let totalAttempts = 0;
    failedAttempts.forEach((attempt: { count: number }) => {
      totalAttempts += attempt.count;
    });

    if (totalAttempts >= 15) {
      // Block IP for 24 hours
      const existingBlock = await prisma.idnbi_IPBlocklist.findUnique({
        where: { ip_address: ip }
      });

      if (existingBlock) {
        await prisma.idnbi_IPBlocklist.update({
          where: { ip_address: ip },
          data: { 
            blocked_until: new Date(Date.now() + 24 * 60 * 60 * 1000) 
          }
        });
      } else {
        await prisma.idnbi_IPBlocklist.create({
          data: {
            ip_address: ip,
            blocked_until: new Date(Date.now() + 24 * 60 * 60 * 1000)
          }
        });
      }
    }
  } catch (error) {
    console.error('Error recording failed login attempt:', error);
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required');
        }

        try {
          // Find the user by email
          const user = await prisma.idnbi_User.findUnique({
            where: { email: credentials.email },
            include: {
              role: true,
            },
          });          // If the user doesn't exist, throw an error
          if (!user) {
            throw new Error('Invalid email or password');
          }

          // Check if the password is correct
          const isPasswordCorrect = await compare(credentials.password, user.password_hash);

          if (!isPasswordCorrect) {
            // Log failed login attempt
            await recordFailedLoginAttempt(credentials.email);
            throw new Error('Invalid email or password');
          }
          
          // Check if this is a temporary password that needs to be changed
          if (user.temp_password_flag) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role.name,
              roleId: user.role_id,
              image: user.profile_photo_url,
              requirePasswordChange: true,
            };
          }

          // Check if the user has accepted the terms and conditions
          if (!user.terms_accepted_at) {
            throw new Error('Please accept the terms and conditions');
          }

          // Update last login information
          await prisma.idnbi_User.update({
            where: { id: user.id },
            data: {
              last_login_at: new Date(),
              last_login_ip: "127.0.0.1", // In a real implementation, get the actual IP
              failed_login_attempts: 0 // Reset failed attempts on successful login
            }
          });

          // Add audit log entry for successful login
          await prisma.idnbi_AuditLog.create({
            data: {
              user_id: user.id,
              action_type: 'LOGIN',
              target_resource: 'AUTH',
              target_resource_id: null,
              ip_address: "127.0.0.1", // In a real implementation, get the actual IP
              details: 'User logged in successfully'
            }
          });

          // Return the user object
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role.name,
            roleId: user.role_id,
            image: user.profile_photo_url,
          };
        } catch (error) {
          console.error('Error during authorization:', error);
          throw new Error('Authentication failed');
        }
      }
    })
  ],  callbacks: {
    // Add user role to session token
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.roleId = user.roleId;
        token.userId = user.id;
        token.requirePasswordChange = user.requirePasswordChange;
      }
      return token;
    },
    // Add user role to session
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role as string;
        session.user.roleId = token.roleId as string;
        session.user.id = token.userId as string;
        session.user.requirePasswordChange = token.requirePasswordChange as boolean;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  debug: process.env.NODE_ENV === 'development',
};

export default authOptions;
