// CalendarDay.tsx
import React from "react";

interface CalendarDayProps {
  day: number;
  checkInTime: string | null;
  checkOutTime: string | null;
  onClick: () => void;
  isToday: boolean;
  onHover: (day: number) => void;
  onLeave: () => void;
  hovered: boolean;
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  day,
  checkInTime,
  checkOutTime,
  onClick,
  isToday,
  onHover,
  onLeave,
  hovered,
}) => {
  if (day === 0) {
    return <div className="empty-day"></div>;
  }

  return (
    <div
      className={`calendar-day flex flex-col items-center justify-center h-20 rounded cursor-pointer transition-all ${
        isToday ? "bg-blue-500 text-white" : "bg-gray-100"
      }`}
      onClick={onClick}
      onMouseEnter={() => onHover(day)}
      onMouseLeave={onLeave}
    >
      <p className="text-lg font-bold">{day}</p>

      {/* Tampilkan in dan out hanya saat di hover */}
      {hovered && (
        <div className="mt-2 text-sm">
          <p>In: {checkInTime || "N/A"}</p>
          <p>Out: {checkOutTime || "N/A"}</p>
        </div>
      )}
    </div>
  );
};

export default CalendarDay;
