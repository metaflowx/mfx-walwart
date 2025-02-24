import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/dashboard')) {
    const tokenCookie = request.cookies.get('auth_token');
    const token = tokenCookie?.value; 
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    try {
     
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const isTokenExpired = tokenPayload.exp * 1000 < Date.now(); 
      if (isTokenExpired) {
        return NextResponse.redirect(new URL('/login', request.url)); 
      }else{
        NextResponse.redirect(new URL('/dashboard', request.url))
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }
  return NextResponse.next();
}
