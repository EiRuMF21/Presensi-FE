import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import NotificationPanel from "./Notification";

const NavbarHome: React.FC = () => {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const navigate = useNavigate(); // Menggunakan useNavigate

  const toggleProfileDropdown = () =>
    setProfileDropdownOpen(!isProfileDropdownOpen);
  const toggleNotificationDropdown = () =>
    setNotificationOpen(!isNotificationOpen);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 text-black bg-white shadow-lg">
      <h1 className="text-lg font-bold tracking-wide">SMART ATTENDANCE</h1>
      <div className="relative flex items-center space-x-4">
        <div className="relative">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/bell.png"
            alt="Notification Icon"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleNotificationDropdown} // Menggunakan fungsi yang benar
          />
          <NotificationPanel isOpen={isNotificationOpen} />
        </div>

        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/user-female-circle.png"
          alt="User Icon"
          className="w-8 h-8 cursor-pointer"
          onClick={toggleProfileDropdown} // Menggunakan fungsi yang benar
        />

        {isProfileDropdownOpen && ( // Menggunakan variabel state yang benar
          <div className="absolute right-0 w-40 py-2 mt-12 text-black bg-white rounded-lg shadow-lg">
            <button
              className="block w-full px-4 py-2 text-left hover:bg-gray-200"
              onClick={handleProfileClick}
            >
              Profile
            </button>
            <button
              className="block w-full px-4 py-2 text-left hover:bg-gray-200"
              onClick={() => {
                navigate("/LandingPage"); // Mengarahkan ke halaman landing page
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarHome;
