import { createBlog, getBlogs } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse<Blog[]>> {
  const blogs = await getBlogs();
  return NextResponse.json(blogs);
}
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const newBlog = await createBlog(data); // Make sure to await
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
