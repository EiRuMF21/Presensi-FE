import React, { useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import SidebarAdmin from "../components/SidebarAdmin";
import AttendanceChart from "../components/charts/AttendanceChart";
import PermissionChart from "../components/charts/PermissionChart";
import SickChart from "../components/charts/SickChart";
import HolidayChart from "../components/charts/HolidayChart";
import ServiceChart from "../components/charts/ServiceChart";

const DashboardAdmin: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:sticky min-h-screen drop-shadow-2xl">
      <NavbarAdmin />

      {/* Hamburger Button for Mobile */}
      <button
        className="md:hidden bg-[#29b6f6] text-white py-2 px-4 rounded m-4"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close Menu" : "Open Menu"}
      </button>

      <div className="flex flex-grow">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block fixed top-0 left-0 md:h-screen md:sticky md:top-0 bg-[#05073C] text-white w-72 p-4  z-50`}
        >
          <SidebarAdmin />
        </div>

        {/* Main Content */}
        <div className="flex-grow p-4 bg-gradient-to-t from-[#A0DEFF] via-[#CAF4FF] to-[#5AB2FF] overflow-y-auto">
          <AttendanceChart />
          <div className="mt-10">
            <PermissionChart />
          </div>
          <div className="mt-10">
            <SickChart />
          </div>
          <div className="mt-10">
            <HolidayChart />
          </div>
          <div className="mt-10">
            <ServiceChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
