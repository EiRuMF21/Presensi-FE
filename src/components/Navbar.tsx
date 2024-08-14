import React, { useState, useRef } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  React.useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="absolute bg-[#ffffff00] top-1 -left-7 z-10"
      >
        <svg
          className="w-8 h-8 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-16 6h16"
          />
        </svg>
      </button>
      <h1 className="absolute text-2xl text-[#4942E4] font-bold text-center top-4 left-10 right-10 ">
        Smart Attendance
      </h1>
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-64 h-full bg-white z-20 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="bg-[#4942E4] text-white p-4 text-center text-lg font-bold shadow-md">
          Smart Attendance
        </div>
        <nav className="flex flex-col p-4">
          <a href="#" className="mt-4 text-xl text-[#4942E4]">
            Home
          </a>
          <a href="#" className="mt-4 text-xl text-[#4942E4]">
            About Presensi
          </a>
          <a href="/dash" className="mt-4 text-xl text-[#4942E4]">
            Dashboard
          </a>
          <a
            href="/login"
            className="mt-8 px-4 py-2 bg-[#4942E4] text-white rounded-md"
          >
            Log in
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
