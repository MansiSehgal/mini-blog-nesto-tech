import Link from 'next/link';
import React from 'react';
interface BlogsCardProps {
  blog: {
    id: string;
    title: string;
    content: string;
    author: string;
    date: string;
  };
}
const BlogsCards: React.FC<BlogsCardProps> = ({ blog }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex item-center">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              <Link href={`/posts/${blog.id}`} className="hover:text-blue-600 transition=colors">
                {blog.title}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Posted By{blog.author} on {blog.date}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600 line-clamp-2">{blog.content}</p>
        </div>
        <div className="mt-4">
          <Link
            href={`/posts/${blog.id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsCards;
