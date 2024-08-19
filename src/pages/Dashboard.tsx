import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <div className="text-lg font-bold">Smart Presence</div>
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="text-gray-600">
            <img
              src="/path/to/user-image.png" // Replace with user image path
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 md:flex md:space-x-4">
        {/* Mobile View */}
        <div className="md:hidden">
          <div className="bg-blue-500 text-white p-4 rounded-md mb-4">
            <h1 className="text-xl">Selamat Datang! Username</h1>
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="bg-cyan-500 text-white p-4 rounded-md flex-1">
              <p>Absen Masuk</p>
              <p>07:00:00</p>
            </div>
            <div className="bg-blue-600 text-white p-4 rounded-md flex-1">
              <p>Face Scan</p>
            </div>
          </div>
          <div className="bg-gray-600 text-white p-4 rounded-md mb-4">
            <p>Absen Keluar</p>
            <p>15:30:31</p>
          </div>
          <div className="flex space-x-4 mb-4">
            <Link
              to="/history"
              className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center"
            >
              History
            </Link>
            <Link
              to="/cuti"
              className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center"
            >
              Cuti
            </Link>
            <Link
              to="/profile"
              className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center"
            >
              Profile
            </Link>
          </div>
          <div className="bg-white p-4 rounded-md mb-4 shadow">
            <h2 className="text-blue-500">Absensi Bulan Agustus</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-blue-100 p-4 rounded-md text-center">
                <p className="text-lg font-bold">Hadir</p>
                <p>28 hari</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-md text-center">
                <p className="text-lg font-bold">Terlambat</p>
                <p>5 hari</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-md text-center">
                <p className="text-lg font-bold">Izin</p>
                <p>1 hari</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-md text-center">
                <p className="text-lg font-bold">Sakit</p>
                <p>3 hari</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block w-full">
          <div className="flex space-x-4">
            <div className="w-1/4 bg-white p-4 shadow rounded-md">
              <ul>
                <li className="mb-4">
                  <Link to="/dashboard" className="flex items-center space-x-2">
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/profile" className="flex items-center space-x-2">
                    <span>Profile</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/grades" className="flex items-center space-x-2">
                    <span>Grades</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/messages" className="flex items-center space-x-2">
                    <span>Messages</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/preferences"
                    className="flex items-center space-x-2"
                  >
                    <span>Preferences</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/logout" className="flex items-center space-x-2">
                    <span>Log out</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-3/4">
              <div className="bg-white p-4 shadow rounded-md mb-4">
                <h1 className="text-xl">FAISAL MAULUD FAJRI</h1>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500 text-white p-4 rounded-md">
                  <h2>Komunikasi</h2>
                  <p>Pesan</p>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-md">
                  <h2>Profil Anda</h2>
                  <p>Profil</p>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-md">
                  <h2>Preferensi</h2>
                  <p>Pengaturan</p>
                </div>
                <div className="bg-yellow-500 text-white p-4 rounded-md">
                  <h2>Performa</h2>
                  <p>Nilai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
