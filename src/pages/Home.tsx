import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Home: React.FC = () => {
  const [isRolePopupOpen, setIsRolePopupOpen] = useState(false);

  const openRolePopup = () => {
    setIsRolePopupOpen(true);
  };

  const closeRolePopup = () => {
    setIsRolePopupOpen(false);
  };
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);

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
    <div className="relative flex flex-col items-center px-6 max-sm:px-0 lg:px-0 z-10">
      <Navbar onLoginClick={openRolePopup} />

      {/* Halaman 1 (Home Section) */}
      <div className="flex-grow bg-gradient-to-t w-full from-[#4942E4] to-[#dfdeff] min-h-screen">
        <div className="w-full max-w-3xl mx-auto p-2 mt-16">
          <div className="text-center mt-24">
            <h1 className="text-6xl font-bold text-neutral-100 mb-4">
              Digital
            </h1>
            <h1 className="text-6xl font-bold text-neutral-100 mb-4">
              Platform For
            </h1>
            <h2 className="text-6xl font-bold text-black">All Employee</h2>
            <p className="text-lg mt-6 text-neutral-100 px-1 space-y-64 drop-shadow-2xl font-sans">
              Practical and accurate web attendance makes it easy to record
              attendance in real-time with automatic recap and notification
              features. Secure digital presence solution to increase your
              organization's efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Halaman 2 */}
      <div className="bg-[#4942E4] py-16 w-full min-h-screen flex">
        <div className="flex flex-wrap lg:flex-row items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Halaman 2 content */}
          <div className="flex flex-col text-white px-0 space-y-14 text-center lg:text-left">
            <div className="flex items-center justify-start space-x-4 lg:ml-2">
              {/* Image Section */}
              <div className="h-68 flex-shrink-0">
                <img
                  src="/public/image/Home1.png" // Replace with your image path
                  alt="Illustration"
                  className="w-[150px] h-[150px] lg:w-[300px] lg:h-[200px] object-contain"
                />
              </div>

              {/* Text Section */}
              <h2 className="text-5xl font-bold text-left">
                <span className="text-[#000000] bg">Presensi</span>
                <span className="text-white"> From Our Online Platform</span>
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-center lg:justify-between">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/clock.png"
                  alt="Masuk Icon"
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <h3 className="font-bold text-2xl drop-shadow-2xl justify-center items-center">
                    Masuk
                  </h3>
                  <p className="text-sm lg:text-base drop-shadow-2xl">
                    Coming to work on time is the key to productivity. By being
                    disciplined every day, you contribute to the success of your
                    team and company.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center lg:justify-end">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/suitcase.png"
                  alt="Izin Icon"
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <h3 className="font-bold text-2xl drop-shadow-2xl">Izin</h3>
                  <p className="text-sm lg:text-base drop-shadow-2xl">
                    Work permits are granted for urgent needs or emergency
                    conditions. Employees must apply for permission and obtain
                    approval before being absent.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center lg:justify-end">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/beach.png"
                  alt="Cuti Icon"
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <h3 className="font-bold text-2xl drop-shadow-2xl">Cuti</h3>
                  <p className="text-sm lg:text-base drop-shadow-2xl">
                    Work leave is an employee's right not to work for a certain
                    period of time, usually for rest or personal needs. Leave
                    must be planned and approved in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Halaman 3 (About Section) */}
      <div
        id="about"
        ref={aboutSectionRef}
        className="bg-gradient-to-t from-[#F7B5CA] to-[#4942E4] py-16 w-full min-h-screen flex flex-col items-center"
      >
        <div className="flex flex-col max-w-4xl justify-center mt-20">
          {/* About content */}
          <h1 className="text-4xl font-bold text-neutral-100 mb-4 text-left drop-shadow-2xl">
            About Us
          </h1>
          <h2 className="text-3xl lg:text-6xl font-bold text-left drop-shadow-2xl">
            <span className="text-[#F7B5CA]">Helping organizations</span>{" "}
            <span className="text-white">
              increase efficiency through the power of digital presence.
            </span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 text-left drop-shadow-2xl">
            Web attendance is the future of workforce management in this digital
            era. Our platform revolutionizes the way companies track and manage
            attendance. We assist organizations of all sizes in securing
            accurate attendance data and streamlining their operational
            processes.
          </p>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />

      {/* Popup Login */}
      {isRolePopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8">
            <div className="flex justify-between items-center">
              <button
                onClick={closeRolePopup}
                className="text-indigo-600 text-2xl font-bold"
              >
                &#8592;
              </button>
              <h2 className=" flex flex-wrap text-indigo-600 font-bold text-center text-lg">LOG IN</h2>
            </div>
            <h2 className="text-3xl font-bold text-left text-indigo-700 mt-4">
              Smart Presence
            </h2>
            <p className="text-left font-bold text-neutral-700 mt-2">
              Enter your log in details to <br />
              access your account
            </p>
            <form className="mt-8 space-y-6">
              <div className="rounded-md space-y-4">
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-neutral-900 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Type your username"
                    />
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <img
                        src="https://img.icons8.com/ios-filled/24/cccccc/gender-neutral-user.png"
                        alt="User Icon"
                      />
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-neutral-900 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Type your password"
                    />
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <img
                        src="https://img.icons8.com/ios-filled/24/cccccc/lock.png"
                        alt="Lock Icon"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="mt-6 text-center text-sm">
              <span className="text-neutral-500">Forgot password?&nbsp;</span>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-500 font-bold"
              >
                Reset it here
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
