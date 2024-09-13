// CalendarDay.tsx
import React from "react";

interface CalendarDayProps {
  day: number;
  checkInTime: string | null;
  checkOutTime: string | null;
  onClick: () => void;
  isToday: boolean;
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  day,
  checkInTime,
  checkOutTime,
  onClick,
  isToday,
}) => {
  if (day === 0) {
    return <div className="empty-day"></div>; // Hari kosong di grid kalender
  }

  return (
    <div
      className={`calendar-day p-2 rounded cursor-pointer ${
        isToday ? "bg-blue-500 text-white" : "bg-gray-100"
      }`}
      onClick={onClick}
    >
      <p className="text-lg font-bold">{day}</p>
      <p className="text-sm">In: {checkInTime || "N/A"}</p>
      <p className="text-sm">Out: {checkOutTime || "N/A"}</p>
    </div>
  );
};

export default CalendarDay;
