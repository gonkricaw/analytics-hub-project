import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import * as Sentry from "@sentry/nextjs";

/**
 * CSRF protection middleware for API routes
 * This middleware checks for a valid CSRF token on unsafe methods
 * like POST, PUT, DELETE, PATCH
 *
 * @param request The Next.js request
 * @returns NextResponse if CSRF check fails, otherwise null to continue
 */
export async function csrfProtection(
  request: NextRequest,
): Promise<NextResponse | null> {
  try {
    // Only check CSRF on unsafe methods
    const unsafeMethods = ["POST", "PUT", "DELETE", "PATCH"];
    if (!unsafeMethods.includes(request.method)) {
      return null; // Allow safe methods to pass through
    }

    // NextAuth JWT tokens have built-in CSRF protection
    // This middleware validates that the request has a valid NextAuth session
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // Check for Origin header
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");

    // If there's no origin header, it could be a non-browser request
    // In a production environment, you might want to be more strict
    if (!origin) {
      // For non-browser requests (e.g. API clients), rely on NextAuth token validation
      if (!token) {
        return NextResponse.json(
          { error: "CSRF protection: Missing authentication token" },
          { status: 403 },
        );
      }
      return null; // Allow if authenticated
    }

    // Check if Origin matches Host (same origin)
    const hostUrl = host ? `${request.nextUrl.protocol}//${host}` : null;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;

    const allowedOrigins = [hostUrl, appUrl, "http://localhost:3000"].filter(
      Boolean,
    ) as string[];

    // In development, be more lenient
    if (process.env.NODE_ENV === "development") {
      return null; // Skip CSRF check in development
    }

    // Check if origin is in our allowed list
    if (!allowedOrigins.includes(origin)) {
      Sentry.captureMessage(
        `CSRF protection: Invalid origin ${origin}`,
        "warning",
      );
      return NextResponse.json(
        { error: "CSRF protection: Invalid origin" },
        { status: 403 },
      );
    }

    // If we reach here, the request has passed CSRF checks
    return null;
  } catch (error) {
    console.error("CSRF protection error:", error);
    Sentry.captureException(error);

    // On error, block the request for safety
    return NextResponse.json(
      { error: "CSRF protection check failed" },
      { status: 403 },
    );
  }
}

/**
 * Helper function to wrap an API handler with CSRF protection
 *
 * @param handler The API route handler function
 * @returns A new handler function with CSRF protection
 */
export function withCsrfProtection(
  handler: (request: NextRequest, ...args: any[]) => Promise<NextResponse>,
) {
  return async function csrfProtectedHandler(
    request: NextRequest,
    ...args: any[]
  ) {
    const csrfResult = await csrfProtection(request);
    if (csrfResult) {
      return csrfResult; // Return CSRF error response
    }

    // Continue with the original handler
    return handler(request, ...args);
  };
}
