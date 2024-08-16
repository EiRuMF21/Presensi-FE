import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the mobile menu after clicking
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

  return (
    <nav
      className={`${
        isScrolled ? "bg-white/30 backdrop-blur-lg shadow-lg" : "bg-transparent"
      } fixed top-0 w-full z-50 transition duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-lg font-bold tracking-wide text-gray-800 font-sans"
            >
              SMART PRESENCE
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-black text-sm font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-black text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("other")}
              className="text-gray-700 hover:text-black text-sm font-medium"
            >
              Other
            </button>
          </div>

          <div className="hidden md:flex items-center">
            <Link
            
              to="/Login"
              className="text-sm text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="block h-6 w-6"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("other")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
            >
              Other
            </button>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
