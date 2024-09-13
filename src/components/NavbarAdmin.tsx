import React from "react";
import backgroundLogSvg from "/public/image/Notification.svg";

const NavbarAdmin: React.FC = () => {
  return (
    <div className="w-full bg-white mx-auto px-4 sm:px-6 lg:px-8 drop-shadow-2xl">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center w-[70px]">
          <img src="public/image/logoSA.png" alt="" />
        </div>
        <div
          className="bg-no-repeat absolute inset-0 bg-left-bottom w-"
          style={{ backgroundImage: `url(${backgroundLogSvg})` }}
        />
      </div>  
    </div>
  );
};

export default NavbarAdmin;
