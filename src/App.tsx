import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./components/Register"
import DashboardAdmin from "./pages/DashboardAdmin";
import PermissionRequests from "./components/SubmissionIzin";
import SubmissionCuti from "./components/SubmissionCuti";
import SubmissionPengajuan from "./components/SubmissionPengajuan";
import "./index.css";
import SubmissionSakit from "./components/SubmissionSakit";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/SubmissionIzin" element={<PermissionRequests/>} />
        <Route path="/SubmissionSakit" element={<SubmissionSakit/>} />
        <Route path="/SubmissionCuti" element={<SubmissionCuti/>} />
        <Route path="/SubmissionPengajuan" element={<SubmissionPengajuan/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
