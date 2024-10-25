import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import SubmissionModal from "./SubmissionModal";
import axios from "axios";

interface ProfileData {
  name: string;
  position: string | null;
  facePhoto: string | null;
}

const ProfileCard: React.FC = () => {
  const [isCheckIn, setIsCheckIn] = useState(true);
  const [modalTitle, setModalTitle] = useState("");
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "",
    position: "",
    facePhoto: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  const { token, clearUser } = useAuthStore();

  // Authentication check and axios configuration
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!token && !storedToken) {
      clearUser();
      return;
    }

    // Set axios default authorization header
    const currentToken = token || storedToken;
    if (currentToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${currentToken}`;
    }
  }, [token, navigate, clearUser]);

  // Fetch profile data
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://api-smart.curaweda.com/api/myaccount"
        );

        if (response.data) {
          setProfileData(response.data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            // Clear everything on unauthorized
            localStorage.removeItem("token");
            delete axios.defaults.headers.common["Authorization"];
            clearUser();
          } else {
            setErrorMessage(
              "Failed to load profile data. Please try again later."
            );
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (axios.defaults.headers.common["Authorization"]) {
      fetchProfileData();
    }
  }, [navigate, clearUser]);

  // Time-based check-in/out logic
  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date();
      setCurrentTime(newTime);
      setIsCheckIn(newTime.getHours() < 16);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAttendance = () => {
    navigate("/attendance");
  };

  const openSubmissionModal = (title: string) => {
    setModalTitle(title);
    setIsSubmissionModalOpen(true);
  };

  const closeSubmissionModal = () => {
    setIsSubmissionModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full p-8">
        <div className="w-8 h-8 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex items-center justify-center w-full p-8 text-red-500">
        {errorMessage}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-between w-full p-2 mx-auto mt-6 bg-white rounded-lg shadow-lg max-w-7xl md:flex-row">
      {/* Left Section: Profile */}
      <div className="flex items-center mb-6 md:mb-0">
        <img
          src={profileData.facePhoto || "https://via.placeholder.com/80"}
          alt="Profile"
          className="object-cover w-24 h-24 mr-6 rounded-full"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            const img = e.currentTarget;
            img.src = "https://via.placeholder.com/80";
          }}
        />

        <div>
          <h2 className="text-2xl font-bold text-gray-700">
            {profileData.name}
          </h2>
          <p className="text-gray-500">
            {" "}
            {profileData.position || "Position Not Set"}
          </p>
        </div>
      </div>

      {/* Right Section: ATTENDANCE/Submission Buttons */}
      <div className="flex flex-col md:space-y-2">
        {/* Check-In/Check-Out Button */}
        <button
          onClick={handleAttendance}
          className={`${
            isCheckIn ? "bg-blue-500" : "bg-red-500"
          } text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center justify-center`}
        >
          {isCheckIn ? "ATTENDANCE" : "ATTENDANCE"}
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
