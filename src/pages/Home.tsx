import React, { useState, useEffect, useRef } from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-700 px-6 sm:px-6 lg:px-8">
      {/* Bagian atas */}
      <div className="p-8">
        <h1 className="text-2xl text-neutral-100 font-bold text-center">
          Smart Presence
        </h1>
      </div>

      {/* Bagian tengah */}
      <div className="flex-grow flex flex-col justify-center">
        <div className="w-full max-w-sm p-8 space-y-8">
          <div>
            <h2 className="text-center text-4xl text-neutral-100 font-bold">
              Digital <br /> Platform For
            </h2>
            <h2 className="text-center text-4xl text-gray-400 font-bold">
              All Employee
            </h2>
            <br />
            <p className="text-center font-inter text-neutral-100">
              Web Presensi yang praktis dan akurat, memudahkan pencatatan
              kehadiran secara real-time dengan fitur rekap otomatis dan
              notifikasi. Solusi presensi digital yang aman untuk meningkatkan
              efisiensi organisasi Anda.
            </p>
          </div>
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
    </div>
  );
};

export default Home;
