import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for a protected route
  if (pathname.startsWith('/dashboard')) {
    // Get auth token from cookies
    const tokenCookie = request.cookies.get('auth_token');
    const token = tokenCookie?.value; // Extract the token string
    console.log(">>>>>>>>>>>>token11",tokenCookie);
    // If token is missing, redirect to login page
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  

    try {
      // Decode and verify token expiration (assuming JWT format)
      const tokenPayload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
      const isTokenExpired = tokenPayload.exp * 1000 < Date.now(); // Convert exp to milliseconds
console.log(">>>>>>>>>>>>>isTokenExpired",isTokenExpired);


      if (isTokenExpired) {
        return NextResponse.redirect(new URL('/login', request.url)); // Redirect if token expired
      }else{
        NextResponse.redirect(new URL('/dashboard', request.url))
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url)); // Redirect on error
    }

    // Token is valid, allow access
    return NextResponse.next();
  }

 

  // Proceed with the request for non-protected routes
  return NextResponse.next();
}
