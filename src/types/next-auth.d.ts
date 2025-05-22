import { DefaultSession } from "next-auth";

// Extend the built-in session types
declare module "next-auth" {
  interface User {
    role?: string;
    roleId?: string;
    requirePasswordChange?: boolean;
  }

  interface Session {
    user: {
      id: string;
      role: string;
      roleId: string;
      requirePasswordChange?: boolean;
    } & DefaultSession["user"];
  }
}

// Extend the JWT type
declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    roleId?: string;
    userId?: string;
    requirePasswordChange?: boolean;
  }
}
