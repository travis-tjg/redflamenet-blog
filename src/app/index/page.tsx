import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function IndexPage() {
  // Convert blogPosts object to array and sort by date (newest first)
  const blogPostsArray = Object.entries(blogPosts)
    .map(([slug, post]) => ({ slug, title: post.title, date: post.date }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto mb-8">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">BingBangBoom</h1>
            <span className="ml-4 text-sm text-gray-600">Enjoy looking around</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Welcome</Link>
            <Link href="/index" className="text-pink-600 hover:text-pink-700 font-medium">Index</Link>
            <Link href="/privacy-policy" className="text-gray-700 hover:text-gray-900">Privacy Policy</Link>
          </nav>
        </header>

        {/* Header Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-6xl font-black text-gray-900 mb-6">Index</h1>
            <p className="text-lg text-gray-600">Here&rsquo;s our most recent stuff . . .</p>
          </div>
        </section>

        {/* Content Section - Blue Background */}
        <section className="bg-blue-400 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg mb-6">Here&rsquo;s our most recent stuff . . .</p>
            <div className="space-y-1">
              {blogPostsArray.map((post) => (
                <div key={post.slug}>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-white hover:text-gray-200 underline block"
                  >
                    {post.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}