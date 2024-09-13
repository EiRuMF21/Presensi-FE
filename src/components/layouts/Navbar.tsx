import {useState, useEffect} from "react";

interface NavbarProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({onLoginClick, onRegisterClick}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({behavior: "smooth"});
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
        isScrolled
          ? "bg-[#1E88E5]/40 backdrop-blur-lg shadow-lg"
          : "bg-[#1E88E5]"
      } fixed top-0 w-full z-50 transition duration-300`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-lg font-bold tracking-wide text-[#FFFFFF] font-sans">
              SMART ATTANDANCE
            </h1>
          </div>

          {/* Menu Desktop */}
          <div className="hidden space-x-20 lg:flex">
            <button
              onClick={() => scrollToSection("home")}
              className="relative text-sm font-medium text-[#FFFFFF]  before:absolute before:top-5 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="relative text-sm font-medium text-[#FFFFFF]  before:absolute before:top-5 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="relative text-sm font-medium text-[#FFFFFF]  before:absolute before:top-5 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Features
            </button>
          </div>

          {/* Tombol Login untuk Desktop */}
          <div className="items-center hidden space-x-4 md:flex">
            <button
              onClick={onRegisterClick}
              className="text-sm px-4 py-2 rounded-full border border-[#212121] text-[#121212] font-semibold hover:bg-[#FFFFFF] hover:text-black transition duration-300"
            >
              Register
            </button>
            <button
              onClick={onLoginClick}
              className="text-sm px-6 py-2 rounded-full border border-[#FFFFFF] text-[#212121] bg-white hover:bg-[#121212] hover:text-white transition duration-300"
            >
              Login
            </button>
          </div>
        </div>

        {/* Tombol Menu Mobile */}
        <div className="flex items-center space-x-4 md:hidden">
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

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-base font-medium text-blue-700 rounded-md hover:bg-blue-700 hover:text-white"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-base font-medium text-blue-700 rounded-md hover:bg-blue-700 hover:text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block px-3 py-2 text-base font-medium text-blue-700 rounded-md hover:bg-blue-700 hover:text-white"
            >
              Features
            </button>
            <button
              onClick={onLoginClick}
              className="block px-3 py-2 text-base font-medium text-blue-600 transition duration-300 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
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
