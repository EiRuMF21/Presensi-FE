import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";
import DashboardAdmin from "./pages/DashboardAdmin";
import PermissionRequests from "./components/Submission/SubmissionIzin";
import SubmissionCuti from "./components/Submission/SubmissionCuti";
import SubmissionDinas from "./components/Submission/SubmissionDinas";
import "./index.css";
import SubmissionSakit from "./components/Submission/SubmissionSakit";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/Submissionizin" element={<PermissionRequests />} />
        <Route path="/Submissionsakit" element={<SubmissionSakit />} />
        <Route path="/Submissioncuti" element={<SubmissionCuti />} />
        <Route path="/Submissiondinas" element={<SubmissionDinas />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
