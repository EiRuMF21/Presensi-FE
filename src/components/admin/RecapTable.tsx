import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ChevronLeft} from "lucide-react";

const RecapTable: React.FC = () => {
  const navigate = useNavigate();
  const years = ["2024", "2023", "2022", "2021", "2020"];
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const weeks = ["ALL", "WEEK 1", "WEEK 2", "WEEK 3"];
  const divisions = ["ALL DIVISION", "DIV 1", "DIV 2", "DIV 3"];

  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const [selectedMonth, setSelectedMonth] = useState<string>("ALL MONTH");
  const [selectedWeek, setSelectedWeek] = useState<string>("ALL WEEK");
  const [selectedDivision, setSelectedDivision] =
    useState<string>("ALL DIVISION");

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  // Filter logic for month display
  const displayedMonths =
    selectedMonth === "ALL MONTH" ? months : [selectedMonth];

  return (
    <div className="fixed w-full h-full p-6 bg-white ">
      {/* Header */}
      <div className="flex items-center justify-start mb-6">
        <button
          onClick={handleBack}
          className="absolute z-20 text-black top-4 left-4"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-base font-bold text-black">
              <th className="px-6 py-4 bg-white border-">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full font-bold text-center text-black bg-transparent border-none"
                >
                  {years.map((year) => (
                    <option
                      key={year}
                      value={year}
                    >
                      {year}
                    </option>
                  ))}
                </select>
              </th>
              <th className="px-6 py-4 bg-white">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full font-bold text-center text-black bg-transparent border-none"
                >
                  <option value="ALL MONTH">ALL MONTH</option>
                  {months.map((month) => (
                    <option
                      key={month}
                      value={month}
                    >
                      {month}
                    </option>
                  ))}
                </select>
              </th>
              <th className="px-6 py-4 bg-white border-b">
                <select
                  value={selectedWeek}
                  onChange={(e) => setSelectedWeek(e.target.value)}
                  className="w-full font-bold text-center text-black bg-transparent border-none"
                >
                  {weeks.map((week) => (
                    <option
                      key={week}
                      value={week}
                    >
                      {week}
                    </option>
                  ))}
                </select>
              </th>
              <th className="px-6 py-4 bg-white border-b">
                <select
                  value={selectedDivision}
                  onChange={(e) => setSelectedDivision(e.target.value)}
                  className="w-full font-bold text-center text-black bg-transparent border-none"
                >
                  {divisions.map((division) => (
                    <option
                      key={division}
                      value={division}
                    >
                      {division}
                    </option>
                  ))}
                </select>
              </th>
              <th className="px-6 py-4 bg-white border-b"></th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-black">
            {displayedMonths.map((month) => (
              <tr
                key={month}
                className="border-t"
              >
                <td className="px-6 py-4 text-center border-b-2 border-black">
                  {selectedYear}
                </td>
                <td className="px-6 py-4 text-center border-b-2 border-black">
                  {month}
                </td>
                <td className="px-6 py-4 text-center border-b-2 border-black">
                  {selectedWeek}
                </td>
                <td className="px-6 py-4 text-center border-b-2 border-black">
                  {selectedDivision}
                </td>
                <td className="px-6 py-4 text-center border-b-2 border-black">
                  <button className="px-6 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecapTable;
