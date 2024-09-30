import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/LandingPage";
import Register from "./components/layouts/Register";
import Login from "./components/layouts/Login";
import DashboardAdmin from "./pages/DashboardAdmin";
import Homepage from "./pages/Homepage";
import ProfileSettings from "./components/home/ProfileSetting";
import CheckInPage from "./components/home/CheckIn";
import CheckOutPage from "./components/home/CheckOut";
import PermissionRequests from "./components/Submission/SubmissionIzin";
import SubmissionCuti from "./components/Submission/SubmissionCuti";
import SubmissionDinas from "./components/Submission/SubmissionDinas";
import SubmissionSakit from "./components/Submission/SubmissionSakit";
import ProtectedRoute from "./ProtectedRouteComponent";
import FaceData from "./components/FaceData"
import UserData from "./components/UserData";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Halaman yang boleh diakses tanpa login */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/FaceData" element={<FaceData/>} />
        <Route path="/UserData" element={<UserData/>} />

        {/* Halaman yang dilindungi: hanya bisa diakses jika sudah login */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/check-in"
          element={
            <ProtectedRoute>
              <CheckInPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/check-out"
          element={
            <ProtectedRoute>
              <CheckOutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Submissionizin"
          element={
            <ProtectedRoute>
              <PermissionRequests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Submissionsakit"
          element={
            <ProtectedRoute>
              <SubmissionSakit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Submissioncuti"
          element={
            <ProtectedRoute>
              <SubmissionCuti />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Submissiondinas"
          element={
            <ProtectedRoute>
              <SubmissionDinas />
            </ProtectedRoute>
          }
        />

        {/* Redirect ke halaman login jika mencoba mengakses rute yang tidak ada */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
