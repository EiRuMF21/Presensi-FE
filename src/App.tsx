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
import DashboardAdmin from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import ProfileSettings from "./components/layouts/ProfileSetting";
import AttendancePage from "./components/home/AttendancePage";
import SubmissionTable from "./components/admin/SubmissionData";
import RecapTable from "./components/admin/RecapTable";
import ProtectedRoute from "./ProtectedRouteComponent";
import UserManageTable from "./components/admin/UserManage";
import UserData from "./components/admin/UserData";
import FaceData from "./components/admin/FaceData";
import "./index.css";
import ProfileSettingsAdmin from "./components/layouts/ProfileSettingAdmin";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Halaman yang boleh diakses tanpa login */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/admin" element={<DashboardAdmin />} /> */}
        {/* <Route path="/home" element={<Homepage />} /> */}
        {/* <Route path="/attendance" element={<AttendancePage />} /> */}
        {/* <Route path="/datasubmission" element={<SubmissionTable />} /> */}
        {/* <Route path="/manageuser" element={<UserManageTable />} /> */}
        {/* <Route path="/userdata" element={<UserData />} /> */}
        {/* <Route path="/facedata" element={<FaceData />} /> */}
        {/* <Route path="/psa" element={<ProfileSettingsAdmin />} /> */}

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
          path="/admin"
          element={
            <ProtectedRoute>
              <DashboardAdmin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recap"
          element={
            <ProtectedRoute>
              <RecapTable />
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
          path="/attendance"
          element={
            <ProtectedRoute>
              <AttendancePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/submission"
          element={
            <ProtectedRoute>
              <SubmissionTable />
            </ProtectedRoute>
          }
        />

        <Route
          path="/facedata"
          element={
            <ProtectedRoute>
              <FaceData />
            </ProtectedRoute>
          }
        />
        <Route
          path="/usermanage"
          element={
            <ProtectedRoute>
              <UserManageTable />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userdata"
          element={
            <ProtectedRoute>
              <UserData />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profilesettingadmin"
          element={
            <ProtectedRoute>
              <ProfileSettingsAdmin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profilesetting"
          element={
            <ProtectedRoute>
              <ProfileSettings />
            </ProtectedRoute>
          }
        />

        {/* Redirect ke halaman login jika mencoba mengakses rute yang tidak ada */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
