import React from "react";

type LegendProps = {
  onFilterSelect: (label: string) => void; // Pastikan ini sesuai
};

const Legend: React.FC<LegendProps> = ({ onFilterSelect }) => {
  const labels = [
    "View All",
    "Attendance",
    "Permission",
    "Sick",
    "Holiday",
    "Office duty",
    "WFH",
  ];

  return (
    <div className="flex space-x-4">
      {labels.map((label) => (
        <button
          key={label}
          onClick={() => onFilterSelect(label)}
          className="text-blue-500 hover:underline"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Legend;
