// Legend.tsx
import React from "react";

const Legend: React.FC = () => {
  const items = [
    { color: "bg-blue-500", label: "View All" },
    { color: "bg-green-300", label: "Attendance" },
    { color: "bg-pink-300", label: "Permission" },
    { color: "bg-orange-300", label: "Sick" },
    { color: "bg-blue-300", label: "Holiday" },
    { color: "bg-yellow-300", label: "Office duty" },
    { color: "bg-purple-300", label: "WFH" },
  ];

  return (
    <div className="p-2 text-black bg-white rounded-lg">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex  items-center">
            <div className={`w-4 h-4 ${item.color} rounded-full mr-2`}></div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
