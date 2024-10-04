import React from "react";
import { ChevronLeft, Calendar } from "lucide-react";

interface CalendarModalProps {
  isOpen: boolean;
  date: string;
  location?: string;
  checkInTime?: string | null;
  checkOutTime?: string | null;
  permission?: string;
  description?: string;
  status?: "sick" | "on leave" | "duty" | "WFH";
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  date,
  location,
  checkInTime,
  checkOutTime,
  permission,
  description,
  status,
  onClose,
}) => {
  if (!isOpen) return null;

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "sick":
        return "bg-red-500";
      case "on leave":
        return "bg-yellow-500";
      case "duty":
        return "bg-blue-500";
      case "WFH":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <button onClick={onClose} className="text-gray-600">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-lg font-semibold">{date}</h2>
          <button className="text-gray-600">
            <Calendar size={24} />
          </button>
        </div>
        <div className="p-4">
          {location && (
            <div className="flex items-center mb-2 text-gray-600">
              <span className="mr-2">📍</span>
              <span>{location}</span>
            </div>
          )}
          {checkInTime && (
            <div className="flex items-center mb-2">
              <span className="w-1 h-4 mr-2 bg-green-500 rounded-full"></span>
              <span className="font-semibold">In {checkInTime}</span>
            </div>
          )}
          {checkOutTime && (
            <div className="flex items-center mb-2">
              <span className="w-1 h-4 mr-2 bg-red-500 rounded-full"></span>
              <span className="font-semibold">Out {checkOutTime}</span>
            </div>
          )}
          {permission && (
            <div className="flex items-center mb-2">
              <span className="w-1 h-4 mr-2 bg-yellow-500 rounded-full"></span>
              <span className="font-semibold">{permission}</span>
            </div>
          )}
          {description && (
            <div className="flex items-center mb-2">
              <span className="w-1 h-4 mr-2 bg-green-500 rounded-full"></span>
              <span className="text-gray-600">{description}</span>
            </div>
          )}
          {status && (
            <div className="flex items-center mb-2">
              <span
                className={`w-1 h-4 mr-2 ${getStatusColor(
                  status
                )} rounded-full`}
              ></span>
              <span className="font-semibold capitalize">{status}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
