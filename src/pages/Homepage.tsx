import React, { useState, useEffect } from "react";
import NavbarHome from "../components/home/NavbarHome";
import PresenceSummary from "../components/home/PresenceSummary";
import ProfileCard from "../components/home/ProfileCard";
import CalendarDay from "../components/calendar/CalendarDay";
import CalendarModal from "../components/calendar/CalendarModal";
import MonthYearSelector from "../components/calendar/MonthYearSelector";

interface DayData {
  day: number;
  status: "present" | "permission" | "duty" | "sick" | null;
  checkInTime: string | null;
  checkOutTime: string | null;
}

const Homepage: React.FC = () => {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState<DayData[]>([]);

  // Function to open calendar modal when a day is selected
  const openCalendarModal = (day: number) => {
    setSelectedDay(day);
    setIsCalendarModalOpen(true);
  };

  // Function to close calendar modal
  const closeCalendarModal = () => {
    setIsCalendarModalOpen(false);
    setSelectedDay(null);
  };

  // Calculate the number of days in the month and add placeholders if the month doesn't start from Sunday
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();
    const daysArray: DayData[] = [];

    // Add placeholders for days before the 1st of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push({
        day: 0,
        status: null,
        checkInTime: null,
        checkOutTime: null,
      });
    }

    // Add the actual days of the month
    for (let i = 1; i <= numDays; i++) {
      daysArray.push({
        day: i,
        status: null, // You can set the actual status here if you have the data
        checkInTime: null, // Set actual check-in time if available
        checkOutTime: null, // Set actual check-out time if available
      });
    }

    setDaysInMonth(daysArray);
  }, [currentDate]);

  // Function to handle month and year changes from MonthYearSelector
  const handleMonthYearChange = (newMonth: number, newYear: number) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(newYear);
    newDate.setMonth(newMonth);
    setCurrentDate(newDate);
  };

  return (
    <div className="bg-gradient-to-t from-[#A0DEFF] via-[#CAF4FF] to-[#5AB2FF] overflow-hidden min-h-screen">
      <NavbarHome />

      <div className="grid grid-cols-1 gap-6 ml-28 mt-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProfileCard />

          {/* Calendar Section */}
          <div className="p-6 ml-0 mt-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between p-2 mb-2 -mt-6 -ml-6 border-b-2">
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

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-4 text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="font-bold text-gray-600">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-4 mt-2 text-center text-black">
              {daysInMonth.map((dayData, index) => (
                <CalendarDay
                  key={index}
                  day={dayData.day}
                  checkInTime={dayData.checkInTime}
                  checkOutTime={dayData.checkOutTime}
                  status={dayData.status}
                  onClick={() =>
                    dayData.day > 0 && openCalendarModal(dayData.day)
                  }
                  isToday={
                    dayData.day === new Date().getDate() &&
                    currentDate.getMonth() === new Date().getMonth() &&
                    currentDate.getFullYear() === new Date().getFullYear()
                  }
                  onHover={setHoveredDay}
                  onLeave={() => setHoveredDay(null)}
                  hovered={hoveredDay === dayData.day}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Presence Summary */}
        <PresenceSummary />

        {/* Calendar Modal for check-in/check-out details */}
        {selectedDay !== null && (
          <CalendarModal
            isOpen={isCalendarModalOpen}
            onClose={closeCalendarModal}
            date={`${selectedDay} ${currentDate.toLocaleString("default", {
              month: "long",
            })}, ${currentDate.getFullYear()}`}
            checkInTime={
              daysInMonth.find((d) => d.day === selectedDay)?.checkInTime ||
              null
            }
            checkOutTime={
              daysInMonth.find((d) => d.day === selectedDay)?.checkOutTime ||
              null
            }
          />
        )}
      </div>
    </div>
  );
};

export default Homepage;
