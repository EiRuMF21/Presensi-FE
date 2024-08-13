import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-6 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-left">
          <a href="/" className="text-indigo-600 text-xl font-bold">
            &#8592;
          </a>
        </div>
        <h2 className="text-center text-indigo-600 font-bold text-sm">
          LOG IN
        </h2>
        <h2 className="text-3xl font-bold text-left text-indigo-700">
          Smart Presence
        </h2>
        <p className="text-left font-bold text-neutral-700">
          Enter your log in details to <br></br>
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-neutral-900 bg-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-neutral-900 bg-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-indigo-600 text-xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-indigo-600 text-xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-indigo-600 text-xl">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
