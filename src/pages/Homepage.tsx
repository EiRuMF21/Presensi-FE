import React, {useState, useEffect} from "react";
import NavbarHome from "../components/home/NavbarHome";
import PresenceSummary from "../components/home/PresenceSummary";
import ProfileCard from "../components/home/ProfileCard";
import CalendarDay from "../components/calendar/CalendarDay";
import CalendarModal from "../components/calendar/CalendarModal";
import MonthYearSelector from "../components/calendar/MonthYearSelector";

const Homepage: React.FC = () => {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [checkInTimes] = useState<{[key: number]: string | null}>({});
  const [checkOutTimes] = useState<{[key: number]: string | null}>({});

  // Fungsi untuk membuka modal kalender ketika hari dipilih
  const openCalendarModal = (day: number) => {
    setSelectedDay(day);
    setIsCalendarModalOpen(true);
  };

  // Fungsi untuk menutup modal kalender
  const closeCalendarModal = () => {
    setIsCalendarModalOpen(false);
    setSelectedDay(null);
  };

  // Menghitung jumlah hari dalam bulan dan menambahkan placeholder jika bulan tidak mulai dari hari Minggu
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();
    const daysArray = Array.from({length: numDays}, (_, i) => i + 1);

    // Menambahkan placeholder di awal bulan jika tidak mulai dari hari Minggu
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.unshift(0); // Placeholder untuk hari sebelum 1
    }

    setDaysInMonth(daysArray);
  }, [currentDate]);

  // Fungsi untuk menangani perubahan bulan dan tahun dari MonthYearSelector
  const handleMonthYearChange = (newMonth: number, newYear: number) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(newYear);
    newDate.setMonth(newMonth);
    setCurrentDate(newDate);
  };

  return (
    <div className="bg-gradient-to-t from-[#A0DEFF] via-[#CAF4FF] to-[#5AB2FF] overflow-hidden min-h-screen p-4">
      <NavbarHome />

      <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProfileCard />

          {/* Bagian Kalender */}
          <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between p-2 mb-2 -mt-6 -ml-6 border-b-2">
              {/* MonthYearSelector sebagai pop-up */}
              <MonthYearSelector
                initialMonth={currentDate.toLocaleString("default", {
                  month: "long",
                })}
                initialYear={currentDate.getFullYear()}
                onMonthYearChange={(monthString, year) => {
                  const monthIndex = new Date(
                    `${monthString} 1, ${year}`
                  ).getMonth();
                  handleMonthYearChange(monthIndex, year);
                }}
              />
            </div>

            {/* Header Hari Minggu hingga Sabtu */}
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

            {/* Tanggal di dalam bulan */}
            <div className="grid grid-cols-7 gap-4 mt-2 text-center text-black">
              {daysInMonth.map((day, index) => (
                <CalendarDay
                  key={index}
                  day={day}
                  checkInTime={checkInTimes[day]}
                  checkOutTime={checkOutTimes[day]}
                  onClick={() => day > 0 && openCalendarModal(day)} // Pastikan placeholder tidak bisa di-klik
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

        {/* Ringkasan Presensi */}
        <PresenceSummary />

        {/* Modal Kalender untuk detail check-in/check-out */}
        {selectedDay !== null && (
          <CalendarModal
            isOpen={isCalendarModalOpen}
            onClose={closeCalendarModal}
            date={`${selectedDay} ${currentDate.toLocaleString("default", {
              month: "long",
            })}, ${currentDate.getFullYear()}`} // Construct a readable date string
            checkInTime={checkInTimes[selectedDay] || undefined} // Convert null to undefined
            checkOutTime={checkOutTimes[selectedDay] || undefined} // Convert null to undefined
          />
        )}
      </div>
    </div>
  );
};

export default Homepage;
