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
  { name: "Name 1", position: 100 },
  { name: "Name 2", position: 40 },
  { name: "Name 3", position: 60 },
  { name: "Name 4", position: 90 },
  { name: "Name 5", position: 50 },
  // Tambahkan lebih banyak data sesuai kebutuhan
];

const PermissionChart: React.FC = () => {
  return (
    <div className="bg-[#05073C] p-4 rounded-lg">
      <h2 className="text-white mb-4">Permission Statistics for August</h2>
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

export default PermissionChart;
