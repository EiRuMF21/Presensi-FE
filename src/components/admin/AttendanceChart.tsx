import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { ChevronDown } from "lucide-react";

type DataPoint = {
  date: string;
  Attendance: number;
  Permission: number;
  Sick: number;
  "On Leave": number;
  "Office Duty": number;
  WFH: number;
};

const generateRandomData = (): DataPoint[] => {
  return Array.from({ length: 31 }, (_, i) => ({
    date: `${i + 1}`,
    Attendance: Math.floor(Math.random() * 100),
    Permission: Math.floor(Math.random() * 50),
    Sick: Math.floor(Math.random() * 30),
    "On Leave": Math.floor(Math.random() * 20),
    "Office Duty": Math.floor(Math.random() * 40),
    WFH: Math.floor(Math.random() * 60),
  }));
};

const colors = {
  Attendance: "#9FFFC6",
  Permission: "#FF9AEF",
  Sick: "#FF9900",
  "On Leave": "#97E0FF",
  "Office Duty": "#FF0A0A",
  WFH: "#6100FF",
};

type AttendanceChartProps = {
  visibleLines: string[];
  toggleLineVisibility: (label: string) => void; // Tambahkan jika diperlukan
};

const AttendanceChart: React.FC<AttendanceChartProps> = ({ visibleLines }) => {
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(1);
  const [data, setData] = useState<DataPoint[]>([]);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);

  useEffect(() => {
    setData(generateRandomData());
  }, [year, month]);

  const years = Array.from({ length: 5 }, (_, i) => 2024 + i);
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const getVisibleLines = () => {
    if (visibleLines.includes("View All")) {
      return Object.keys(colors);
    }
    return visibleLines;
  };
  return (
    <div className="bg-white px-5 rounded-lg shadow-lg flex flex-col space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Grafik Kehadiran</h2>
      <div className="flex space-x-4">
        <div className="relative">
          <button
            onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
            className="flex items-center justify-between w-32 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Tahun: {year}
            <ChevronDown className="w-5 h-5 ml-2" aria-hidden="true" />
          </button>
          {isYearDropdownOpen && (
            <div className="absolute left-0 z-10 w-32 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => {
                      setYear(y);
                      setIsYearDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
            className="flex items-center justify-between w-40 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Bulan: {months[month - 1]}
            <ChevronDown className="w-5 h-5 ml-2" aria-hidden="true" />
          </button>
          {isMonthDropdownOpen && (
            <div className="absolute left-0 z-10 w-40 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical">
                {months.map((m, index) => (
                  <button
                    key={m}
                    onClick={() => {
                      setMonth(index + 1);
                      setIsMonthDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex-grow" style={{ height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="date" tick={{ fill: "#000000" }} />
            <YAxis tick={{ fill: "#000000" }} />
            <Tooltip />
            {getVisibleLines().map((key) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[key as keyof typeof colors]}
                fill={colors[key as keyof typeof colors]}
                fillOpacity={0.2}
                strokeWidth={2}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
