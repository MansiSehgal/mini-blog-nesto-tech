import { getBlogs } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse<Blog[]>> {
  const blogs = await getBlogs();
  return NextResponse.json(blogs);
}
 