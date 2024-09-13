import React, { useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import SidebarAdmin from "../components/SidebarAdmin";
import AttendanceChart from "../components/charts/AttendanceChart";
import Legend from "../components/Legend";

const DashboardAdmin: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <NavbarAdmin />

      <div className="flex flex-1 overflow-hidden bg-gradient-to-t from-[#A0DEFF] via-[#CAF4FF] to-[#5AB2FF]">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-64 flex-shrink-0  border-r border-blue-300 mt-10`}
        >
          <SidebarAdmin />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden bg-[#29b6f6] text-white py-2 px-4 rounded m-4 self-start"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close Menu" : "Open Menu"}
          </button>

          {/* Chart and Legend */}
          <div className="flex-1 overflow-y-auto p-4">
            <AttendanceChart />
            <Legend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
