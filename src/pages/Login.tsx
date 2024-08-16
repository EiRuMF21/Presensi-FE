import React, { useState } from "react";

const Login: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const handleChoiceClick = () => {
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center min-h-screen bg-transparent px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-6 space-y-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-xl font-bold text-indigo-600 mb-6">LOG IN</h2>
            <div
              className="choice-btn bg-indigo-600 text-white py-4 rounded-lg mb-4 cursor-pointer"
              onClick={handleChoiceClick}
            >
              <p>ADMIN</p>
            </div>
            <div
              className="choice-btn bg-indigo-600 text-white py-4 rounded-lg cursor-pointer"
              onClick={handleChoiceClick}
            >
              <p>USER</p>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="text-left">
              <button
                onClick={handleCloseModal}
                className="text-indigo-600 text-xl font-bold"
              >
                &#8592;
              </button>
            </div>
            <h2 className="text-center text-indigo-600 font-bold text-sm">
              LOG IN
            </h2>
            <h2 className="text-3xl font-bold text-left text-indigo-700">
              Smart Presence
            </h2>
            <p className="text-left font-bold text-neutral-700">
              Enter your log in details to <br />
              access your account
            </p>
            <form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-neutral-900 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Type your username"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-neutral-900 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Type your password"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div></div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-neutral-500 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-full group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
