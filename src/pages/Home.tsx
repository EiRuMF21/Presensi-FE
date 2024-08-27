import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../components/Login";  

const Home: React.FC = () => {

  const navigate = useNavigate();
 

  const handleRegisterClick = () => {
    navigate("/register");
  };
  const [isRolePopupOpen, setIsRolePopupOpen] = useState(false);

  const openRolePopup = () => {
    setIsRolePopupOpen(true);
  };

  const closeRolePopup = () => {
    setIsRolePopupOpen(false);
  };

  return (
    <div className="flex flex-col items-center max-sm:px-0 xl:px-0 bg-gradient-to-t from-[#121212] to-[#424242]">
      {/* Halaman 1 (Home Section) */}
      <div
        id="home"
        className="flex-grow w-full min-h-screen bg-gradient-to-t from-[#FFFFFF] to-[#CCCBCB]"
      >
        <Navbar
          onLoginClick={openRolePopup}
          onRegisterClick={handleRegisterClick}
        />
        <div className="w-full max-w-3xl mx-auto p-2 mt-24">
          <div className="text-center mt-24">
            <h1 className="text-6xl font-bold text-[#212121] mb-5">Digital</h1>
            <h1 className="text-6xl font-bold text-[#212121] mb-5">
              Platform For
            </h1>
            <h2 className="text-6xl font-bold text-[#1E88E5]">All Employee</h2>
            <p className="text-lg mt-6 text-[#212121] px-1 space-y-64 drop-shadow-2xl font-sans">
              Practical and accurate web attendance makes it easy to record
              attendance in real-time with automatic recap and notification
              features. Secure digital presence solution to increase your
              organization's efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Halaman 2 (About Section) */}
      <div
        id="about"
        className="py-16 w-full min-h-screen flex flex-col items-center bg-[#FFFFFF]"
      >
        <div className="flex flex-col max-w-4xl justify-center mt-32">
          <h1 className="text-4xl font-bold text-black mb-4 text-left">
            About Us
          </h1>
          <h2 className="text-3xl lg:text-6xl font-bold text-left">
            <span className="text-[#1E88E5]">Helping organizations</span>{" "}
            <span className="text-black">
              increase efficiency through the power of digital presence.
            </span>
          </h2>
          <p className="text-lg text-black leading-relaxed mt-4 text-left">
            Web attendance is the future of workforce management in this digital
            era. Our platform revolutionizes the way companies track and manage
            attendance. We assist organizations of all sizes in securing
            accurate attendance data and streamlining their operational
            processes.
          </p>
        </div>
      </div>

      {/* Halaman 3 (Features) */}
      <div
        id="features"
        className="py-16 w-full min-h-screen flex bg-gradient-to-t from-[#D9D8D8] to-[#FFFFFF]"
      >
        <div className="flex flex-wrap lg:flex-row items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="flex flex-col px-0 space-y-14 text-center lg:text-left text-black">
            <div className="flex items-center justify-start space-x-4 lg:ml-2">
              {/* Image Section */}
              <div className="h-68 flex-shrink-0">
                <img
                  src="/public/image/Home1.png"
                  alt="Illustration"
                  className="w-[150px] h-[150px] lg:w-[300px] lg:h-[200px] object-contain"
                />
              </div>

              {/* Text Section */}
              <h2 className="text-5xl font-bold text-left">
                <span className="text-[#1E88E5]">Attendance</span> From Our
                Online Platform
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
                  <h3 className="font-bold text-2xl drop-shadow-2xl justify-center items-center text-black mb-5">
                    Check In
                  </h3>
                  <p className="text-sm lg:text-base text-black px-1 space-y-64 drop-shadow-2xl font-sans">
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
                  <h3 className="font-bold text-2xl drop-shadow-2xl justify-center items-center text-black mb-5">
                    Permission
                  </h3>
                  <p className="text-sm lg:text-base text-black px-1 space-y-64 drop-shadow-2xl font-sans">
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
                  <h3 className="font-bold text-2xl drop-shadow-2xl justify-center items-center text-black mb-5">
                    Annual Leave
                  </h3>
                  <p className="text-sm lg:text-base text-black px-1 space-y-64 drop-shadow-2xl font-sans">
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

      {/* Footer */}
      <Footer />

      {/* Popup Login */}
      {isRolePopupOpen && <Login closeRolePopup={closeRolePopup} />}
    </div>
  );
};

export default Home;
