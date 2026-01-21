import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // This is a placeholder structure - you'll want to fetch actual blog data
  const blogPosts: Record<string, {
    title: string;
    date: string;
    author: string;
    content: string;
    image?: string;
  }> = {
    'test-post-cloudinary': {
      title: 'Test Post - Cloudinary Integration',
      date: 'January 21, 2026',
      author: 'Smile Preview AI Team',
      content: `
        <p class="mb-4">This is a test blog post demonstrating Cloudinary integration with our Smile Preview AI landing page.</p>
        
        <h2 class="text-2xl font-bold mt-6 mb-4">Why Cloudinary?</h2>
        <p class="mb-4">Cloudinary provides powerful image and video management capabilities that are perfect for our smile preview application.</p>
        
        <h2 class="text-2xl font-bold mt-6 mb-4">Key Features</h2>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Automatic image optimization</li>
          <li>Responsive image delivery</li>
          <li>Video transformation capabilities</li>
          <li>CDN integration for fast delivery</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-6 mb-4">Getting Started</h2>
        <p class="mb-4">Integrating Cloudinary into your workflow is straightforward and can significantly improve your media management.</p>
      `,
      image: '/images/before-after.png'
    }
  };

  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <article className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Blog Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 space-x-4">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {post.date}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.author}
              </span>
            </div>
          </header>

          {/* Blog Content */}
          <div 
            className="prose prose-lg max-w-none bg-white rounded-2xl p-8 shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Preview Your Dream Smile?</h3>
            <p className="mb-6">Experience the power of AI-driven smile transformation</p>
            <Link 
              to="/survey" 
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};
