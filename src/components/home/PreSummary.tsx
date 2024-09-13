import React from "react";

interface SummaryCardProps {
  iconSrc: string;
  label: string;
  daysCount: number;
  large?: boolean;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  iconSrc,
  label,
  daysCount,
  large = false,
}) => (
  <div
    className={`bg-white p-4 rounded-lg shadow-md text-center ${
      large ? "col-span-2" : "col-span-1"
    }`}
  >
    <img
      src={iconSrc}
      alt={`${label} Icon`}
      className="w-10 h-10 mx-auto mb-2"
    />
    <p className="text-sm text-gray-700">{label}</p>
    <p className="text-xl font-bold text-gray-500">{daysCount} Days</p>
  </div>
);

const PresenceSummary: React.FC = () => {
  const summaryItems = [
    {
      iconSrc: "https://img.icons8.com/ios-filled/50/000000/user.png",
      label: "Permission",
      daysCount: 0,
      large: false,
    },
    {
      iconSrc: "https://img.icons8.com/ios-filled/50/000000/bed.png",
      label: "Sick",
      daysCount: 0,
      large: false,
    },
    {
      iconSrc: "https://img.icons8.com/ios-filled/50/000000/home.png",
      label: "Work From Home",
      daysCount: 0,
      large: true,
    },
    {
      iconSrc: "https://img.icons8.com/ios-filled/50/000000/clock.png",
      label: "Office Trip",
      daysCount: 0,
      large: false,
    },
    {
      iconSrc: "https://img.icons8.com/ios-filled/50/000000/calendar.png",
      label: "Duty",
      daysCount: 0,
      large: false,
    },
  ];

  return (
    <div className="w-full mx-auto md:w-1/3">
      <div className="grid grid-cols-2 gap-4">
        {summaryItems.map((item, index) => (
          <SummaryCard
            key={index}
            iconSrc={item.iconSrc}
            label={item.label}
            daysCount={item.daysCount}
            large={item.large}
          />
        ))}
      </div>
    </div>
  );
};

export default PresenceSummary;
