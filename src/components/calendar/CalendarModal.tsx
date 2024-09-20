// CalendarModal.tsx
import React from "react";

interface CalendarModalProps {
  isOpen: boolean;
  selectedDay: number;
  checkInTime: string | null;
  checkOutTime: string | null;
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  selectedDay,
  checkInTime,
  checkOutTime,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full text-black bg-black bg-opacity-50 modal">
      <div className="p-6 bg-white rounded shadow-lg modal-content">
        <h2 className="mb-4 text-xl font-bold">
          Details for Day {selectedDay}
        </h2>
        <p>In: {checkInTime || "N/A"}</p>
        <p>Out: {checkOutTime || "N/A"}</p>
        <button
          onClick={onClose}
          className="p-2 mt-4 text-white bg-red-500 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CalendarModal;
