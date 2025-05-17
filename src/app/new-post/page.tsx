'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BasicInput from '../components/BasicInput';

export default function NewBlog() {
  const router = useRouter();
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    content: '',
    author: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.refresh();
        router.push('/');
      }
      return response;
    } catch (error) {
      console.error('Error creating blog', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mt-15 mx-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Create New Blog Post</h2>
          <form onSubmit={handleSubmit}>
            <BasicInput
              type="text"
              id="title"
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required={true}
            />
            <BasicInput
              type="text"
              id="author"
              label="Author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required={true}
            />
            <BasicInput
              type="text"
              id="content"
              label="Content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required={true}
            />

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Publishing...' : 'Publish Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
