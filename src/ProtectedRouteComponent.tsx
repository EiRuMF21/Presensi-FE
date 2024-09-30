import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Jika user tidak punya token (belum login), redirect ke halaman login
    return <Navigate to="/login" replace />;
  }

  // Jika sudah login, render rute yang diinginkan
  return <>{children}</>;
};

export default ProtectedRoute;
