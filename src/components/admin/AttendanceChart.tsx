import React, {useState, useEffect} from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {ChevronDown} from "lucide-react";

type DataPoint = {
  date: string;
  Attendance: number;
  Permission: number;
  Sick: number;
  "On Leave": number;
  "Office Duty": number;
  WFH: number;
};

// Function to generate random data for a specific month
const generateRandomData = (year: number, month: number): DataPoint[] => {
  const daysInMonth = new Date(year, month, 0).getDate();
  return Array.from({length: daysInMonth}, (_, i) => ({
    date: `${i + 1}`, // Day of the month
    Attendance: Math.floor(Math.random() * 100),
    Permission: Math.floor(Math.random() * 50),
    Sick: Math.floor(Math.random() * 30),
    "On Leave": Math.floor(Math.random() * 20),
    "Office Duty": Math.floor(Math.random() * 40),
    WFH: Math.floor(Math.random() * 60),
  }));
};

// Function to generate aggregated data for the whole year
const generateYearlyData = (_year: number): DataPoint[] => {
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

  return months.map((month, _index) => {
    return {
      date: month,
      Attendance: Math.floor(Math.random() * 3000),
      Permission: Math.floor(Math.random() * 1500),
      Sick: Math.floor(Math.random() * 900),
      "On Leave": Math.floor(Math.random() * 600),
      "Office Duty": Math.floor(Math.random() * 1200),
      WFH: Math.floor(Math.random() * 1800),
    };
  });
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
  toggleLineVisibility: (label: string) => void;
};

const AttendanceChart: React.FC<AttendanceChartProps> = ({visibleLines}) => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [startDate, setStartDate] = useState<number | null>(null); // New state for start date
  const [endDate, setEndDate] = useState<number | null>(null); // New state for end date
  const [data, setData] = useState<DataPoint[]>([]);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isAllMonths, setIsAllMonths] = useState(false); // State for 'All Months'

  useEffect(() => {
    if (isAllMonths) {
      setData(generateYearlyData(year));
    } else {
      setData(generateRandomData(year, month));
    }
  }, [year, month, isAllMonths]);

  const years = Array.from(
    {length: 5},
    (_, i) => currentDate.getFullYear() - 2 + i
  );

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
    "All Months",
  ];

  const daysInMonth = new Date(year, month, 0).getDate();
  const days = Array.from({length: daysInMonth}, (_, i) => i + 1);

  const filteredData = data.filter((d) => {
    const day = Number(d.date);
    if (startDate && endDate) {
      return day >= startDate && day <= endDate;
    }
    return true;
  });

  const getVisibleLines = () => {
    if (visibleLines.includes("View All")) {
      return Object.keys(colors);
    }
    return visibleLines;
  };

  return (
    <div className="flex flex-col p-6 space-y-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800">Attendance Graph</h2>

      <div className="flex space-x-4">
        {/* Year Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
            className="flex items-center justify-between w-32 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Year: {year}
            <ChevronDown
              className="w-5 h-5 ml-2"
              aria-hidden="true"
            />
          </button>
          {isYearDropdownOpen && (
            <div className="absolute left-0 z-10 w-32 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
              >
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

        {/* Month Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
            className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-36 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Month: {isAllMonths ? "All" : months[month - 1]}
            <ChevronDown
              className="w-5 h-5 ml-2"
              aria-hidden="true"
            />
          </button>
          {isMonthDropdownOpen && (
            <div className="absolute left-0 z-10 mt-2 bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
              >
                {months.map((m, index) => (
                  <button
                    key={m}
                    onClick={() => {
                      if (m === "All Months") {
                        setIsAllMonths(true);
                      } else {
                        setMonth(index + 1);
                        setIsAllMonths(false);
                      }
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

        {/* Start Date and End Date */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <select
              value={startDate || ""}
              onChange={(e) => setStartDate(Number(e.target.value))}
              className="w-32 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">From</option>
              {days.map((day) => (
                <option
                  key={day}
                  value={day}
                >
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <select
              value={endDate || ""}
              onChange={(e) => setEndDate(Number(e.target.value))}
              className="w-32 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">To</option>
              {days.map((day) => (
                <option
                  key={day}
                  value={day}
                >
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div
        className="flex-grow"
        style={{height: "400px"}}
      >
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={filteredData}>
            <XAxis
              dataKey="date"
              tick={{fill: "#000000"}}
            />
            <YAxis tick={{fill: "#000000"}} />
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
