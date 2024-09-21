import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import NotificationPanel from "../layouts/Notification"; // Sesuaikan path jika perlu

const NavbarAdmin: React.FC = () => {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const navigate = useNavigate();

  const toggleProfileDropdown = () =>
    setProfileDropdownOpen(!isProfileDropdownOpen);
  const toggleNotificationDropdown = () =>
    setNotificationOpen(!isNotificationOpen);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <>
      <nav className="flex items-center justify-between text-black bg-white shadow-lg sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <img
            src="/image/logoSA.png"
            alt="Logo"
            className="w-10"
          />
        </div>

        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/bell.png"
              alt="Notification Icon"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleNotificationDropdown}
            />
            <NotificationPanel isOpen={isNotificationOpen} />
          </div>

          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/user-female-circle.png"
            alt="User Icon"
            className="w-8 h-8 cursor-pointer"
            onClick={toggleProfileDropdown}
          />

          {isProfileDropdownOpen && (
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
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavbarAdmin;
