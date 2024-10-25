import React from "react";
import {useNavigate} from "react-router-dom";
import backgroundSvg from "/public/image/register.svg";
import backgroundLogSvg from "/public/image/log.svg";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const openRolePopup = () => {
    navigate("/login", {state: {openRolePopup: true}});
  };

  return (
    <div className="flex w-full min-h-screen">
      {/* Welcome Section - Hidden on mobile */}
      <div className="hidden md:flex flex-[1.7] bg-[#1E88E5] flex-col justify-center p-6 md:py-10 relative">
        <div className="relative flex flex-col items-center lg:flex-row lg:items-start">
          <div className="flex flex-col -ml-8 md:max-w-3xl">
            <h1 className="ml-24 text-4xl font-semibold text-white md:text-8xl md:-mt-32">
              Welcome
            </h1>
            <p className="mt-4 ml-24 text-white text-md md:mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="absolute md:-top-52 md:right-52">
            <div
              style={{backgroundImage: `url(${backgroundLogSvg})`}}
              className="w-[100px] h-[100px] lg:w-[250px] lg:h-[200px] object-contain"
            />
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full bg-left-bottom bg-no-repeat"
          style={{backgroundImage: `url(${backgroundSvg})`}}
        />
      </div>

      {/* Register Section - Full width on mobile */}
      <div className="flex-1 bg-[#CCCBCB] flex flex-col justify-center items-center p-4 md:p-6 lg:px-0 z-10 relative w-full">
        <div className="bg-[#D9D9D9] rounded-3xl p-6 md:py-20 md:px-16 shadow-lg max-w-md w-full">
          <div className="w-full max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-6 md:mb-8">
              Register <br /> <span className="text-[#1E88E5]">Here!</span>
            </h2>
            <form className="space-y-5">
              <div className="border-b-[3px] border-black focus-within:border-[#1E88E5]">
                <input
                  type="text"
                  className="block w-full p-2 text-gray-900 placeholder-gray-500 bg-transparent border-none focus:outline-none focus:ring-0"
                  placeholder="Name"
                />
              </div>
              <div className="border-b-[3px] border-black focus-within:border-[#1E88E5]">
                <input
                  type="text"
                  className="block w-full p-2 text-gray-900 placeholder-gray-500 bg-transparent border-none focus:outline-none focus:ring-0"
                  placeholder="Phone No"
                />
              </div>
              <div className="border-b-[3px] border-black focus-within:border-[#1E88E5]">
                <input
                  type="email"
                  className="block w-full p-2 text-gray-900 placeholder-gray-500 bg-transparent border-none focus:outline-none focus:ring-0"
                  placeholder="Email"
                />
              </div>
              <div className="border-b-[3px] border-black focus-within:border-[#1E88E5]">
                <input
                  type="password"
                  className="block w-full p-2 text-gray-900 placeholder-gray-500 bg-transparent border-none focus:outline-none focus:ring-0"
                  placeholder="Password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#1E88E5] text-white p-3 rounded-xl mt-4 hover:bg-[#1976D2] transition-colors duration-300"
                >
                  Register
                </button>
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={openRolePopup}
                    className="text-[#1E88E5] hover:underline"
                  >
                    Click here
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
