// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Log the request method and URL
  console.log(`🟢 ${request.method} ${request.nextUrl.pathname}`);

  return NextResponse.next();
}
