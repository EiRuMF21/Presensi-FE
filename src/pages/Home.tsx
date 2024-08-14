import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    <div className="flex flex-col items-center px-6 max-sm:px-0 lg:px-0 z-10">
      {/* Halaman 1 */}
      <div className="flex-grow bg-gradient-to-t w-full from-[#4942E4] to-[#A4A0F1] to-[#FFFFFF] min-h-screen">
        <Navbar />
        <div className="w-full max-w-3xl mx-auto p-2 mt-16">
          <div className="text-center mt-24">
            <h2 className="text-6xl text-neutral-100 font-semibold drop-shadow-2xl font-sans">
              Digital <br /> Platform For
            </h2>
            <h2 className="text-6xl text-[#000000] opacity-80 font-semibold drop-shadow-2xl font-sans">
              All Employee
            </h2>
            <p className="text-lg mt-6 text-neutral-100 drop-shadow px-1 space-y-64 drop-shadow-2xl font-sans">
              Practical and accurate web attendance makes it easy to record
              attendance in real-time with automatic recap and notification
              features. Secure digital presence solution to increase your
              organization's efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Halaman 2 */}
      <div className="bg-[#4942E4] py-16 w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-2 space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Image Section */}
          <div className="flex-shrink-0 lg:max-w-xs w-full lg:mb-0 mb-8">
            <img
              src="/public/image/Home2.png"
              alt="Illustration"
              className="w-full mx-auto"
            />
          </div>

          {/* Halaman 2 Content */}
          <div className="flex flex-col text-white px-0 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Presensi From Our <br /> Online Platform
            </h2>
            <div className="space-y-2">
              <div className="flex items-start justify-center lg:justify-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/clock.png"
                  alt="Masuk Icon"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Masuk</h3>
                  <p>
                    Getting to work on time is key to productivity. With the
                    discipline of showing up every day, you contribute to the
                    success of your team and company.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center lg:justify-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/suitcase.png"
                  alt="Izin Icon"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Izin</h3>
                  <p>
                    Work permits are granted for urgent needs or emergencies.
                    Employees must apply for permission and get approval before
                    being absent.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center lg:justify-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/beach.png"
                  alt="Cuti Icon"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Cuti</h3>
                  <p>
                    A leave of absence is an employee's right to be away from
                    work for a period of time, usually for rest or personal
                    purposes. Leave must be planned and approved in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
