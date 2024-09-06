import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
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
    line1: 90,
    line2: 70,
    line3: 60,
    line4: 45,
    line5: 35,
    line6: 25,
  },
  {
    name: "Week 4",
    line1: 95,
    line2: 20,
    line3: 70,
    line4: 60,
    line5: 50,
    line6: 40,
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

const AttendanceChart: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] p-4 rounded-lg">
      <h2 className="text-black mb-4 text-xl font-bold">
        Statistics for August
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
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
                <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={color} stopOpacity={0.1} />
              </linearGradient>
            ))}
          </defs>
          <XAxis dataKey="name" tick={{ fill: "#00000" }} />
          <YAxis tick={{ fill: "#00000" }} />
          <Tooltip />
          {["line1", "line2", "line3", "line4", "line5", "line6"].map(
            (line, index) => (
              <Area
                key={line}
                type="monotone"
                dataKey={line}
                stroke={colors[index]}
                fill={`url(#colorGradient${index + 1})`}
                fillOpacity={1}
                stackId="1"
              />
            )
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
