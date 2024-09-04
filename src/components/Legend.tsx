import React from "react";

const Legend: React.FC = () => {
  const legendItems = [
    { label: "Attendance", color: "#8884d8" },
    { label: "Permission", color: "#82ca9d" },
    { label: "Sick", color: "#ffc658" },
    { label: "Holiday", color: "#ff7300" },
    { label: "Office Duty", color: "#0088FE" },
    { label: "WFH", color: "#00C49F" },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white rounded-lg shadow-md mt-4">
      {legendItems.map((item, index) => (
        <div key={index} className="flex items-center">
          <div
            className="w-4 h-4 mr-2"
            style={{ backgroundColor: item.color }}
          ></div>
          <span className="text-black font-semibold">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
