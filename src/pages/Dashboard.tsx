import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 to-purple-700 p-4">
      <div className="flex items-center justify-between p-4">
        <button className="text-white text-3xl">&#9776;</button>
        <div className="text-white text-center">
          <h1 className="text-xl font-bold">Smart Presence</h1>
        </div>
        <div className="w-8"></div>
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
          <img src="https://via.placeholder.com/150" alt="User Avatar" />
        </div>
        <h2 className="text-white mt-4 text-lg font-bold">Username</h2>
        <p className="text-white">KETUA of Smart Presence</p>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-indigo-600 font-bold text-lg">
          Hallo Username!! Selamat Bekerja
        </p>
        <div className="flex justify-between mt-6">
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-bold w-32">
            MASUK
          </button>
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-bold w-32">
            KELUAR
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <div className="bg-gray-200 p-3 rounded-full">
            <i className="text-indigo-600 text-xl">&#128340;</i>
          </div>
          <div className="ml-4">
            <h3 className="text-neutral-800 font-bold">History</h3>
            <p className="text-neutral-500">
              Summary data for each of your attendance
            </p>
          </div>
        </div>

        <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <div className="bg-gray-200 p-3 rounded-full">
            <i className="text-indigo-600 text-xl">&#128276;</i>
          </div>
          <div className="ml-4">
            <h3 className="text-neutral-800 font-bold">Notification</h3>
            <p className="text-neutral-500">
              Summary data for each of your attendance
            </p>
          </div>
        </div>

        <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <div className="bg-gray-200 p-3 rounded-full">
            <i className="text-indigo-600 text-xl">&#128172;</i>
          </div>
          <div className="ml-4">
            <h3 className="text-neutral-800 font-bold">Message</h3>
            <p className="text-neutral-500">
              Summary data for each of your attendance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
