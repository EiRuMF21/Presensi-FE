import React from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import SidebarAdmin from "../components/SidebarAdmin";

const DashboardAdmin: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarAdmin />
      <div className="flex flex-grow bg-white">
        <SidebarAdmin />
        <div className="flex-grow p-4 bg-[#cfcfcf]">
          {/* Your main content goes here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
