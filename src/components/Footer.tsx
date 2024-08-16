import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#] text-white py-16 w-full">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Top Section - Main Content */}
        <div className="w-full text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Smart Presence</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            DashTail is a developer-friendly, ready-to-use admin template
            designed for building attractive, scalable, and high-performing web
            applications, powered by the cutting-edge technologies of Next.js
            and Tailwind CSS.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
                alt="YouTube"
                className="w-8 h-8"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/dribbble.png"
                alt="Dribbble"
                className="w-8 h-8"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/behance.png"
                alt="Behance"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Smart Presences. All rights reserved.
          </p>
          <p className="text-sm text-center md:text-right">
            Hand-crafted & Made by{" "}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              XII-RPL-3
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;