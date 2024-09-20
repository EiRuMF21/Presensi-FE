import React from "react";

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

interface CalendarControlsProps {
  selectedMonth: number;
  setSelectedMonth: (month: number) => void;
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}

const CalendarControls: React.FC<CalendarControlsProps> = ({
  selectedMonth,
  setSelectedMonth,
  selectedYear,
  setSelectedYear,
}) => {
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(parseInt(e.target.value, 10));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };

  return (
    <div className="flex justify-center mb-4 space-x-4">
      <select
        value={selectedMonth}
        onChange={handleMonthChange}
        className="p-2 border border-gray-300 rounded-md"
      >
        {monthNames.map((month, index) => (
          <option
            key={index}
            value={index}
          >
            {month}
          </option>
        ))}
      </select>

      <select
        value={selectedYear}
        onChange={handleYearChange}
        className="p-2 border border-gray-300 rounded-md"
      >
        {Array.from({length: 121}, (_, i) => 1900 + i).map((year) => (
          <option
            key={year}
            value={year}
          >
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CalendarControls;
