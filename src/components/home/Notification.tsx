import React from "react";

interface NotificationPanelProps {
  isOpen: boolean;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({isOpen}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-72 bg-gray-800 text-white rounded-lg shadow-lg p-4 z-10">
      <h3 className="font-bold text-lg mb-2">Notifikasi</h3>
      <div className="space-y-2">
        <div className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
          <div>
            <p className="text-sm">
              Your password has been successfully changed.
            </p>
            <span className="text-xs text-gray-400">
              AUG 1, 2024 AT 10:15 AM
            </span>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
          <div>
            <p className="text-sm">Thank you for applying for leave.</p>
            <span className="text-xs text-gray-400">
              AUG 1, 2024 AT 10:15 AM
            </span>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
          <div>
            <p className="text-sm">Thank you for applying for permission.</p>
            <span className="text-xs text-gray-400">
              AUG 1, 2024 AT 10:15 AM
            </span>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
          <div>
            <p className="text-sm">Thank you for applying for sick leave.</p>
            <span className="text-xs text-gray-400">
              AUG 1, 2024 AT 10:15 AM
            </span>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="block mt-4 text-sm text-blue-400 text-center"
      >
        view all notifikasi
      </a>
    </div>
  );
};

export default NotificationPanel;
