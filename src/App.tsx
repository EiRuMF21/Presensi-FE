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
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Halaman yang bisa diakses tanpa login */}
        <Route
          path="/home"
          element={<Homepage />}
        />
        <Route
          path="/admin"
          element={<DashboardAdmin />}
        />
        <Route
          path="/recap"
          element={<RecapTable />}
        />
        <Route
          path="/profile"
          element={<ProfileSettings />}
        />
        <Route
          path="/attendance"
          element={<AttendancePage />}
        />
        <Route
          path="/submission"
          element={<SubmissionTable />}
        />
        <Route
          path="/facedata"
          element={<FaceData />}
        />
        <Route
          path="/usermanage"
          element={<UserManageTable />}
        />
        <Route
          path="/userdata"
          element={<UserData />}
        />
        <Route
          path="/profilesettingadmin"
          element={<ProfileSettingsAdmin />}
        />
        <Route
          path="/profilesetting"
          element={<ProfileSettings />}
        />

        {/* Redirect ke halaman login jika mencoba mengakses rute yang tidak ada */}
        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
