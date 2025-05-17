import { blogs } from '../constants/constants';

export async function getBlogs(): Promise<Blog[]> {
  return blogs;
}

export async function getBlogById(id: string): Promise<Blog | undefined> {
  return blogs.find((blog) => blog.id === id);
}
