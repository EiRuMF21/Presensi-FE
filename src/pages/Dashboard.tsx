import React, {useState} from "react";
import NavbarAdmin from "../components/admin/NavbarAdmin";
import SidebarAdmin from "../components/admin/SidebarAdmin";
import AttendanceChart from "../components/admin/AttendanceChart";
import Legend from "../components/admin/Legend";

// Pemetaan label untuk garis di grafik
const lineMappings: Record<string, string[]> = {
  "View All": [
    "Attendance",
    "Permission",
    "Sick",
    "On Leave",
    "Office Duty",
    "WFH",
  ],
  Attendance: ["Attendance"],
  Permission: ["Permission"],
  Sick: ["Sick"],
  "On Leave": ["On Leave"],
  "Office Duty": ["Office Duty"],
  WFH: ["WFH"],
};

const DashboardAdmin: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visibleLines, setVisibleLines] = useState(lineMappings["View All"]);

  const handleFilterSelect = (label: keyof typeof lineMappings) => {
    // Mengatur visibleLines berdasarkan label yang dipilih
    setVisibleLines(lineMappings[label]);
  };

  const toggleLineVisibility = (label: string) => {
    // Jika label sudah ada di visibleLines, hilangkan garisnya
    if (visibleLines.includes(label)) {
      setVisibleLines(visibleLines.filter((line) => line !== label));
    } else {
      // Jika label belum ada, tambahkan garisnya
      setVisibleLines([...visibleLines, label]);
    }
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
            <div className="p-4 mb-4 bg-white rounded-lg shadow-md">
              <AttendanceChart
                visibleLines={visibleLines}
                toggleLineVisibility={toggleLineVisibility}
              />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <Legend onFilterSelect={handleFilterSelect} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
