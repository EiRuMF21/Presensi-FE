import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface NavbarProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onRegisterClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    gsap.to(window, { duration: 1, scrollTo: `#${id}`, ease: "power2.inOut" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavButtons = () => (
    <>
      <button
        onClick={() => scrollToSection("home")}
        className="relative text-sm font-medium text-[#FFFFFF] hover:text-white before:absolute before:left-0 before:bottom-[-4px] before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
      >
        Home
      </button>
      <button
        onClick={() => scrollToSection("about")}
        className="relative text-sm font-medium text-[#FFFFFF] hover:text-white before:absolute before:left-0 before:bottom-[-4px] before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("features")}
        className="relative text-sm font-medium text-[#FFFFFF] hover:text-white before:absolute before:left-0 before:bottom-[-4px] before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
      >
        Features
      </button>
    </>
  );

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-[#1E88E5]/40 backdrop-blur-lg shadow-lg"
          : "bg-[#1E88E5]"
      } fixed top-0 w-full z-50 transition duration-300`}
    >
      <div className="px-4 mx-auto max-w-72 sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-lg font-bold tracking-wide -ml-10 text-[#FFFFFF] font-sans">
              SMART ATTENDANCE
            </h1>
          </div>

          {/* Menu for md screens and larger */}
          <div className="max-sm:hidden space-x-20">
            <NavButtons />
          </div>

          {/* Login and Register buttons for md screens and larger */}
          <div className="items-center hidden lg:flex space-x-4 justify-between">
            <button
              onClick={onLoginClick}
              className="text-sm px-5 py-2 rounded-full border font-medium border-[#212121] text-[#212121] hover:bg-[#FFFFFF] hover:text-black transition duration-500"
            >
              Login
            </button>
            <button
              onClick={onRegisterClick}
              className="text-sm px-4 py-2 rounded-full border font-medium border-[#212121] text-[#212121] bg-white hover:bg-[#212121] hover:text-white transition duration-500"
            >
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-black hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-label="Toggle Menu"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={onLoginClick}
              className="block w-full px-3 py-2 text-base font-medium text-blue-600 transition duration-300 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
            >
              Login
            </button>
            <button
              onClick={onRegisterClick}
              className="block w-full px-3 py-2 text-base font-medium text-white transition duration-300 bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
