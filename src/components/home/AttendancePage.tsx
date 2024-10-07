import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  createDetector,
  SupportedModels,
  FaceLandmarksDetector,
  Keypoint,
} from "@tensorflow-models/face-landmarks-detection";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";

const AttendancePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showCamera, setShowCamera] = useState(false);
  const [isCheckIn, setIsCheckIn] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const navigate = useNavigate();

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Determine whether it's check-in or check-out time
  useEffect(() => {
    const currentHour = currentTime.getHours();
    setIsCheckIn(currentHour < 16);
  }, [currentTime]);

  // Activate the camera
  const activateCamera = async () => {
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      console.log("Video Stream:", videoStream); // Log the video stream

      if (videoRef.current) {
        videoRef.current.srcObject = videoStream;
        await new Promise((resolve) => {
          if (videoRef.current) {
            videoRef.current.onloadedmetadata = () => {
              console.log("Video metadata loaded");
              resolve(null);
            };
          }
        });
        videoRef.current.play(); // Ensure the video starts playing
      }

      setStream(videoStream);
      setShowCamera(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Could not access the camera. Please check your permissions.");
    }
  };



  // Load model and detect
  const loadModelAndDetect = async () => {
    if (!videoRef.current || !canvasRef.current) return; // Handle null case here

    // Load the model
    const model: FaceLandmarksDetector = await createDetector(
      SupportedModels.MediaPipeFaceMesh
    );

    const detect = async () => {
      if (videoRef.current?.readyState === 4) {
        const predictions = await model.estimateFaces(videoRef.current);

        const canvas = canvasRef.current;
        if (!canvas) return; // Handle the case where canvas is null

        const ctx = canvas.getContext("2d");
        if (!ctx) return; // Handle the case where context is null

        if (predictions.length > 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          predictions.forEach((prediction) => {
            const keypoints: Keypoint[] = prediction.keypoints;
            keypoints.forEach((keypoint: Keypoint) => {
              const [x, y] = [keypoint.x, keypoint.y];
              ctx.beginPath();
              ctx.arc(x, y, 1, 0, 2 * Math.PI);
              ctx.fillStyle = "red";
              ctx.fill();
            });
          });
        }
      }

      requestAnimationFrame(detect);
    };

    detect();
  };

  useEffect(() => {
    activateCamera();
    loadModelAndDetect();
  }, []);

  const handleAttendance = () => {
    if (!showCamera) {
      activateCamera();
    } else {
      captureImage();
    }
  };

  // Function to capture image from video
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

      const action = isCheckIn ? "Check-in" : "Check-out";
      console.log(`${action} at:`, currentTime.toLocaleTimeString());
      alert(`${action} successful!`);

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      navigate("/home");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-black bg-gray-100">
      {/* Navbar */}
      <div className="flex items-center justify-between w-full px-4 py-4 bg-white shadow-md">
        <button onClick={() => navigate(-1)} className="text-black">
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
      <div className="w-11/12 max-w-4xl p-6 mt-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
          {isCheckIn ? "Good Morning" : "Good Evening"}
        </h1>
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg md:text-xl lg:text-2xl">
            {currentTime.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-lg font-semibold md:text-xl lg:text-2xl">
            {currentTime.toLocaleTimeString()}
          </p>
        </div>
        <p className="mt-2 text-center text-gray-600">📍 SMKN 4 Bandung</p>

        <div className="flex justify-center mt-6">
          <div className="p-6 bg-gray-100 rounded-lg max-w-md w-full md:max-w-xl lg:max-w-2xl">
            {showCamera ? (
              <>
                <video
                  ref={videoRef}
                  className="w-full h-auto border-2 border-gray-300"
                  autoPlay
                  playsInline
                  style={{ display: showCamera ? "block" : "none" }}
                />
                <canvas
                  ref={canvasRef}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ display: "none" }} // Show this when needed for drawing
                />
              </>
            ) : (
              <img
                src="https://img.icons8.com/ios-filled/50/000000/camera.png"
                alt="Camera Icon"
                className="mx-auto"
              />
            )}
          </div>
        </div>

        <button
          onClick={handleAttendance}
          className={`w-full px-6 py-3 mt-6 font-bold text-white rounded-full md:text-lg lg:text-xl ${
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
