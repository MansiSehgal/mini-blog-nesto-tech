import { createBlog, getBlogs } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse<Blog[]>> {
  const blogs = await getBlogs();
  return NextResponse.json(blogs);
}

export async function POST(request: Request): Promise<NextResponse<Blog>> {
  const blog: Omit<Blog, 'id' | 'date'> = await request.json();
  const newBlog = await createBlog(blog);
  return NextResponse.json(newBlog, { status: 201 });
}
