import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-[#121212] to-[#424242]">
      <Navbar
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
      />

      {/* Home Section */}
      <div id="home" className="flex-grow w-full min-h-screen bg-[#FFFFFF]">
        <div className="w-full max-w-3xl p-4 mx-auto mt-16 md:mt-48">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#212121] mb-2 md:mb-5">
              Digital
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-[#212121] mb-2 md:mb-5">
              Platform For
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1E88E5]">
              All Employee
            </h2>
            <p className="text-base md:text-lg mt-4 md:mt-6 text-[#212121] px-1 space-y-4 md:space-y-64 drop-shadow-2xl font-sans">
              Practical and accurate web attendance makes it easy to record
              attendance in real-time with automatic recap and notification
              features. Secure digital presence solution to increase your
              organization's efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="py-8 md:py-16 w-full min-h-screen flex flex-col items-center md:items-start bg-[#FFFFFF]"
      >
        <div className="w-full px-4 md:px-0">
          <img
            src="/public/image/LandingPage.png"
            alt=""
            className="w-full rounded-xl drop-shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center max-w-4xl px-4 mt-8 md:mt-16 md:ml-20">
          <h1 className="mb-4 text-3xl font-bold text-center text-black md:text-4xl md:text-left">
            About Us
          </h1>
          <h2 className="text-2xl font-bold text-center md:text-3xl md:text-left lg:text-6xl">
            <span className="text-[#1E88E5]">Helping organizations</span>{" "}
            <span className="text-black">
              increase efficiency through the power of digital presence.
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-center text-black md:text-lg md:text-left">
            Web attendance is the future of workforce management in this digital
            era. Our platform revolutionizes the way companies track and manage
            attendance. We assist organizations of all sizes in securing
            accurate attendance data and streamlining their operational
            processes.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div
        id="features"
        className="py-8 md:py-16 w-full min-h-screen flex flex-col bg-[#FFFFFF]"
      >
        <div className="flex flex-col px-4 md:flex-row md:px-12">
          <div className="flex flex-col mb-8 space-y-6 text-center text-black md:text-left md:space-y-14 md:mb-0 md:mr-8 lg:mr-96">
            <h1 className="text-3xl font-semibold md:text-4xl">Features</h1>
            <h2 className="text-4xl font-semibold md:text-6xl">
              <span className="text-[#1E88E5]">Important </span>
              Features That <br className="hidden md:inline" />
              Our Application Has
            </h2>
          </div>
          <div className="w-full md:w-[90rem] mt-4 md:mt-10">
            <img
              src="/public/image/Features.png"
              alt="Features"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
