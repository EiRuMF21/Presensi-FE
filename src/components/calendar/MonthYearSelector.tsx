import React, {useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";

interface MonthYearSelectorProps {
  initialMonth: string;
  initialYear: number;
  onMonthYearChange: (month: string, year: number) => void;
}

const MonthYearSelector: React.FC<MonthYearSelectorProps> = ({
  initialMonth,
  initialYear,
  onMonthYearChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(initialMonth);
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [isSelectingYear, setIsSelectingYear] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Menampilkan rentang tahun dari 10 tahun sebelumnya hingga 10 tahun ke depan
  const years = Array.from({length: 21}, (_, i) => initialYear - 10 + i);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleMonthClick = () => {
    setIsSelectingYear(false); // Aktifkan pemilihan bulan
  };

  const handleYearClick = () => {
    setIsSelectingYear(true); // Aktifkan pemilihan tahun
  };

  const handleSelection = (value: string | number) => {
    if (isSelectingYear) {
      setSelectedYear(value as number);
      onMonthYearChange(selectedMonth, value as number); // Update parent component
    } else {
      setSelectedMonth(value as string);
      onMonthYearChange(value as string, selectedYear); // Update parent component
    }
    setIsOpen(false); // Tutup dropdown setelah memilih
  };

  return (
    <div className="relative w-48 text-black">
      {/* Button untuk membuka pop-up */}
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="flex items-center justify-between">
          {selectedMonth} {selectedYear}
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      {/* Dropdown untuk bulan dan tahun */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="flex border-b border-gray-300">
            {/* Tombol pemilihan bulan */}
            <button
              onClick={handleMonthClick}
              className={`flex-1 px-4 py-2 text-sm ${
                !isSelectingYear ? "font-semibold" : ""
              }`}
            >
              Month
            </button>
            {/* Tombol pemilihan tahun */}
            <button
              onClick={handleYearClick}
              className={`flex-1 px-4 py-2 text-sm ${
                isSelectingYear ? "font-bold" : ""
              }`}
            >
              Year
            </button>
          </div>

          {/* Daftar bulan atau tahun berdasarkan mode pemilihan */}
          <div className="overflow-y-auto max-h-60">
            {isSelectingYear
              ? years.map((year) => (
                  <div
                    key={year}
                    onClick={() => handleSelection(year)}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      selectedYear === year ? "bg-gray-200" : ""
                    }`}
                  >
                    {year}
                  </div>
                ))
              : months.map((month) => (
                  <div
                    key={month}
                    onClick={() => handleSelection(month)}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      selectedMonth === month ? "bg-gray-200" : ""
                    }`}
                  >
                    {month}
                  </div>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthYearSelector;
