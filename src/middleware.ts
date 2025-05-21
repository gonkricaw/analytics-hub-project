import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Define public paths that don't require authentication
  const isPublicPath = path === '/login' || path === '/forgot-password' || path === '/reset-password';
  
  // Get the token from the session
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // If the user is authenticated and trying to access a public path, 
  // redirect them to the home page
  if (token && isPublicPath) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // If the user is not authenticated and trying to access a protected path, 
  // redirect them to the login page
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Check if the user is trying to access an admin route but doesn't have admin role
  if (path.startsWith('/admin') && token?.role !== 'Admin') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Specify which paths this middleware will run on
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
