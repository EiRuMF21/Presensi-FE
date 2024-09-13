import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <div className="flex flex-col items-center max-sm:px-0 lg:px-0 bg-gradient-to-t from-[#121212] to-[#424242] ">
      {/* Halaman 1 (Home Section) */}
      <Navbar
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
      />
      <div id="home" className="flex-grow w-full min-h-screen bg-[#FFFFFF]">
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
        className="py-16 w-full min-h-screen flex flex-col items-start bg-[#FFFFFF]"
      >
        <img
          src="/public/image/LandingPage.png"
          alt=""
          className="rounded-xl drop-shadow-md"
        />
        <div className="flex flex-col max-w-4xl justify-center ml-20 mt-16">
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
        className="py-16 w-full min-h-screen flex bg-[#FFFFFF]"
      >
        <div className="flex flex-wrap ">
          <div className="flex flex-col px-0 space-y-14 ml-12 text-left lg:text-left text-black mr-96">
            {/* Text Section */}
            <h1 className="text-4xl font-semibold text-black mb-0 text-left">
              Features
            </h1>
            <h2 className="text-6xl font-semibold text-left">
              <span className="text-[#1E88E5]">Important </span>
              Features That <br />Our Application Has
            </h2>
          </div>
          <div className=" w-[90rem]  pb-16 flex flex-col mt-10 ml-12">
            <img src="/public/image/Features.png"></img>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
