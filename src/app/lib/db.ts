import { blogs } from '../constants/constants';

export async function getBlogs(): Promise<Blog[]> {
  return blogs;
}

export async function getBlogById(id: string): Promise<Blog | undefined> {
  return blogs.find((blog) => blog.id === id);
}

export async function createBlog(blog: Omit<Blog, 'id' | 'date'>): Promise<Blog> {
  const newBlog: Blog = {
    id: Date.now().toString(),
    date: new Date().toString().split('T')[0],
    ...blog,
  };
  blogs.unshift(newBlog);
  return newBlog;
}
