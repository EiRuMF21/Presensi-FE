import React, { useState, useEffect, useRef } from "react";

const Home: React.FC = () => {
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

  useEffect(() => {
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
    <div className="flex flex-col min-h-screen bg-h-14 bg-gradient-to-t from-[#4942E4] to-[#A4A0F1] to-[#FFFFFF] px-6 sm:px-6 lg:px-8">
      {/* Bagian atas */}
      <div className="p-7">
        {!isMenuOpen && ( // Kondisi untuk menyembunyikan tombol saat menu terbuka
          <button
            onClick={toggleMenu}
            className="fixed bg-[#ffffff00] top-6 left-2 z-10"
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
        )}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 w-64 h-full bg-white transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          {/* Navbar kecil di dalam menu */}
          <div className="bg-[#4942E4] text-white p-4 text-center text-lg font-bold shadow-md">
            Smart Presence
          </div>
          <nav className="flex flex-col p-4">
            <a href="#" className="mt-4 text-xl text-[#4942E4]">
              Home
            </a>
            <a href="#" className="mt-4 text-xl text-[#4942E4]">
              About Presensi
            </a>
            <a href="#Other" className="mt-4 text-xl text-[#4942E4]">
              Other
            </a>
            <a
              href="/login"
              className="mt-8 px-4 py-2 bg-[#4942E4] text-white rounded-md"
            >
              Log in
            </a>
          </nav>
        </div>
        <h1 className="text-2xl text-[#4942E4] font-bold text-center">
          Smart Presence
        </h1>
      </div>

      {/* Bagian tengah */}
      <div className="flex-grow flex flex-col justify-center">
        <div className="w-full max-w-sm p-8 space-y-8">
          <div>
            <h2 className="text-center text-4xl text-neutral-100 font-bold">
              Digital <br /> Platform For
            </h2>
            <h2 className="text-center text-4xl text-gray-400 font-bold">
              All Employee
            </h2>
            <br />
            <p className="text-center font-inter text-neutral-100">
              Web Presensi yang praktis dan akurat, memudahkan pencatatan
              kehadiran secara real-time dengan fitur rekap otomatis dan
              notifikasi. Solusi presensi digital yang aman untuk meningkatkan
              efisiensi organisasi Anda.
            </p>
          </div>
          <img src="/src/assets/image/Home1.png" />
          <div className="items-center justify-center mt-8 flex space-x-4">
            <a href="https://www.instagram.com/rplthreee_/">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
                alt="Twitter"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
