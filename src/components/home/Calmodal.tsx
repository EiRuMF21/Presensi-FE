import React from "react";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDay: number | null;
  checkInTime: string | null;
  checkOutTime: string | null;
  description?: string;
}

const currentDate = new Date();

const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
  selectedDay,
  checkInTime,
  checkOutTime,
  description,
}) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (!isOpen || !selectedDay) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <button
          onClick={onClose}
          className="text-black"
        >
          X
        </button>
        <h2 className="text-lg text-black font-semibold text-center mt-4 mb-6">
          {selectedDay} {monthNames[currentDate.getMonth()]}{" "}
          {currentDate.getFullYear()}
        </h2>
        <div className="text-left text-black">
          <div className="flex items-center mb-2">
            <span>📍 Buah Batu</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-green-500">In:</span>
            <span>{checkInTime || "Not available"}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-red-500">Out:</span>
            <span>{checkOutTime || "Not available"}</span>
          </div>
          {description && (
            <div className="flex items-center justify-between">
              <span>Description:</span>
              <span>{description}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
