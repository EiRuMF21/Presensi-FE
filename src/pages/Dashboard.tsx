import React, { useState } from "react";
import NavbarAdmin from "../components/admin/NavbarAdmin";
import SidebarAdmin from "../components/admin/SidebarAdmin";
import AttendanceChart from "../components/admin/AttendanceChart";
import Legend from "../components/admin/Legend";

const lineMappings: Record<string, string[]> = {
  "View All": [
    "Attendance",
    "Permission",
    "Sick",
    "Holiday",
    "Office duty",
    "WFH",
  ],
  Attendance: ["Attendance"],
  Permission: ["Permission"],
  Sick: ["Sick"],
  Holiday: ["Holiday"],
  "Office duty": ["Office duty"],
  WFH: ["WFH"],
};

const DashboardAdmin: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visibleLines, setVisibleLines] = useState(lineMappings["View All"]);

  const handleFilterSelect = (label: keyof typeof lineMappings) => {
    setVisibleLines(lineMappings[label]);
  };

  return (
    <div className="flex flex-col h-screen">
      <NavbarAdmin />

      <div className="flex flex-1 overflow-hidden bg-gradient-to-t from-[#A0DEFF] via-[#CAF4FF] to-[#5AB2FF]">
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-64 flex-shrink-0 border-r border-blue-300 mt-10`}
        >
          <SidebarAdmin />
        </div>

        <div className="flex flex-col flex-1 overflow-hidden">
          <button
            className="md:hidden bg-[#29b6f6] text-white py-2 px-4 rounded m-4 self-start"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close Menu" : "Open Menu"}
          </button>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <AttendanceChart visibleLines={visibleLines} toggleLineVisibility={function (label: string): void {
                throw new Error("Function not implemented.");
              } }  />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Legend onFilterSelect={handleFilterSelect} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
