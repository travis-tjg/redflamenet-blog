import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, BlogPost } from "@/data/blogPosts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  // Get all blog post slugs in chronological order (newest first)
  const allSlugs = Object.keys(blogPosts).sort((a, b) => {
    const dateA = new Date(blogPosts[a].date);
    const dateB = new Date(blogPosts[b].date);
    return dateB.getTime() - dateA.getTime();
  });

  const currentIndex = allSlugs.indexOf(slug);
  const previousPost = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextPost = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-900">BingBangBoom</h1>
          <span className="ml-4 text-sm text-gray-600">Enjoy looking around</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Welcome</Link>
          <Link href="/index" className="text-gray-700 hover:text-gray-900">Index</Link>
          <Link href="/privacy-policy" className="text-gray-700 hover:text-gray-900">Privacy Policy</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </div>
            <span className="text-xs text-gray-600 block mt-1">Menu</span>
          </button>
          <button className="p-2">
            <div className="w-6 h-6 border-2 border-gray-600 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-600 block mt-1">Search</span>
          </button>
        </div>
      </header>

      <main>
        {/* Article Header */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-4">
              <span className="inline-block bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded">
                {post.category}
              </span>
            </div>
            <h1 className="text-5xl font-black text-gray-900 mb-6">{post.title}</h1>
            <p className="text-lg text-gray-600 mb-4">A 301 is a permanent redirect of one URL to another.</p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span>By {post.author}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </section>

        {/* Article Content - Blue Background */}
        <section className="bg-blue-400 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="text-lg leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-blue-400 text-white py-8 border-t border-blue-300">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex justify-between items-center">
              {previousPost ? (
                <Link href={`/blog/${previousPost}`} className="flex items-center space-x-2 hover:underline">
                  <span>←</span>
                  <span>{blogPosts[previousPost].title}</span>
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextPost ? (
                <Link href={`/blog/${nextPost}`} className="flex items-center space-x-2 hover:underline">
                  <span>{blogPosts[nextPost].title}</span>
                  <span>→</span>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex justify-center space-x-4">
              {/* Yelp */}
              <a href="#" className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Twitter */}
              <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.346-1.049-2.346-2.346s1.049-2.346 2.346-2.346 2.346 1.049 2.346 2.346-1.049 2.346-2.346 2.346zm7.098 0c-1.297 0-2.346-1.049-2.346-2.346s1.049-2.346 2.346-2.346 2.346 1.049 2.346 2.346-1.049 2.346-2.346 2.346z"/>
                </svg>
              </a>
              
              {/* Email */}
              <a href="#" className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Read These Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Read These</h2>
            <div className="space-y-4">
              <Link href="/blog/what-is-css" className="block text-pink-600 hover:text-pink-700 text-lg">
                What Is CSS?
              </Link>
              <Link href="/blog/301-redirects" className="block text-pink-600 hover:text-pink-700 text-lg">
                301 Redirects
              </Link>
              <Link href="/blog/the-joy-of-learning-something-new" className="block text-pink-600 hover:text-pink-700 text-lg">
                The Joy of Learning Something New
              </Link>
              <Link href="/blog/test" className="block text-pink-600 hover:text-pink-700 text-lg">
                Test
              </Link>
              <Link href="/blog/unlocking-the-secrets-of-becoming-a-ghostwriter" className="block text-pink-600 hover:text-pink-700 text-lg">
                Unlocking the Secrets of Becoming a Ghostwriter: Mastering the Art of the Invisible Pen
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-100 text-center text-sm text-gray-600">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex justify-center space-x-4">
              <span>© 2025 BingBangBoom</span>
              <Link href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
              <span>Powered by WordPress</span>
              <Link href="#" className="hover:text-gray-900">To the top ↑</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}