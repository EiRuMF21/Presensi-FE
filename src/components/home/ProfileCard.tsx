import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import SubmissionModal from "../submission/SubmissionModal";

const ProfileCard: React.FC = () => {
  const [isCheckIn, setIsCheckIn] = useState(true); // Mengontrol apakah check-in atau check-out
  const [modalTitle, setModalTitle] = useState("");
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const navigate = useNavigate();

  // Mengubah state isCheckIn berdasarkan waktu
  useEffect(() => {
    const currentHour = currentTime.getHours();
    if (currentHour >= 16) {
      setIsCheckIn(false); // Jam lebih dari 4 sore: check-out
    } else {
      setIsCheckIn(true); // Sebelum jam 4 sore: check-in
    }

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update setiap detik

    return () => clearInterval(interval);
  }, [currentTime]);

  // Fungsi untuk navigasi ke halaman attendance berdasarkan waktu
  const handleAttendance = () => {
    if (isCheckIn) {
      navigate("/attendance");
    } else {
      navigate("/attendance");
    }
  };

  const openSubmissionModal = (title: string) => {
    setModalTitle(title);
    setIsSubmissionModalOpen(true);
  };

  const closeSubmissionModal = () => {
    setIsSubmissionModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-between w-full p-2 mx-auto mt-6 bg-white rounded-lg shadow-lg max-w-7xl md:flex-row">
      {/* Left Section: Profile */}
      <div className="flex items-center mb-6 md:mb-0">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="object-cover w-24 h-24 mr-6 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-700">NAME</h2>
          <p className="text-gray-500">POSITION</p>
        </div>
      </div>

      {/* Right Section: ATTENDANCE/Submission Buttons */}
      <div className="flex flex-col md:space-y-2">
        {/* Check-In/Check-Out Button */}
        <button
          onClick={handleAttendance}
          className={`${
            isCheckIn ? "bg-blue-500" : "bg-green-500"
          } text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center justify-center`}
        >
          {isCheckIn ? "CHECK IN" : "CHECK OUT"}
          <img
            src={`https://img.icons8.com/ios-filled/24/ffffff/${
              isCheckIn ? "globe" : "exit"
            }.png`}
            alt={isCheckIn ? "Globe Icon" : "Exit Icon"}
            className="ml-2"
          />
        </button>

        {/* Submission Button */}
        <button
          className="flex items-center justify-center px-6 py-3 mt-2 font-bold text-blue-500 bg-white border border-blue-500 rounded-full shadow-lg"
          onClick={() => openSubmissionModal("Submission")}
        >
          <img
            src="https://img.icons8.com/ios-filled/24/000000/upload.png"
            alt="Submission Icon"
            className="mr-2"
          />
          SUBMISSION
        </button>
      </div>

      {/* Submission Modal */}
      {isSubmissionModalOpen && (
        <SubmissionModal
          isOpen={isSubmissionModalOpen}
          onClose={closeSubmissionModal}
          title={modalTitle}
          selectedDay={null}
          checkInTime={null}
          checkOutTime={null}
        />
      )}
    </div>
  );
};

export default ProfileCard;
