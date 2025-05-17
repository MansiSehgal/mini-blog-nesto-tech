import BlogsCards from './components/BlogsCards';
import { getBlogs } from './lib/db';
import QuoteComponent from './components/QuoteComponent';

async function getQuotes(): Promise<Quote[]> {
  const res = await fetch('https://dummyjson.com/quotes');
  const data = await res.json();
  return data.quotes;
}

export default async function Home() {
  const blogs = await getBlogs();
  const quotes = await getQuotes();

  return (
    <div className="mt-18">
      <div className=" bg-gray-100 py-8">
        <h1 className="text-3xl text-center font-bold mb-8">Random Quotes</h1>
        <QuoteComponent quotes={quotes} />
      </div>

      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            <h1 className="text-2xl font-bold  text-gray-900">Mini Blog Posts</h1>

            {blogs.map((blog: Blog) => (
              <BlogsCards key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
