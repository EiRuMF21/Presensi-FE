import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AttendancePage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isCheckIn, setIsCheckIn] = useState(true);
  const navigate = useNavigate();

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Determine whether it's check-in or check-out time
  useEffect(() => {
    const currentHour = currentTime.getHours();
    setIsCheckIn(currentHour < 16);
  }, [currentTime]);

  const goToHome = () => {
    navigate("/home");
  };

  const handleAttendance = () => {
    const action = isCheckIn ? "Check-in" : "Check-out";
    console.log(`${action} at:`, currentTime.toLocaleTimeString());
    alert(`${action} successful!`);
    goToHome();
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-black bg-gray-100">
      {/* Navbar */}
      <div className="flex items-center justify-between w-full px-4 py-4 bg-white shadow-md">
        <button onClick={goToHome} className="text-black">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/home.png"
            alt="Home Icon"
          />
        </button>
        <h1 className="text-lg font-bold">
          {isCheckIn ? "CHECK IN" : "CHECK OUT"}
        </h1>
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/bell.png"
          alt="Notification Icon"
          className="text-black"
        />
      </div>

      {/* Content */}
      <div className="w-11/12 max-w-4xl p-6 mt-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
          {isCheckIn ? "Good Morning" : "Good Evening"}
        </h1>
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg md:text-xl lg:text-2xl">
            {currentTime.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-lg font-semibold md:text-xl lg:text-2xl">
            {currentTime.toLocaleTimeString()}
          </p>
        </div>
        <p className="mt-2 text-center text-gray-600">📍 SMKN 4 Bandung</p>

        <div className="flex justify-center mt-6">
          <div className="p-6 bg-gray-100 rounded-lg max-w-md w-full md:max-w-xl lg:max-w-2xl">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/camera.png"
              alt="Camera Icon"
              className="mx-auto"
            />
          </div>
        </div>

        <button
          onClick={handleAttendance}
          className="w-full px-6 py-3 mt-6 font-bold text-white bg-blue-500 rounded-full md:text-lg lg:text-xl"
        >
          {isCheckIn ? "Check In" : "Check Out"}
        </button>
      </div>
    </div>
  );
};

export default AttendancePage;
