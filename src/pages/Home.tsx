  import React, { useState, useEffect } from "react";
  import { useNavigate, useLocation } from "react-router-dom";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import Login from "../components/Login";
  import backgroundSvg from "/public/image/LPFacerecognation.svg";

  const Home: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isRolePopupOpen, setIsRolePopupOpen] = useState(false);

    useEffect(() => {
      // Cek apakah ada state untuk membuka popup
      if (location.state?.openRolePopup) {
        setIsRolePopupOpen(true);
      }
    }, [location.state]);

    const handleRegisterClick = () => {
      navigate("/register");
    };

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
              <h1 className="text-6xl font-bold text-[#212121] mb-5">
                Digital
              </h1>
              <h1 className="text-6xl font-bold text-[#212121] mb-5">
                Platform For
              </h1>
              <h2 className="text-6xl font-bold text-[#1E88E5]">
                All Employee
              </h2>
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
              Web attendance is the future of workforce management in this
              digital era. Our platform revolutionizes the way companies track
              and manage attendance. We assist organizations of all sizes in
              securing accurate attendance data and streamlining their
              operational processes.
            </p>
          </div>
        </div>

        {/* Halaman 3 (Features) */}
        <div
          id="features"
          className="py-16 w-full min-h-screen flex bg-gradient-to-t from-[#D9D8D8] to-[#FFFFFF]"
        >
          <div className="flex flex-wrap lg:flex-row max-w-4xl px-4 md:px-8 x-8 space-y-8 lg:space-y-0 lg:space-x-2">
            <div className="flex flex-col px-0 space-y-14 ml-12 text-left lg:text-left text-black">
              {/* Image Section */}

              {/* Text Section */}
              <h1 className="text-4xl font-semibold text-black mb-0 text-left">
                Features
              </h1>
              <h2 className="text-6xl font-semibold text-left">
                <span className="text-[#1E88E5]">Important</span>
                Features That Our Application Has
              </h2>
            </div>

            <div className="relative w-full h-[300px] flex justify-center">
              <div
                className="bg-no-repeat bg-center bg-cover w-full h-full"
                style={{ backgroundImage: `url(${backgroundSvg})` }}
              ></div>
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
