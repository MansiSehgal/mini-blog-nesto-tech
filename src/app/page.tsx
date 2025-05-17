import Link from 'next/link';
import BlogsCards from './components/BlogsCards';
import { getBlogs } from './lib/db';

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="max-1-4xl mx-auto py-4, px-4 sm:px-6 lg:px-8 fleex justify-between  items-center">
          <h1 className="text-2xl font-bold  text-gray-900">Mini Blog</h1>
          <Link
            href="/new-post"
            className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            New Blog
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {blogs.map((blog) => (
              <BlogsCards key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
