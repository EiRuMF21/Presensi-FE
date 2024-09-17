import {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";

const AttendancePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showCamera, setShowCamera] = useState(false);
  const [isCheckIn, setIsCheckIn] = useState(true); // State untuk check-in atau check-out
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const navigate = useNavigate();

  // Update waktu setiap detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Fungsi untuk menentukan apakah ini waktu check-in atau check-out
  useEffect(() => {
    const currentHour = currentTime.getHours();
    if (currentHour >= 16) {
      setIsCheckIn(false); // Sore hari (check-out)
    } else {
      setIsCheckIn(true); // Pagi hari (check-in)
    }
  }, [currentTime]);

  // Fungsi untuk mengaktifkan kamera
  const activateCamera = async () => {
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = videoStream;
        videoRef.current.play(); // Pastikan video mulai diputar
      }
      setStream(videoStream);
      setShowCamera(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Could not access the camera. Please check your permissions.");
    }
  };

  // Fungsi untuk menangkap gambar dari video
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Di sini kita bisa memproses gambar lebih lanjut, seperti mengirimkannya ke server
        const imageData = canvas.toDataURL("image/png");
        console.log("Captured image data:", imageData);
      }

      // Simulasi berhasil check-in atau check-out
      const action = isCheckIn ? "Check-in" : "Check-out";
      console.log(`${action} at:`, currentTime.toLocaleTimeString());
      alert(`${action} successful!`);

      // Hentikan stream kamera
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      navigate("/homepage");
    }
  };

  // Fungsi untuk menangani tombol Attendance
  const handleAttendance = () => {
    if (!showCamera) {
      activateCamera();
    } else {
      captureImage();
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-black bg-gray-100">
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
      <div className="w-11/12 max-w-lg p-6 mt-6 bg-white rounded-lg shadow-lg">
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
                className="w-full h-auto rounded-lg" // Pastikan ukuran video sesuai
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
    </div>
  );
};

export default AttendancePage;
