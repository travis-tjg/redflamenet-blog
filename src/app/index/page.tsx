import Link from "next/link";

export default function IndexPage() {
  const blogPosts = [
    { title: "301 Redirects", slug: "301-redirects" },
    { title: "Peanut Allergies", slug: "peanut-allergies" },
    { title: "How To Photograph Bears", slug: "how-to-photograph-bears" },
    { title: "Why I Love Yorkies", slug: "why-i-love-yorkies" },
    { title: "Drought Resistant Annuals", slug: "drought-resistant-annuals" },
    { title: "Types Of Garlic", slug: "types-of-garlic" },
    { title: "Choosing The Right Hot Water Tank", slug: "choosing-the-right-hot-water-tank" },
    { title: "Google My Business For Local Businesses", slug: "google-my-business-for-local-businesses" },
    { title: "Cauliflower Steaks", slug: "cauliflower-steaks" },
    { title: "Carving Wood Spirits", slug: "carving-wood-spirits" },
    { title: "Sample Post", slug: "sample-post" },
  ];

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

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Index</h1>
          <p className="text-lg text-gray-600">Here&rsquo;s our most recent stuff . . .</p>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="grid gap-4">
            {blogPosts.map((post) => (
              <div key={post.slug}>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 underline text-lg"
                >
                  {post.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}