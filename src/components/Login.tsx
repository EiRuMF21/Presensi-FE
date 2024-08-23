import React, { useState } from "react";

const Login: React.FC<{ closeRolePopup: () => void }> = ({
  closeRolePopup,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gradient-to-t from-[#121212] to-[#424242] from- rounded-3xl shadow-lg w-full max-w-md p-8">
        <div className="flex justify-between items-center">
          <button
            onClick={closeRolePopup}
            className="text-[#1E88E5] text-2xl font-bold"
          >
            ;
          </button>
          <h2 className="text-[#1E88E5] font-bold text-center text-lg w-full">
            LOG IN
          </h2>
        </div>
        <h2 className="text-3xl font-bold text-left text-[#1E88E5] mt-4">
          Smart Presence
        </h2>
        <p className="text-left font-bold text-neutral-200 mt-2">
          Enter your log in details to <br />
          access your account
        </p>
        <form className="mt-8 space-y-6">
          <div className="rounded-md space-y-4">
            <div>
              <label htmlFor="userid" className="sr-only">
                ID
              </label>
              <div className="relative">
                <input
                  id="userid"
                  name="userid"
                  type="text"
                  autoComplete="userid"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-neutral-900 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Type your ID"
                />
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img
                    src="https://img.icons8.com/ios-filled/24/cccccc/gender-neutral-user.png"
                    alt="User Icon"
                  />
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-neutral-900 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Type your password"
                />
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img
                    src="https://img.icons8.com/ios-filled/24/cccccc/lock.png"
                    alt="Lock Icon"
                  />
                </span>
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <img
                      src="https://img.icons8.com/ios-filled/24/000000/visible.png"
                      alt="Hide Password Icon"
                    />
                  ) : (
                    <img
                      src="https://img.icons8.com/ios-filled/24/000000/invisible.png"
                      alt="Show Password Icon"
                    />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center text-sm">
            <a
              href="#"
              className="text-[#1E88E5] hover:text-indigo-500 font-bold"
            >
              Forgot password?
            </a>
            <a
              href="#"
              className="text-[#1E88E5] hover:text-indigo-500 font-bold"
            >
              Register
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1E88E5] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
