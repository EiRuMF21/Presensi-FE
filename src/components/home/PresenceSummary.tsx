import React from "react";

interface SummaryCardProps {
  label: string;
  icon: string;
  days: string;
  color: string;
  large?: boolean;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  label,
  icon,
  days,
  color,
  large = false,
}) => {
  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-md text-center ${
        large ? "col-span-2" : "col-span-1"
      }`}
      style={{borderLeft: `8px solid ${color}`}}
    >
      {/* Dot in the corner */}
      <span
        className="absolute w-3 h-3 rounded-full top-2 right-2"
        style={{backgroundColor: color}}
      ></span>

      {/* Icon and Text */}
      <div className="flex items-center">
        <img
          src={icon}
          alt={label}
          className="w-10 h-10 mx-auto"
        />

        {/* Label and Days */}
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-lg font-bold text-gray-900">{days}</p>
        </div>
      </div>
    </div>
  );
};

const PresenceSummary: React.FC = () => {
  const summaries = [
    {
      label: "Permission",
      icon: "https://img.icons8.com/ios-filled/50/000000/user.png",
      days: "0 Days",
      color: "#F97316",
      large: false,
    },
    {
      label: "Sick",
      icon: "https://img.icons8.com/ios-filled/50/000000/bed.png",
      days: "0 Days",
      color: "#EF4444",
      large: false,
    },
    {
      label: "Work From Home",
      icon: "https://img.icons8.com/ios-filled/50/000000/home.png",
      days: "0 Days",
      color: "#3B82F6",
      large: true,
    },
    {
      label: "Office Trip",
      icon: "https://img.icons8.com/ios-filled/50/000000/clock.png",
      days: "0 Days",
      color: "#0EA5E9",
      large: false,
    },
    {
      label: "Duty",
      icon: "https://img.icons8.com/ios-filled/50/000000/calendar.png",
      days: "0 Days",
      color: "#6B7280",
      large: false,
    },
  ];

  return (
    <div className="flex items-center justify-center md:w-3/6">
      <div className="w-full md:w-3/6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {summaries.map((summary, index) => (
            <SummaryCard
              key={index}
              label={summary.label}
              icon={summary.icon}
              days={summary.days}
              color={summary.color}
              large={summary.large}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PresenceSummary;
