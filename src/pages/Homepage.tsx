import React, {useState, useEffect} from "react";
import NavbarHome from "../components/home/NavbarHome";
import PresenceSummary from "../components/home/PresenceSummary";
import ProfileCard from "../components/home/ProfileCard";
import CalendarDay from "../components/calendar/CalendarDay";
import CalendarModal from "../components/calendar/CalendarModal";

// Nama bulan untuk ditampilkan
const monthNames = [
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

const Homepage: React.FC = () => {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [hoveredDay, setHoveredDay] = useState<number | null>(null); // State untuk tanggal yang di-hover
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [checkInTimes] = useState<{[key: number]: string | null}>({});
  const [checkOutTimes] = useState<{[key: number]: string | null}>({});

  const openCalendarModal = (day: number) => {
    setSelectedDay(day);
    setIsCalendarModalOpen(true);
  };

  const closeCalendarModal = () => {
    setIsCalendarModalOpen(false);
    setSelectedDay(null);
  };

  // Menentukan jumlah hari di bulan
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // Hari pertama bulan ini
    const numDays = new Date(year, month + 1, 0).getDate(); // Jumlah hari di bulan
    const daysArray = Array.from({length: numDays}, (_, i) => i + 1);

    // Menambahkan hari kosong di awal bulan untuk grid kalender
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.unshift(0);
    }

    setDaysInMonth(daysArray);
  }, [currentDate]);

  // Handle perubahan bulan
  const handleMonthChange = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === "next" ? 1 : -1));
    setCurrentDate(newDate);
  };

  return (
    <div className="bg-gradient-to-t from-[#A0DEFF] via-[#CAF4FF] to-[#5AB2FF] overflow-hidden min-h-screen p-4">
      {/* Navbar */}
      <NavbarHome />

      {/* Main Layout: Menggunakan grid untuk penataan yang lebih responsif */}
      <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3">
        {" "}
        {/* Menggunakan grid-cols-3 */}
        {/* Left Column: Profile Card dan Kalender */}
        <div className="lg:col-span-2">
          {/* Profile Card */}
          <ProfileCard />

          {/* Calendar Section */}
          <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
            {/* Header bulan dan tahun */}
            <div className="flex justify-between mb-4">
              <button
                onClick={() => handleMonthChange("prev")}
                className="p-2 text-gray-600 rounded hover:bg-gray-200"
              >
                Prev
              </button>
              <h3 className="text-xl font-bold text-gray-600">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <button
                onClick={() => handleMonthChange("next")}
                className="p-2 text-gray-600 rounded hover:bg-gray-200"
              >
                Next
              </button>
            </div>

            {/* Header hari dalam minggu */}
            <div className="grid grid-cols-7 gap-4 text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="font-bold text-gray-600"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Grid kalender */}
            <div className="grid grid-cols-7 gap-4 mt-2 text-center text-black">
              {daysInMonth.map((day, index) => (
                <CalendarDay
                  key={index}
                  day={day}
                  checkInTime={checkInTimes[day]}
                  checkOutTime={checkOutTimes[day]}
                  onClick={() => openCalendarModal(day)}
                  isToday={
                    day === currentDate.getDate() &&
                    currentDate.getMonth() === new Date().getMonth() &&
                    currentDate.getFullYear() === new Date().getFullYear()
                  }
                  onHover={setHoveredDay}
                  onLeave={() => setHoveredDay(null)}
                  hovered={hoveredDay === day}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Right Column: Presence Summary */}
        <PresenceSummary />
        {/* Calendar Modal */}
        {selectedDay !== null && (
          <CalendarModal
            isOpen={isCalendarModalOpen}
            onClose={closeCalendarModal}
            selectedDay={selectedDay}
            checkInTime={checkInTimes[selectedDay]}
            checkOutTime={checkOutTimes[selectedDay]}
          />
        )}
      </div>
    </div>
  );
};

export default Homepage;
