import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundSvg from "/public/image/register.svg";

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
            <h1 className="text-white text-4xl md:text-7xl ml-24 md:-mt-32 font-semibold">
              Welcome
            </h1>
            <p className="text-white text-md mt-4 md:mt-10 ml-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="absolute md:-top-48 md:left-96 ">
            <img
              src="/public/image/97.png"
              alt="illustration"
              className="w-[150px] h-[150px] lg:w-[250px] lg:h-[200px] object-contain"
            />
          </div>
        </div>

        <div
          className="bg-no-repeat absolute inset-0 bg-left-bottom h-full w-full"
          style={{ backgroundImage: `url(${backgroundSvg})` }}
        ></div>
      </div>

      {/* Bagian Kanan Register */}
      <div className="flex-[1] bg-[#CCCBCB] flex flex-col justify-center items-center p-6 lg:px-0 z-10 relative">
        <div className="bg-[#D9D9D9] rounded-3xl p-8 md:py-20 md:px-16 shadow-lg max-w-md w-full gap-y-10">
          <h2 className="text-4xl font-bold text-[#212121] mb-4">
            Register <br /> <span className="text-[#1E88E5]">Here!</span>
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-00 rounded-md shadow-sm focus:outline-none focus:ring-[#1E88E5] focus:border-[#1E88E5]"
                placeholder="Type your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone No
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1E88E5] focus:border-[#1E88E5]"
                placeholder="Type your Phone"
              />
            </div>
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
  );
};

export default Register;
