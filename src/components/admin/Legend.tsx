import React, { useState } from "react";
import { Eye } from "lucide-react";

type LegendProps = {
  onFilterSelect: (label: string) => void;
};

const Legend: React.FC<LegendProps> = ({ onFilterSelect }) => {
  const labels = [
    { name: "View All", color: "Eye" },
    { name: "Attendance", color: "bg-green-200" },
    { name: "Permission", color: "bg-pink-200" },
    { name: "Sick", color: "bg-orange-200" },
    { name: "On Leave", color: "bg-sky-200" },
    { name: "Office Duty", color: "bg-[#FF0A0A]" },
    { name: "WFH", color: "bg-purple-200" },
  ];

  const [activeLabel, setActiveLabel] = useState("View All");

  const handleClick = (label: string) => {
    setActiveLabel(label);
    onFilterSelect(label);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-between">
      {labels.map(({ name, color }) => (
        <button
          key={name}
          onClick={() => handleClick(name)}
          className={`px-3 py-1 rounded-full transition-colors duration-200 text-sm flex items-center justify-center ${
            activeLabel === name
              ? "bg-black text-white"
              : `text-black hover:bg-opacity-80`
          } ${name === "View All" ? "border-2 border-black " : ""}`}
        >
          {name === "View All" ? (
            <Eye className="w-5 h-5 mr-2" />
          ) : (
            <span className={`w-5 h-5 mr-2 ${color}`}></span>
          )}
          {name}
        </button>
      ))}
    </div>
  );
};

export default Legend;
