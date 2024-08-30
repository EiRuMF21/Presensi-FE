import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./components/Register"
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
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/Submissionizin" element={<PermissionRequests/>} />
        <Route path="/Submissionsakit" element={<SubmissionSakit/>} />
        <Route path="/Submissioncuti" element={<SubmissionCuti/>} />
        <Route path="/Submissiondinas" element={<SubmissionDinas/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
