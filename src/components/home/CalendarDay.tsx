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
  return (
    <div
      className={`relative cursor-pointer p-4 rounded-lg flex flex-col justify-between items-center text-center ${
        isToday ? "bg-slate-400 text-white" : "bg-white"
      } hover:bg-blue-50 shadow-lg border border-gray-200`}
      onClick={onClick}
      style={{minHeight: "100px"}} // Add consistent height to all days
    >
      {day > 0 ? (
        <>
          <span className="text-lg font-bold">{day}</span>
          <div className="flex flex-col mt-2 space-y-1">
            {checkInTime && (
              <div className="px-2 py-1 text-sm text-white bg-green-500 rounded-full">
                In {checkInTime}
              </div>
            )}
            {checkOutTime && (
              <div className="px-2 py-1 text-sm text-white bg-red-500 rounded-full">
                Out {checkOutTime}
              </div>
            )}
          </div>
        </>
      ) : (
        <span className="text-gray-300">{day}</span>
      )}
    </div>
  );
};

export default CalendarDay;
