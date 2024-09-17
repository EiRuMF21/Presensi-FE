import React from "react";
import {useNavigate} from "react-router-dom";
import backgroundSvg from "/public/image/register.svg";
import backgroundLogSvg from "/public/image/log.svg";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const openRolePopup = () => {
    navigate("/", {state: {openRolePopup: true}});
  };

  return (
    <div className="flex w-full min-h-screen">
      {/* Bagian Kiri Welcome Section */}
      <div className="flex-[1.7] bg-[#1E88E5] flex flex-col justify-center p-6 md:py-10 relative">
        <div className="relative flex flex-col items-center lg:flex-row lg:items-start">
          <div className="flex flex-col -ml-8 md:max-w-3xl">
            <h1 className="ml-24 text-4xl font-semibold text-white md:text-8xl md:-mt-32">
              Welcome
            </h1>
            <p className="mt-4 ml-24 text-white text-md md:mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="absolute md:-top-52 md:right-52 ">
            <div
              style={{backgroundImage: `url(${backgroundLogSvg})`}}
              className="w-[100px] h-[100px] lg:w-[250px] lg:h-[200px] object-contain"
            >
              {" "}
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full bg-left-bottom bg-no-repeat"
          style={{backgroundImage: `url(${backgroundSvg})`}}
        ></div>
      </div>

      {/* Bagian Kanan Register */}
      <div className="flex-[1] bg-[#CCCBCB] flex flex-col justify-center items-center p-6 lg:px-0 z-10 relative">
        <div className="bg-[#D9D9D9] rounded-3xl p-8 md:py-20 md:px-16 shadow-lg max-w-md w-full gap-y-10">
          <h2 className="text-6xl font-bold text-[#212121] mb-4">
            Login <br /> <span className="text-[#1E88E5]">Here!</span>
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1E88E5] focus:border-[#1E88E5]"
                placeholder="Type your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1E88E5] focus:border-[#1E88E5]"
                placeholder="Type your Password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#1E88E5] text-white p-2 rounded-xl mt-2"
              >
                Login
              </button>
            </div>
            <div className="mt-4 text-center"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;