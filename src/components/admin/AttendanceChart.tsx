import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type DataPoint = {
  name: string;
  line1: number;
  line2: number;
  line3: number;
  line4: number;
  line5: number;
  line6: number;
};

const monthlyData = [
  {
    name: "June",
    line1: 100,
    line2: 10,
    line3: 30,
    line4: 20,
    line5: 10,
    line6: 5,
  },
  {
    name: "July",
    line1: 80,
    line2: 20,
    line3: 50,
    line4: 30,
    line5: 75,
    line6: 10,
  },
  {
    name: "August",
    line1: 50,
    line2: 70,
    line3: 30,
    line4: 20,
    line5: 10,
    line6: 5,
  },
  {
    name: "September",
    line1: 80,
    line2: 20,
    line3: 50,
    line4: 30,
    line5: 15,
    line6: 10,
  },
];

const weeklyData = [
  {
    name: "Week 1",
    line1: 100,
    line2: 10,
    line3: 30,
    line4: 20,
    line5: 10,
    line6: 5,
  },
  {
    name: "Week 2",
    line1: 10,
    line2: 60,
    line3: 45,
    line4: 30,
    line5: 20,
    line6: 15,
  },
  {
    name: "Week 3",
    line1: 100,
    line2: 10,
    line3: 30,
    line4: 20,
    line5: 10,
    line6: 5,
  },
  {
    name: "Week 4",
    line1: 10,
    line2: 60,
    line3: 45,
    line4: 30,
    line5: 20,
    line6: 15,
  },
];

const dailyData = [
  {
    name: "Day 1",
    line1: 10,
    line2: 85,
    line3: 15,
    line4: 10,
    line5: 5,
    line6: 2,
  },
  {
    name: "Day 2",
    line1: 40,
    line2: 78,
    line3: 25,
    line4: 15,
    line5: 8,
    line6: 3,
  },
  {
    name: "Day 3",
    line1: 10,
    line2: 5,
    line3: 15,
    line4: 10,
    line5: 40,
    line6: 2,
  },
  {
    name: "Day 4",
    line1: 40,
    line2: 10,
    line3: 25,
    line4: 15,
    line5: 8,
    line6: 3,
  },
  {
    name: "Day 5",
    line1: 10,
    line2: 5,
    line3: 15,
    line4: 10,
    line5: 5,
    line6: 2,
  },
  {
    name: "Day 6",
    line1: 100,
    line2: 10,
    line3: 55,
    line4: 15,
    line5: 8,
    line6: 3,
  },
];

const colors = [
  "#6100FF",
  "#97E0FF",
  "#9FFFC6",
  "#FDFF92",
  "#FF9900",
  "#FF9AEF",
];

const lineMappings = {
  "View All": ["line1", "line2", "line3", "line4", "line5", "line6"],
  Attendance: ["line1"],
  Permission: ["line2"],
  Sick: ["line3"],
  Holiday: ["line4"],
  "Office duty": ["line5"],
  WFH: ["line6"],
};

const AttendanceChart: React.FC = () => {
  const [mode, setMode] = useState("weekly");
  const [visibleLines, setVisibleLines] = useState(lineMappings["View All"]);

  const getData = () => {
    switch (mode) {
      case "monthly":
        return monthlyData;
      case "daily":
        return dailyData;
      case "weekly":
      default:
        return weeklyData;
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg flex flex-col">
      <div className="flex justify-end mb-4">
        <select
          className="border-b-2 border-black bg-transparent text-black text-lg font-semibold focus:outline-none focus:border-[#020617] cursor-pointer"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="daily">Day</option>
          <option value="weekly">Week</option>
          <option value="monthly">Month</option>
        </select>
      </div>

      <div className="flex-grow">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={getData()}>
            <defs>
              {colors.map((color, index) => (
                <linearGradient
                  key={`gradient${index + 1}`}
                  id={`colorGradient${index + 1}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>
            <XAxis dataKey="name" tick={{ fill: "#000000" }} />
            <YAxis tick={{ fill: "#000000" }} />
            <Tooltip />
            {["line1", "line2", "line3", "line4", "line5", "line6"].map(
              (line, index) =>
                visibleLines.includes(line) && (
                  <Area
                    key={line}
                    type="monotone"
                    dataKey={line}
                    stroke={colors[index]}
                    fill={`url(#colorGradient${index + 1})`}
                    fillOpacity={0.4}
                  />
                )
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4"></div>
    </div>
  );
};

export default AttendanceChart;
