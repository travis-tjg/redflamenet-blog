import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPost {
  title: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

const blogPosts: Record<string, BlogPost> = {
  "sample-post": {
    title: "Sample Post",
    content: "This is the sample post. Create only 400-500 words of content (even AI generated) and link to your honeypot pages.",
    date: "May 10, 2023",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "301-redirects": {
    title: "301 Redirects",
    content: "A 301 redirect is a type of HTTP status code that indicates a permanent redirect. It's a server-side instruction that tells web browsers and search engines that the requested URL has permanently moved to a new location.\n\nThere are many reasons why a website owner might need to use a 301 redirect. Some common scenarios include:\n\n• Changing the URL structure of a website: If a website owner decides to change the URL structure of their site, they can use 301 redirects to ensure that any existing links to the old URLs are redirected to the new URLs. This helps to maintain the website's search engine rankings and prevent users from encountering broken links.\n\n• Moving website to a new domain: When a website is moved to a new domain, all of the URLs on the site will change. To avoid losing traffic and search engine rankings, the website owner can set up 301 redirects to redirect any traffic and links from the old domain to the corresponding pages on the new domain.\n\n• Consolidating multiple pages into one: If a website has duplicate content or pages that cover similar topics, the website owner may decide to consolidate those pages into a single page. In this case, they can set up 301 redirects from the old pages to the new, consolidated page.\n\nSetting up a 301 redirect is relatively straightforward. The website owner or their web developer needs to add a piece of code to the server's configuration file or .htaccess file, specifying the old URL and the new URL. When a user or search engine crawler visits the old URL, they will automatically be redirected to the new one.\n\nOn the other hand, a 302 redirect is a type of HTTP status code that indicates a temporary redirect. It tells web browsers and search engines that the requested URL has temporarily moved to a new location, and that the original URL will be back at some point in the future. A 302 redirect does not pass on the link equity and search engine rankings from the old URL to the new URL, so it's important to use a 301 redirect only when the URL has permanently moved.\n\nSome common scenarios where a website owner might use a 302 redirect include:\n\n• A website is under construction: If a website is under construction and the website owner wants to temporarily redirect users to a \"coming soon\" page, they can use a 302 redirect.\n\n• A website is undergoing maintenance: If a website is undergoing maintenance and the website owner wants to temporarily redirect users to a maintenance page, they can use a 302 redirect.\n\n• Testing a new page: If a website owner wants to test a new page without replacing the old page, they can use a 302 redirect to temporarily redirect users to the new page.\n\nIt's important to use the correct type of redirect to avoid negatively impacting search engine rankings and user experience. Using a 302 redirect when a URL has only temporarily moved can result in lost link equity and search engine rankings. Using a 301 redirect when a URL has permanently moved can result in confusing users and search engines.",
    date: "February 19, 2024",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "peanut-allergies": {
    title: "Peanut Allergies",
    content: "Peanut allergies are among the most serious and common food allergies, affecting both children and adults. Unlike some childhood allergies that may be outgrown, peanut allergies tend to persist throughout life. The symptoms can range from mild reactions like hives or digestive issues to severe anaphylaxis, which can be life-threatening. For families dealing with peanut allergies, constant vigilance is required when reading food labels, dining out, or even being in environments where peanuts might be present. Many schools have implemented peanut-free policies to protect allergic students. Treatment primarily involves strict avoidance of peanuts and peanut-containing products, carrying emergency epinephrine, and being prepared to recognize and respond to allergic reactions quickly.",
    date: "February 19, 2023",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "how-to-photograph-bears": {
    title: "How To Photograph Bears",
    content: "Wildlife photography, particularly photographing bears, requires a combination of technical skill, patience, and most importantly, safety knowledge. Bears are magnificent creatures that make for stunning photographs, but they are also dangerous wild animals that deserve respect and distance. The key to successful bear photography lies in preparation and the right equipment. A telephoto lens of at least 400mm is essential to maintain a safe distance while still capturing detailed shots. Understanding bear behavior is crucial - knowing when they're likely to be active, where they feed, and how to read their body language for signs of stress or aggression. Many of the best bear photographs are taken during salmon runs in Alaska or while bears are foraging for berries. Always prioritize safety over the perfect shot, and consider hiring local guides who know the area and animal behavior patterns.",
    date: "February 15, 2023",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "why-i-love-yorkies": {
    title: "Why I Love Yorkies",
    content: "Yorkshire Terriers, affectionately known as Yorkies, are small dogs with enormous personalities. Despite their tiny size, typically weighing only 4-7 pounds, these dogs possess the courage and confidence of much larger breeds. Originally bred in Yorkshire, England, to catch rats in textile mills, Yorkies have evolved into beloved companion animals. Their silky, steel-blue and tan coats are hypoallergenic, making them excellent choices for people with allergies. What I love most about Yorkies is their loyalty and intelligence. They form strong bonds with their owners and are surprisingly easy to train despite their sometimes stubborn nature. Their portable size makes them excellent travel companions, and their alertness makes them excellent watchdogs. While they require regular grooming and can be somewhat fragile due to their size, the joy and companionship they provide far outweighs any challenges.",
    date: "February 10, 2023",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "drought-resistant-annuals": {
    title: "Drought Resistant Annuals",
    content: "In an era of changing climate patterns and water conservation awareness, drought-resistant annual flowers have become increasingly important for gardeners. These resilient plants can thrive with minimal water once established, making them perfect for xeriscaping or areas with water restrictions. Some of the best drought-tolerant annuals include marigolds, zinnias, sunflowers, and cosmos. These flowers not only survive dry conditions but actually flourish in them, often producing more blooms when slightly stressed for water. Marigolds, in particular, are excellent because they also help repel garden pests naturally. When planning a drought-resistant garden, soil preparation is key - adding compost and ensuring good drainage helps plants establish strong root systems. Native plants in your region are always good choices as they're naturally adapted to local climate conditions. Mulching around plants helps retain moisture and reduce watering needs even further.",
    date: "October 12, 2021",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "types-of-garlic": {
    title: "Types Of Garlic",
    content: "Garlic is far more diverse than most people realize, with numerous varieties offering different flavors, growing requirements, and culinary applications. The two main categories are hardneck and softneck garlic. Hardneck varieties, which produce flower stalks called scapes, are better suited to colder climates and include popular types like Rocambole, Purple Stripe, and Porcelain garlic. These tend to have more complex, robust flavors. Softneck garlic, which doesn't produce scapes, thrives in warmer climates and includes Artichoke and Silverskin varieties. These are often the types found in grocery stores due to their longer storage life. Within these categories, there are dozens of named varieties, each with unique characteristics. Purple Stripe garlics, for instance, have beautiful purple stripes on their bulb wrappers and offer rich, complex flavors. Rocamboles are prized by chefs for their intense, full-bodied taste. Growing garlic is relatively simple - plant cloves in fall for summer harvest.",
    date: "July 30, 2021",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "choosing-the-right-hot-water-tank": {
    title: "Choosing The Right Hot Water Tank",
    content: "Selecting the right hot water tank for your home involves considering several key factors including household size, energy efficiency, available space, and budget. Traditional tank water heaters store heated water in insulated tanks, typically ranging from 30 to 80 gallons. For most families, a 40-50 gallon tank provides adequate hot water for daily needs. However, larger families or homes with multiple bathrooms may require 60-80 gallon tanks. Energy efficiency is crucial for long-term savings - look for tanks with high Energy Factor (EF) ratings. Gas water heaters generally heat water faster and cost less to operate than electric units, but require proper venting. Electric units are easier to install but typically have higher operating costs. Consider the tank's warranty, which usually ranges from 6-12 years, and factor in installation costs. Tankless water heaters are becoming increasingly popular as they provide hot water on demand and take up less space, though they have higher upfront costs.",
    date: "July 28, 2021",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "google-my-business-for-local-businesses": {
    title: "Google My Business For Local Businesses",
    content: "Google My Business (now called Google Business Profile) is an essential free tool for local businesses looking to improve their online visibility and attract nearby customers. This platform allows businesses to manage their online presence across Google Search and Google Maps, providing crucial information like hours of operation, contact details, photos, and customer reviews. Setting up a complete and accurate Google Business Profile can significantly impact local search rankings. Key optimization strategies include choosing the right business category, writing a compelling business description with relevant keywords, uploading high-quality photos of your business, products, and team, and actively managing customer reviews. Regular posts about promotions, events, or business updates help keep your profile active and engaging. The insights provided by Google Business Profile offer valuable data about how customers find and interact with your business online. Encouraging satisfied customers to leave reviews is crucial, as positive reviews improve credibility and search rankings while helping potential customers make informed decisions.",
    date: "July 28, 2021",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "cauliflower-steaks": {
    title: "Cauliflower Steaks",
    content: "Cauliflower steaks have emerged as a popular and healthy alternative to traditional meat steaks, offering a satisfying and nutritious meal that appeals to vegetarians, vegans, and health-conscious omnivores alike. The key to perfect cauliflower steaks lies in the cutting technique - slice the cauliflower head vertically through the core into thick, steak-like portions, typically 1-1.5 inches thick. This ensures the steaks hold together during cooking. The versatility of cauliflower steaks allows for countless seasoning and preparation methods. A simple approach involves brushing with olive oil and seasoning with salt, pepper, and garlic powder before roasting at 425°F for 25-30 minutes. For more complex flavors, try marinades with herbs like rosemary and thyme, or spice blends like curry powder or za'atar. Grilling cauliflower steaks adds a wonderful smoky flavor and attractive grill marks. Serve with chimichurri, tahini sauce, or a simple lemon butter sauce for added richness and flavor complexity.",
    date: "July 28, 2021",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "carving-wood-spirits": {
    title: "Carving Wood Spirits",
    content: "Wood spirit carving is a traditional folk art that transforms ordinary pieces of wood into mystical faces and characters that seem to emerge naturally from the grain. Also known as 'green men' or tree spirits, these carvings typically feature faces with flowing hair, beards, and expressions that capture the essence of forest spirits or nature deities. The art form requires basic carving tools including knives, gouges, and chisels, but the most important element is learning to 'read' the wood and work with its natural characteristics. Basswood is often recommended for beginners due to its soft, even grain, while more experienced carvers might choose harder woods like oak or cherry for more detailed work. The process begins with roughly sketching the face proportions, then gradually removing wood to reveal the features. Eyes are typically carved first as they establish the character's expression, followed by the nose, mouth, and flowing hair or beard details. Safety is paramount when carving - always cut away from your body and keep tools sharp, as dull blades require more pressure and are more likely to slip.",
    date: "July 28, 2021",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "what-is-css": {
    title: "What Is CSS?",
    content: "CSS (Cascading Style Sheets) is a fundamental technology for web development that controls the visual presentation and layout of HTML documents. While HTML provides the structure and content of a webpage, CSS is responsible for how that content looks and is displayed to users. CSS allows developers to separate content from presentation, making websites more maintainable and flexible. With CSS, you can control typography, colors, spacing, positioning, responsive layouts, and even animations. The 'cascading' nature refers to how styles are applied based on specificity and inheritance rules. Modern CSS includes powerful features like Flexbox and Grid for layout, custom properties (CSS variables) for maintainable code, and media queries for responsive design. Understanding CSS is essential for anyone working in web development, as it's the tool that transforms plain HTML into visually appealing and user-friendly interfaces.",
    date: "March 15, 2023",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "the-joy-of-learning-something-new": {
    title: "The Joy of Learning Something New",
    content: "There's a unique satisfaction that comes from mastering a new skill or understanding a complex concept for the first time. Learning activates our brain's reward system, releasing dopamine that creates feelings of pleasure and motivation. This neurochemical response explains why we feel so good when we finally 'get' something we've been struggling with. The process of learning keeps our minds active and engaged, potentially helping to maintain cognitive function as we age. Each new skill we acquire also opens doors to other learning opportunities, creating a positive feedback loop of curiosity and growth. Whether it's learning a musical instrument, a new language, cooking techniques, or coding, the act of learning itself becomes rewarding. The key is to embrace the struggle and view mistakes as essential parts of the process rather than failures. Starting small, celebrating progress, and maintaining consistency are crucial for sustaining motivation and building confidence in any learning journey.",
    date: "February 28, 2023",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "test": {
    title: "Test",
    content: "This is a test post to verify that the blog system is working correctly. It contains minimal content for testing purposes.",
    date: "January 15, 2023",
    category: "UNCATEGORIZED",
    author: "admin"
  },
  "unlocking-the-secrets-of-becoming-a-ghostwriter": {
    title: "Unlocking the Secrets of Becoming a Ghostwriter: Mastering the Art of the Invisible Pen",
    content: "Ghostwriting is one of the most lucrative yet mysterious careers in the writing world. As a ghostwriter, you write content that will be published under someone else's name, remaining invisible while your words reach potentially millions of readers. The key to successful ghostwriting lies in your ability to capture and mimic another person's voice, style, and perspective authentically. This requires exceptional interviewing skills, deep research abilities, and the flexibility to adapt your writing style to match different personalities and industries. Many ghostwriters specialize in specific niches such as business books, memoirs, self-help, or technical content. Building a ghostwriting career requires discretion, professionalism, and the ability to work collaboratively with clients who may have strong opinions about their content. While you won't receive public credit for your work, ghostwriting often pays significantly better than traditional freelance writing and can lead to long-term relationships with high-profile clients. Success in this field depends on delivering exceptional work consistently and maintaining absolute confidentiality about your projects.",
    date: "December 10, 2022",
    category: "UNCATEGORIZED",
    author: "admin"
  }
};

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