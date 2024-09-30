import React from "react";
import Notif from "/public/image/bell.svg";

const NavbarAdmin: React.FC = () => {
  return (
    <div className="w-full bg-white mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <img src="/public/image/logoSA.png" alt="" className="w-[75px]" />
          <img src={Notif} alt="notif" className="absolute right-24 w-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
