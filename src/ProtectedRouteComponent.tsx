import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import axios from "axios";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const role = useAuthStore((state) => state.role); // Get role from store

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "https://api-smart.curaweda.com/api/check-auth",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // Redirect based on role
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  } else if (isAuthenticated && role === "ADMIN") {
    return <Navigate to="/admin" />;
  } else if (isAuthenticated && role === "USER") {
    return <Navigate to="/home" />;
  }

  return <>{children}</>; // Render children if no redirection
};

export default ProtectedRoute;
