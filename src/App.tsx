import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
          path="/Login"
          element={<Login />}
        />
        <Route
          path="/admin"
          element={<DashboardAdmin />}
        />
        <Route
          path="/homepage"
          element={<Homepage />}
        />
        <Route
          path="/profile"
          element={<ProfileSettings />}
        />
        <Route
          path="/check-in"
          element={<CheckInPage />}
        />
        <Route
          path="/check-out"
          element={<CheckOutPage />}
        />
        <Route
          path="/Submissionizin"
          element={<PermissionRequests />}
        />
        <Route
          path="/Submissionsakit"
          element={<SubmissionSakit />}
        />
        <Route
          path="/Submissioncuti"
          element={<SubmissionCuti />}
        />
        <Route
          path="/Submissiondinas"
          element={<SubmissionDinas />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
