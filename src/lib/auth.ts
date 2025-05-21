// This file contains the configuration for NextAuth
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import prisma from './prisma';

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
          // Note: In the actual implementation, you will use the idnbi_ prefix for tables
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
            include: {
              role: true,
            },
          });

          // If the user doesn't exist, throw an error
          if (!user) {
            throw new Error('Invalid email or password');
          }

          // Check if the password is correct
          const isPasswordCorrect = await compare(credentials.password, user.password_hash);

          if (!isPasswordCorrect) {
            throw new Error('Invalid email or password');
          }

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
  ],
  callbacks: {
    // Add user role to session token
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.roleId = user.roleId;
        token.userId = user.id;
      }
      return token;
    },
    // Add user role to session
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role;
        session.user.roleId = token.roleId;
        session.user.id = token.userId;
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
