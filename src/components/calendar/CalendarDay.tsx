import React from "react";

interface CalendarDayProps {
  day: number;
  checkInTime: string | null;
  checkOutTime: string | null;
  status: "present" | "permission" | "duty" | "sick" | null;
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
  status,
  onClick,
  isToday,
  onHover,
  onLeave,
  hovered,
}) => {
  if (day === 0) {
    return <div className="empty-day"></div>;
  }

  const getStatusColor = (
    status: "present" | "permission" | "duty" | "sick" | null
  ) => {
    switch (status) {
      case "permission":
        return "bg-yellow-300";
      case "duty":
        return "bg-blue-300";
      case "sick":
        return "bg-red-300";
      case "present":
        return "bg-green-300";
      default:
        return "";
    }
  };

  return (
    <div
      className={`calendar-day flex flex-col items-center justify-center h-24 rounded ${
        isToday ? "bg-slate-400 text-white" : "bg-gray-100"
      } ${hovered ? "shadow-lg" : ""}`}
      onClick={onClick}
      onMouseEnter={() => onHover(day)}
      onMouseLeave={onLeave}
    >
      <p className="text-md -ml-20 text-black bg-[#D9D9D9] px-2 rounded-full font-bold">
        {day}
      </p>

      <div className="mt-2 text-xs w-full px-1">
        {status ? (
          <p
            className={`${getStatusColor(
              status
            )} px-2 py-1 rounded-xl mb-1 text-center`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </p>
        ) : (
          <>
            <p className="bg-[#4CAF50] px-2 py-1 h-5 rounded-xl mb-1 text-center text-xs">
              In: {checkInTime || "-"}
            </p>
            <p className="bg-[#FF6F61] px-2 py-1 h-5 rounded-xl text-center text-xs">
              Out: {checkOutTime || "-"}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;
