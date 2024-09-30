import React, {useState, useEffect} from "react";
import CalendarModal from "../components/home/Calmodal";
import CalendarDay from "../components/home/CalendarDay";
import NavbarHome from "../components/home/NavHome";
import PresenceSummary from "../components/home/PreSummary";
import ProfileCard from "../components/home/ProfileCard";

const Homepage: React.FC = () => {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [currentDate] = useState(new Date());
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

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();
    const daysArray = Array.from({length: numDays}, (_, i) => i + 1);
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.unshift(0);
    }

    setDaysInMonth(daysArray);
  }, [currentDate]);

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

  return (
    <div className="bg-gradient-to-t from-[#A0DEFF] via-[#CAF4FF] to-[#5AB2FF]  overflow-hidden min-h-screen p-4">
      {/* Navbar */}
      <NavbarHome />

      {/* Main Layout: Split into Two Columns */}
      <div className="flex mt-6 space-x-6">
        {/* Left Column: Profile Card, Calendar */}
        <div className="flex-1">
          {/* Profile Card */}
          <ProfileCard />

          {/* Calendar */}
          <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-bold text-gray-600">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
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
            <div className="grid grid-cols-7 gap-4 mt-2 text-center text-black">
              {daysInMonth.map((day, index) => (
                <CalendarDay
                  key={index}
                  day={day}
                  checkInTime={checkInTimes[day]}
                  checkOutTime={checkOutTimes[day]}
                  onClick={() => openCalendarModal(day)}
                  isToday={day === currentDate.getDate()}
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
            checkInTime={null}
            checkOutTime={null}
          />
        )}
      </div>
    </div>
  );
};

export default Homepage;
