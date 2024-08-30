import React from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import SidebarAdmin from "../components/SidebarAdmin";
import AttendanceChart from "../components/AttendanceChart";
import PermissionChart from "../components/SickChart";
import SickChart from "../components/SickChart";
import HolidayChart from "../components/HolidayChart";
import ServiceChart from "../components/ServiceChart";

const DashboardAdmin: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen drop-shadow-2xl">
      <NavbarAdmin />
      <div className="flex flex-grow bg-white mt-9">
        <SidebarAdmin />
        <div className="flex-grow p-4 bg-[#cfcfcf]">
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
