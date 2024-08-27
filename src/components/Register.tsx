import React from "react";

const Register: React.FC = () => {
  return (
    <div className="flex w-full min-h-screen">
      {/* Left Side - Welcome Section */}
      <div className="flex-1 bg-[#1E88E5] flex flex-col justify-center p-16">
        <h1 className="text-white text-6xl font-semibold">Welcome'</h1>
        <p className="text-white text-md mt-6 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <svg
          width="385"
          height="288"
          viewBox="0 0 385 288"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <circle cx="66.5" cy="294.5" r="221.5" fill="#D9D9D9" />
          <circle cx="106.5" cy="25.5" r="25.5" fill="#D9D9D9" />
          <circle cx="287.5" cy="129.5" r="25.5" fill="#D9D9D9" />
          <circle cx="185" cy="40" r="11" fill="#D9D9D9" />
          <circle cx="374" cy="155" r="11" fill="#D9D9D9" />
          <circle cx="313" cy="238" r="11" fill="#D9D9D9" />
          <circle cx="280" cy="51" r="11" fill="#D9D9D9" />
        </svg>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex-1 bg-[#CCCBCB] flex flex-col justify-center items-center p-0">
        <div className="bg-[#D9D9D9] rounded-3xl p-16 shadow-lg max-w-md w-full">
          <h2 className="text-4xl max-w-2xl font-bold text-[#212121] mb-4">
            Register <br /> <span className="text-[#1E88E5]">Here!</span>
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1E88E5] focus:border-[#1E88E5]"
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
            <div className="flex justify-end">
              <a href="#" className="text-sm text-[#1E88E5] hover:underline">
                Forgot Password
              </a>
            </div>
            <div>
              <button
                type="button"
                className="w-full bg-[#1E88E5] text-white p-2 rounded-md mt-4"
              >
                Choose File
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#1E88E5] text-white p-2 rounded-md mt-4"
              >
                Register
              </button>
            </div>
            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/" className="text-[#1E88E5] hover:underline">
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
