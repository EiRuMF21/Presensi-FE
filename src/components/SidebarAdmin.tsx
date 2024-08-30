import React from "react";

const SidebarAdmin: React.FC = () => {
  return (
    <div className="bg-[#141414] text-white h-screen w-64 p-4">
      <h2 className="text-white font-semibold text-lg mb-4">USER MANAGEMENT</h2>
      <button className="bg-[#29b6f6] text-white py-2 px-4 rounded w-full mb-4">
        User Data
      </button>
      <h2 className="text-white font-semibold text-lg mb-4">SUBMISSION</h2>
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
