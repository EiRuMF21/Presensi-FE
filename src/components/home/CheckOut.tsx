import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const CheckOutPage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update time every second

    return () => clearInterval(interval);
  }, []);

  const handleCheckOut = () => {
    console.log("Checked Out at:", currentTime.toLocaleTimeString());
    navigate("/");
  };

  return (
    <div className="bg-gray-100 text-black min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <div className="bg-white w-full py-4 flex items-center justify-between px-4 shadow-md">
        <button
          onClick={() => navigate(-1)}
          className="text-black"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/back.png"
            alt="Back Icon"
          />
        </button>
        <h1 className="text-lg font-bold">CHECK OUT</h1>
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/bell.png"
          alt="Notification Icon"
          className="text-black"
        />
      </div>

      {/* Content */}
      <div className="bg-white mt-6 p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
        <h1 className="text-2xl font-semibold text-center">
          Thank you for completing your work
        </h1>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-lg">
            {currentTime.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-lg font-semibold">
            {currentTime.toLocaleTimeString()}
          </p>
        </div>
        <p className="text-center mt-2 text-gray-600">📍 SMKN 4 Bandung</p>

        <div className="flex justify-center mt-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/camera.png"
              alt="Camera Icon"
              className="mx-auto"
            />
          </div>
        </div>

        <button
          onClick={handleCheckOut}
          className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full mt-6 w-full"
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CheckOutPage;
