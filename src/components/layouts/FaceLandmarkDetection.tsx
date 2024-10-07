import { useEffect, useRef } from "react";
import {
  createDetector,
  SupportedModels,
  FaceLandmarksDetector,
  Keypoint, // Import Keypoint dari pustaka
} from "@tensorflow-models/face-landmarks-detection";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";
import "@mediapipe/face_mesh";

const FaceLandmarkDetection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const setupCamera = async () => {
      if (!videoRef.current) return;
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      await new Promise((resolve) => {
        if (videoRef.current) {
          videoRef.current.onloadedmetadata = () => resolve(null);
        }
      });
      videoRef.current.play();
    };

    const loadModelAndDetect = async () => {
      if (!videoRef.current || !canvasRef.current) return;

      // Memuat model
      const model: FaceLandmarksDetector = await createDetector(
        SupportedModels.MediaPipeFaceMesh
      );

      const detect = async () => {
        if (videoRef.current?.readyState === 4) {
          const predictions = await model.estimateFaces(videoRef.current);

          // Cetak struktur prediksi untuk debugging
          console.log("Predictions:", predictions);

          const canvas = canvasRef.current;
          if (!canvas) return;
          const ctx = canvas.getContext("2d");
          if (!ctx) return;

          if (predictions.length > 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            predictions.forEach((prediction) => {
              // Cetak setiap objek prediksi untuk melihat strukturnya
              console.log("Prediction object:", prediction);

              // Ambil keypoints dari prediksi
              const keypoints: Keypoint[] = prediction.keypoints;

              // Jika keypoints ditemukan, gambarkan di canvas
              if (keypoints) {
                keypoints.forEach((keypoint: Keypoint) => {
                  const [x, y] = [keypoint.x, keypoint.y]; // Ambil x dan y dari keypoint
                  ctx.beginPath();
                  ctx.arc(x, y, 1, 0, 2 * Math.PI);
                  ctx.fillStyle = "red";
                  ctx.fill();
                });
              } else {
                console.error(
                  "Tidak ada keypoints yang ditemukan dalam prediksi."
                );
              }
            });
          }
        }

        requestAnimationFrame(detect);
      };

      detect();
    };

    setupCamera();
    loadModelAndDetect();
  }, []);

  return (
    <div>
      <video ref={videoRef} style={{ display: "none" }} />
      <canvas ref={canvasRef} width={640} height={480} />
    </div>
  );
};

export default FaceLandmarkDetection;
