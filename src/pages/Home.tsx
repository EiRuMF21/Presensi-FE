import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {  
  return (
    
    <div className="flex justify-center min-h-screen bg-indigo-700 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm p-8 space-y-8">
        <h1 className="mt-6 text-2xl text-neutral-100 font-bold text-center">
          Smart Presence
        </h1>
        <div>
          <h2 className="text-center text-4xl text-neutral-100 font-bold ">
            Digital <br /> Platfrom For
          </h2>
          <h2 className="text-center text-4xl text-gray-400 font-bold ">
            All Employee
          </h2>
          <h2 className="text-3xl font-bold text-left text-indigo-700">
            Smart Presence
          </h2>
          <p className="text-left font-inter text-neutral-100">
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
  );
};

export default Home;
