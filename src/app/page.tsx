import Link from "next/link";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import ReadThese from "@/components/ReadThese";

export const metadata: Metadata = {
  title: "RedFlameNet",
  description: "Igniting innovation across the digital landscape",
  other: {
    "msvalidate.01": "6782812150C4035371CC96B465CA06A2",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Main Content */}
      <main className="bg-white">
        {/* Welcome Section */}
        <section className="text-center py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-6xl font-bold text-black mb-8">Welcome</h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-blue-400 py-8">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-lg text-white mb-4">
              Thanks for dropping in! Read our most recent posts by clicking here: <Link href="/posts" className="text-white hover:text-gray-200 underline">index</Link>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Social Icons */}
          <div className="mb-12">
            <SocialLinks />
          </div>

          {/* Read These Section */}
          <ReadThese />

          {/* Footer Credits */}
          <div className="text-center pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-700">
              <span>© 2025 <Link href="/" className="hover:text-black">RedFlameNet</Link></span>
              <Link href="/privacy-policy" className="hover:text-black">Privacy Policy</Link>
              <span>Powered by WordPress</span>
              <a href="#" className="hover:text-black">To the top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
