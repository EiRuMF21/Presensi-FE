import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Name 1", position: 50 },
  { name: "Name 2", position: 0 },
  { name: "Name 3", position: 100 },
  { name: "Name 4", position: 45 },
  { name: "Name 5", position: 100 },
  { name: "Name 6", position: 120 },
  { name: "Name 7", position: 200 },
  { name: "Name 8", position: 150 },
  { name: "Name 9", position: 155 },
  { name: "Name 10", position: 170 },
  { name: "Name 11", position: 180 },
  { name: "Name 12", position: 70 },

  // Tambahkan lebih banyak data sesuai kebutuhan
];

const AttendanceChart: React.FC = () => {
  return (
    <div className="bg-[#05073C] p-4 rounded-lg">
      <h2 className="text-white mb-4">Attendance Statistics for August</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" tick={{ fill: "#FFFFFF" }} />
          <YAxis tick={{ fill: "#FFFFFF" }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="position"
            stroke="#C5FFF8"
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
