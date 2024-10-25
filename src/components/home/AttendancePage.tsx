import {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios"; // Untuk mengirim request ke backend

const AttendancePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showCamera, setShowCamera] = useState(false);
  const [isCheckIn, setIsCheckIn] = useState(true);
  const [latitude, setLatitude] = useState<number | null>(null); // State untuk latitude
  const [longitude, setLongitude] = useState<number | null>(null); // State untuk longitude
  const [locationError, setLocationError] = useState<string | null>(null); // Error handling untuk geolocation
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentHour = currentTime.getHours();
    setIsCheckIn(currentHour < 16); // Check-in sebelum jam 16:00, check-out setelahnya
  }, [currentTime]);

  // Mengambil lokasi pengguna
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setLocationError(null);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationError(
            "Failed to get your location. Please enable location services."
          );
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  };

  // Fungsi untuk mengaktifkan kamera
  const activateCamera = async () => {
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = videoStream;
        videoRef.current.play();
      }
      setStream(videoStream);
      setShowCamera(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Could not access the camera. Please check your permissions.");
    }
  };

  // Fungsi untuk menangkap gambar dari kamera
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL("image/png");
        console.log("Captured image data:", imageData);
      }

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      handleAttendanceSubmit();
    }
  };

  // Fungsi untuk mengirim data check-in/check-out ke backend
  // Fungsi untuk mengirim data check-in/check-out ke backend
  const handleAttendanceSubmit = async () => {
    if (latitude && longitude) {
      try {
        const token = localStorage.getItem("token"); // Ambil token dari localStorage
        const action = isCheckIn ? "checkin" : "checkout"; // Tentukan jenis aksi

        const apiUrl = `https://api-smart.curaweda.com/api/${action}`; // Sesuaikan endpoint Anda

        const response = await axios.post(
          apiUrl,
          {
            lat: latitude,
            long: longitude,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Sertakan token JWT untuk autentikasi
            },
          }
        );

        console.log(`${action} response:`, response.data);
        alert(`${isCheckIn ? "Check-in" : "Check-out"} successful!`);
        navigate("/home");
      } catch (error) {
        console.error(
          `Error during ${isCheckIn ? "Check-in" : "Check-out"}:`,
          error
        );
        alert(
          `Failed to ${isCheckIn ? "Check-in" : "Check-out"}. Please try again.`
        );
      }
    } else {
      alert(
        "Failed to get your location. Please enable location services and try again."
      );
    }
  };

  // Menghandle tombol attendance
  const handleAttendance = () => {
    if (!latitude || !longitude) {
      getUserLocation(); // Dapatkan lokasi jika belum ada
    }

    if (!showCamera) {
      activateCamera(); // Aktifkan kamera jika belum aktif
    } else {
      captureImage(); // Tangkap gambar jika kamera sudah aktif
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-black bg-gradient-to-t from-[#A0DEFF] via-[#CAF4FF] to-[#5AB2FF]">
      {/* Navbar */}
      <div className="flex items-center justify-between w-full px-4 py-4 bg-white shadow-md">
        <button
          onClick={() => navigate(-1)}
          className="text-black"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/back.png"
            alt="Back Icon"
          />
        </button>
        <h1 className="text-lg font-bold">
          {isCheckIn ? "CHECK IN" : "CHECK OUT"}
        </h1>
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/bell.png"
          alt="Notification Icon"
          className="text-black"
        />
      </div>

      {/* Content */}
      <div className="w-5/6 max-w-lg p-6 mt-64 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center">
          {isCheckIn ? "Good Morning" : "Good Evening"}
        </h1>
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg">
            {currentTime.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-lg font-semibold">
            {currentTime.toLocaleTimeString()}
          </p>
        </div>
        <p className="mt-2 text-center text-gray-600">📍 SMKN 4 Bandung</p>

        <div className="flex justify-center mt-6">
          <div className="p-6 bg-gray-100 rounded-lg">
            {showCamera ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <img
                src="https://img.icons8.com/ios-filled/50/000000/camera.png"
                alt="Camera Icon"
                className="mx-auto"
              />
            )}
          </div>
        </div>

        {/* Hidden canvas for capturing the image */}
        <canvas
          ref={canvasRef}
          style={{display: "none"}}
        />

        <button
          onClick={handleAttendance}
          className={`w-full px-6 py-3 mt-6 font-bold text-white rounded-full ${
            showCamera ? "bg-red-500" : "bg-blue-500"
          }`}
        >
          {showCamera ? "Capture and Finish" : "Attendance"}
        </button>
      </div>

      {/* Error message jika lokasi gagal */}
      {locationError && <p className="text-red-500">{locationError}</p>}
    </div>
  );
};

export default AttendancePage;
