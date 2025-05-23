// This file is used to instantiate the Prisma client
import { PrismaClient } from "../generated/prisma";

// Add prisma to the global type
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more: https://pris.ly/d/help/next-js-best-practices
const prismaClient = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prismaClient;

// Export both default and named export for flexibility
export const prisma = prismaClient;
export default prismaClient;
