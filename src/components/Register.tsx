import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundSvg from "/public/image/register.svg";
import backgroundLogSvg from "/public/image/log.svg";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const openRolePopup = () => {
    navigate("/", { state: { openRolePopup: true } });
  };

  return (
    <div className="flex w-full min-h-screen">
      {/* Bagian Kiri Welcome Section */}
      <div className="flex-[1.7] bg-[#1E88E5] flex flex-col justify-center p-6 md:py-10 relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start relative">
          <div className="flex flex-col -ml-8 md:max-w-3xl">
            <h1 className="text-white text-4xl md:text-8xl ml-24 md:-mt-32 font-semibold">
              Welcome
            </h1>
            <p className="text-white text-md mt-4 md:mt-5 ml-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="absolute md:-top-52 md:right-52">
            <div
              className="bg-no-repeat absolute inset-0 bg-left-bottom h-full w-full"
              style={{ backgroundImage: `url(${backgroundSvg})` }}
            />
          </div>
        </div>

        <div
          className="bg-no-repeat absolute inset-0 bg-left-bottom h-full w-full"
          style={{ backgroundImage: `url(${backgroundSvg})` }}
        />
      </div>

      {/* Bagian Kanan Register */}
      <div className="flex-[1] bg-[#CCCBCB] flex flex-col justify-center items-center p-6 lg:px-0 z-10 relative">
        <div className="bg-[#D9D9D9] rounded-3xl p-8 md:py-20 md:px-16 shadow-lg max-w-md w-full gap-y-10">
          <div className="max-w-md w-full">
            <h2 className="text-4xl font-bold text-[#212121] mb-8">
              Register <br /> <span className="text-[#1E88E5]">Here!</span>
            </h2>
            <form className="space-y-6">
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
              <div className="text-center mt-4">
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
