import React from "react";

const NavbarAdmin: React.FC = () => {
  return (
    <div className="w-full bg-white mx-auto px-4 sm:px-6 lg:px-8 drop-shadow-2xl">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <a className="text-lg font-bold tracking-widest text-[#212121] font-sans">
            ADMIN SMART ATTENDANCE
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
