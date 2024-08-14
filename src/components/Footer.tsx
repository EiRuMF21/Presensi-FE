import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ffffff00] text-white p-4 flex flex-col items-center">
      <div className="flex space-x-4 mb-4">
        <a  
          href="https://www.instagram.com/rplthreee_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
            alt="Instagram"
            className="w-8 h-8"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
            alt="Facebook"
            className="w-8 h-8"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
            alt="Twitter"
            className="w-8 h-8"
          />
        </a>
      </div>
      <p className="text-center text-sm">
        © {new Date().getFullYear()} Smart Attendance. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
