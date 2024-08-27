  import { useState, useEffect } from "react";

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
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
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

    return (
      <nav
        className={`${
          isScrolled ? "bg-white/30 backdrop-blur-lg shadow-lg" : "bg-transparent"
        } fixed top-0 w-full z-50 transition duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a
                href="#"
                className="text-lg font-bold tracking-wide text-[#212121] font-sans"
              >
                SMART PRESENCE
              </a>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-20">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium text-[#212121] hover:text-black"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-[#212121] hover:text-black"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-[#212121] hover:text-black"
              >
                Features
              </button>
            </div>

            {/* Tombol Login untuk Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={onRegisterClick}
                className="text-sm px-4 py-2 rounded-full border border-[#212121] text-[#FFFFFF] bg-black hover:bg-[#535353] hover:text-white transition duration-300"
              >
                Register
              </button>
              <button
                onClick={onLoginClick}
                className="text-sm px-4 py-2 rounded-full border border-[#1E88E5] text-[#212121] hover:bg-[#1E88E5] hover:text-white transition duration-300"
              >
                Login
              </button>
            </div>
          </div>

          {/* Tombol Menu Mobile */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-label="Toggle Menu"
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

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:bg-blue-700 hover:text-white"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:bg-blue-700 hover:text-white"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:bg-blue-700 hover:text-white"
              >
                Features
              </button>
              <button
                onClick={onLoginClick}
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    );
  };

  export default Navbar;
