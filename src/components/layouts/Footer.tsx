import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#] text-white py-8 w-full">
      <div className="container px-8 mx-auto lg:px-16">
        {/* Top Section - Main Content */}
        <div className="w-full mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Smart Attendance</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed"></p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://youtube.com/@xpplg3?si=BGNnuJeEGWshm7Bu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
                alt="YouTube"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.instagram.com/rplthreee_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=85154&format=png&color=FFFFFF"
                alt="Dribbble"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.tiktok.com/@rplthree?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=soupkpLfTkZi&format=png&color=FFFFFF"
                alt="Behance"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between pt-8 border-t border-gray-400 md:flex-row">
          <p className="mb-4 text-sm text-center md:text-left md:mb-0">
            © {new Date().getFullYear()} Smart Attendance. All rights reserved.
          </p>
          <p className="text-sm text-center md:text-right">
            Made by{" "}
            <a
              href="https://xii-rpl3.v1ercel.app/"
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
