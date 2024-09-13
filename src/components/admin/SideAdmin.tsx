import React from "react";

const SidebarAdmin: React.FC = () => {
  return (
    <div className="bg-[#05073C] text-white h-screen w-64 p-4 rounded-2xl">
      <h2 className="mb-4 text-lg font-semibold text-white">USER MANAGEMENT</h2>
      <button className="bg-[#29b6f6] text-white py-2 px-4 rounded w-full mb-4">
        User Data
      </button>
      <h2 className="mb-4 text-lg font-semibold text-white">SUBMISSION</h2>
      <button className="bg-[#29b6f6] text-white py-2 px-4 rounded w-full mb-2">
        Permission
      </button>
      <button className="bg-[#29b6f6] text-white py-2 px-4 rounded w-full mb-2">
        Sick
      </button>
      <button className="bg-[#29b6f6] text-white py-2 px-4 rounded w-full mb-2">
        Holiday
      </button>
      <button className="bg-[#29b6f6] text-white py-2 px-4 rounded w-full mb-2">
        Office Duty
      </button>
      <button className="bg-[#29b6f6] text-white py-2 px-4 rounded w-full">
        Recap
      </button>
    </div>
  );
};

export default SidebarAdmin;
