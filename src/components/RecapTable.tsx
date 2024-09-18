import React, { useState } from 'react';

const RecapTable: React.FC = () => {
  const years = ['2024', '2023', '2022', '2021', '2020'];
  const months = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 
    'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 
    'NOVEMBER', 'DECEMBER'
  ];
  const weeks = ['ALL', 'WEEK 1', 'WEEK 2', 'WEEK 3'];
  const divisions = ['ALL DIVISION', 'DIV 1', 'DIV 2', 'DIV 3'];
  
  const [selectedYear, setSelectedYear] = useState<string>('2024');
  const [selectedMonth, setSelectedMonth] = useState<string>('ALL MONTH');
  const [selectedWeek, setSelectedWeek] = useState<string>('ALL WEEK');
  const [selectedDivision, setSelectedDivision] = useState<string>('ALL DIVISION');

  return (
    <div className="p-6 bg-white">
      {/* Header */}
      <div className="flex justify-start items-center mb-6">
        <button className="text-lg font-bold text-black">{'<'} REKAP</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="text-black text-base font-bold">
              <th className="px-6 py-4 border- bg-white">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="border-none bg-transparent text-black font-bold w-full text-center"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </th>
              <th className="px-6 py-4 bg-white">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="border-none  bg-transparent text-black font-bold w-full text-center"
                >
                  <option value="ALL MONTH">ALL MONTH</option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </th>
              <th className="px-6 py-4 border-b bg-white">
                <select
                  value={selectedWeek}
                  onChange={(e) => setSelectedWeek(e.target.value)}
                  className="border-none bg-transparent text-black font-bold w-full text-center"
                >
                  {weeks.map((week) => (
                    <option key={week} value={week}>
                      {week}
                    </option>
                  ))}
                </select>
              </th>
              <th className="px-6 py-4 border-b bg-white">
                <select
                  value={selectedDivision}
                  onChange={(e) => setSelectedDivision(e.target.value)}
                  className="border-none bg-transparent text-black font-bold w-full text-center"
                >
                  {divisions.map((division) => (
                    <option key={division} value={division}>
                      {division}
                    </option>
                  ))}
                </select>
              </th>
              <th className="px-6 py-4 border-b bg-white"></th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-black">
            {months.map((month) => (
              <tr key={month} className="border-t">
                <td className="border-b-2 border-black px-6 py-4 text-center">{selectedYear}</td>
                <td className="border-b-2 border-black px-6 py-4 text-center">{selectedMonth}</td>
                <td className="border-b-2 border-black px-6 py-4 text-center">{selectedWeek}</td>
                <td className="border-b-2 border-black px-6 py-4 text-center">{selectedDivision}</td>
                <td className="border-b-2 border-black px-6 py-4 text-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
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
