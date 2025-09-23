import Link from "next/link";

interface ReadTheseProps {
  linkColor?: string;
  linkHoverColor?: string;
}

export default function ReadThese({ linkColor = "text-red-600", linkHoverColor = "hover:text-red-700" }: ReadTheseProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-black text-gray-900 mb-8">Read These</h2>
        <div className="space-y-4">
          <Link href="/blog/ai-machine-learning-revolution" className={`block ${linkColor} ${linkHoverColor} text-lg`}>
            The AI and Machine Learning Revolution: Transforming Industries
          </Link>
          <Link href="/blog/cloud-computing-business-transformation" className={`block ${linkColor} ${linkHoverColor} text-lg`}>
            Cloud Computing: The Backbone of Modern Business Transformation
          </Link>
          <Link href="/blog/cybersecurity-threats-modern-digital-world" className={`block ${linkColor} ${linkHoverColor} text-lg`}>
            Cybersecurity Threats in Our Modern Digital World
          </Link>
          <Link href="/blog/blockchain-cryptocurrency-future-finance" className={`block ${linkColor} ${linkHoverColor} text-lg`}>
            Blockchain and Cryptocurrency: Shaping the Future of Finance
          </Link>
          <Link href="/blog/iot-smart-devices-connected-future" className={`block ${linkColor} ${linkHoverColor} text-lg`}>
            IoT and Smart Devices: Building Our Connected Future
          </Link>
        </div>
      </div>
    </section>
  );
}