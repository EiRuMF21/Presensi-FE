// SidebarAdmin.tsx
import React, {useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";

const SidebarAdmin: React.FC = () => {
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(true);

  return (
    <div className="h-full bg-white shadow-md">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-black">SMART ATTENDANCE ADMIN</h1>
      </div>
      <nav className="mt-2">
        <button
          className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-100"
          onClick={() => setIsUserManagementOpen(!isUserManagementOpen)}
        >
          <span className="font-semibold text-black">USER MANAGEMENT</span>
          {isUserManagementOpen ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {isUserManagementOpen && (
          <div className="ml-4">
            <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
              <a
                className="text-black"
                href="/manageuser"
              >
                Manage User
              </a>
            </button>
            <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
              <a
                className="text-black"
                href="/userdata"
              >
                User Data
              </a>
            </button>
            <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
              <a
                className="text-black"
                href="/facedata"
              >
                Face Data
              </a>
            </button>
          </div>
        )}
        <button className="w-full px-4 py-2 font-semibold text-left hover:bg-gray-100">
          <a
            className="text-black"
            href="/allsubmission"
          >
            SUBMISSION
          </a>
        </button>
        <button className="w-full px-4 py-2 font-semibold text-left hover:bg-gray-100">
          <a
            className="text-black"
            href="/recap"
          >
            RECAP
          </a>
        </button>
      </nav>
    </div>
  );
};

export default SidebarAdmin;
