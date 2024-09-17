import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/LandingPage";
import Register from "./components/layouts/Register";
import Login from "./components/layouts/Login";
import DashboardAdmin from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import ProfileSettings from "./components/layouts/ProfileSetting";
import CheckInPage from "./components/home/CheckIn";
import CheckOutPage from "./components/home/CheckOut";
import SubmissionTable from "./components/Submission/SubmissionData";
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
          path="/allsubmission"
          element={<SubmissionTable />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
