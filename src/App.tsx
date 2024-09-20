import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/LandingPage";
import Register from "./components/layouts/Register";
import Login from "./components/layouts/Login";
import DashboardAdmin from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import ProfileSettings from "./components/layouts/ProfileSetting";
import AttendancePage from "./components/home/AttendancePage";
import SubmissionTable from "./components/submission/SubmissionData";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/admin"
          element={<DashboardAdmin />}
        />
        <Route
          path="/home"
          element={<Homepage />}
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
          path="/allsubmission"
          element={<SubmissionTable />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
