import { getBlogById } from '@/app/lib/db';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = await getBlogById(params?.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }
  return {
    title: blog.title,
    description: blog.content.substring(0, 160),
  };
}
export default async function BlogDetail({ params }: PageProps) {
  const blog = await getBlogById(params?.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-12 sm:py-12 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{blog.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span>By {blog.author}</span>
              <span className="mx-2">•</span>
              <span>{blog.date}</span>
            </div>
            <div className="prose max-w-none text-gray-700">
              <p className="whitespace-pre-line">{blog.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
