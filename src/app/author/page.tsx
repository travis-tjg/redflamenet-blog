import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function AuthorPage() {
  // Filter posts by admin author and sort by date (newest first)
  const adminPosts = Object.entries(blogPosts)
    .filter(([, post]) => post.author === "admin")
    .map(([slug, post]) => ({ slug, title: post.title, date: post.date, category: post.category, content: post.content }))
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
            <Link href="/index" className="text-gray-700 hover:text-gray-900">Index</Link>
            <Link href="/privacy-policy" className="text-gray-700 hover:text-gray-900">Privacy Policy</Link>
          </nav>
        </header>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Posts by Admin</h1>
          <p className="text-lg text-gray-600">All posts authored by admin ({adminPosts.length} posts)</p>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="grid gap-6">
            {adminPosts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-4 last:border-b-0">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 text-xl font-semibold block mb-2"
                >
                  {post.title}
                </Link>
                <div className="text-sm text-gray-600 mb-2">
                  <span>By admin</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="inline-block bg-pink-500 text-white text-xs px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">
                  {post.content.substring(0, 150)}...
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}