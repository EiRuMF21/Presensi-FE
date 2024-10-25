import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import axios from "axios";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const role = useAuthStore((state) => state.role); // Get role from Zustand store

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        await axios.get("https://api-smart.curaweda.com/api/check-auth", {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
          withCredentials: true, // Ensure cookies are sent with the request
        });
        setIsAuthenticated(true); // Authentication successful
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false); // Not authenticated
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Loading state while checking authentication
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  // Redirect based on user role
  if (role === "ADMIN") {
    return <Navigate to="/admin" />;
  } else if (role === "USER") {
    return <Navigate to="/home" />;
  }

  return <>{children}</>; // Render children (the protected content) if no redirection is needed
};

export default ProtectedRoute;
