import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/app/data', 'blogs.json');

export interface Blog {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
}
async function readBlogs(): Promise<Blog[]> {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    const initialBlogs = [
      {
        id: '1',
        title: 'The Rise of JavaScript Frameworks in Modern Web Development',
        author: 'Jane Doe',
        date: '2025-05-10',
        content: `
JavaScript has evolved dramatically over the last decade, becoming the backbone of modern web development. With the introduction of powerful frameworks and libraries such as React, Vue, and Angular, developers are now able to build highly interactive, performant, and scalable web applications with ease.

React, created by Facebook, revolutionized frontend development by introducing a component-based architecture and the concept of a virtual DOM. This approach allows efficient updates and rendering, which improves user experience and performance. Developers appreciate React’s flexibility, vast ecosystem, and the ability to seamlessly integrate with other libraries or backend technologies.

Vue.js, another popular framework, is known for its simplicity and gentle learning curve. It provides reactive data binding and composable components, making it an excellent choice for both beginners and seasoned developers. Vue’s progressive nature means you can adopt it incrementally, from adding it to an existing project to building a full-scale Single Page Application (SPA).

Angular, backed by Google, is a complete framework that offers a comprehensive solution for building enterprise-grade applications. With built-in support for TypeScript, dependency injection, and a robust CLI, Angular facilitates the development of large, maintainable projects.

The rise of these JavaScript frameworks aligns with the increased demand for dynamic user interfaces and single-page applications that provide seamless user experiences without frequent page reloads. As the web continues to evolve, frameworks will keep adapting, focusing on performance optimizations, developer ergonomics, and better tooling.

Developers should stay informed about the strengths and trade-offs of each framework to choose the right tool for their projects. Whether it’s React’s ecosystem, Vue’s simplicity, or Angular’s all-in-one approach, JavaScript frameworks have reshaped the landscape of frontend development and will continue to do so in the coming years.
    `,
      },
      {
        id: '2',
        title: 'Cloud Computing: Transforming the Way Businesses Operate',
        author: 'John Smith',
        date: '2025-04-28',
        content: `
Cloud computing has fundamentally transformed how businesses operate, enabling scalability, flexibility, and cost efficiency in unprecedented ways. By leveraging cloud services such as Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), companies can accelerate innovation and reduce the overhead of managing physical infrastructure.

One of the primary benefits of cloud computing is scalability. Organizations can quickly scale resources up or down based on demand without the need for upfront capital expenditure. This elasticity allows businesses to handle traffic spikes during peak periods and conserve resources during slow times, optimizing costs.

Cloud providers like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform have developed a vast array of services that go beyond simple storage and computing power. These include machine learning tools, analytics platforms, serverless computing, and database management solutions, empowering companies to build sophisticated applications quickly.

Security and compliance remain top priorities as enterprises move to the cloud. Cloud providers invest heavily in securing their infrastructure, but businesses must implement strong governance policies to ensure data protection and regulatory compliance. This shared responsibility model requires collaboration between the provider and customer.

The rise of hybrid and multi-cloud strategies enables organizations to use the best features of different cloud platforms while maintaining control over critical data. This flexibility is crucial for industries with strict regulatory requirements or specific performance needs.

Overall, cloud computing continues to drive digital transformation, enabling businesses of all sizes to innovate faster, reduce costs, and compete in the global marketplace. As technologies evolve, the cloud will remain at the forefront of IT strategy.
    `,
      },
      {
        id: '3',
        title: 'Artificial Intelligence and Machine Learning in Everyday Applications',
        author: 'Emily Zhang',
        date: '2025-05-05',
        content: `
Artificial Intelligence (AI) and Machine Learning (ML) have moved from niche research fields to integral components of many everyday applications. From virtual assistants to recommendation engines, AI is transforming how users interact with technology on a daily basis.

One of the most visible uses of AI is in natural language processing (NLP), which enables machines to understand, interpret, and generate human language. Virtual assistants like Siri, Alexa, and Google Assistant leverage NLP to respond to user queries, set reminders, and control smart home devices, making technology more accessible and user-friendly.

Machine learning algorithms analyze vast datasets to identify patterns and make predictions. E-commerce platforms use ML to offer personalized product recommendations based on browsing and purchase history, significantly enhancing the shopping experience and increasing conversion rates.

AI also plays a crucial role in image and speech recognition. Applications such as facial recognition for security, automated captioning for videos, and real-time language translation rely heavily on these technologies. Healthcare has benefited enormously from AI-powered diagnostic tools that can detect diseases from medical imaging with high accuracy, aiding physicians in making faster and more accurate decisions.

Despite its many benefits, AI presents challenges such as bias in algorithms, data privacy concerns, and the need for transparency in decision-making processes. Developers and policymakers must work together to ensure AI systems are ethical, fair, and accountable.

Looking ahead, AI and ML will continue to evolve, with advancements in explainable AI, reinforcement learning, and edge computing expanding their capabilities. These technologies are poised to redefine industries and improve quality of life in profound ways.
    `,
      },
    ];
    await fs.writeFile(filePath, JSON.stringify(initialBlogs, null, 2));
    return initialBlogs;
  }
}

export async function getBlogs(): Promise<Blog[]> {
  return readBlogs();
}

export async function getBlogById(id: string): Promise<Blog | undefined> {
  const blogs = await readBlogs();
  return blogs.find((blog) => blog.id === id);
}

export async function createBlog(blog: Omit<Blog, 'id' | 'date'>): Promise<Blog> {
  const blogs = await readBlogs();
  const newBlog: Blog = {
    id: Date.now().toString(),
    date: new Date().toISOString().split('T')[0],
    ...blog,
  };

  blogs.unshift(newBlog);
  await fs.writeFile(filePath, JSON.stringify(blogs, null, 2));
  return newBlog;
}
