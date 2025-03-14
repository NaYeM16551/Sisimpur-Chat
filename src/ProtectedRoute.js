import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import apiClient from "./api/axios";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null); // null = loading, true = authenticated, false = not authenticated

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await apiClient.get("/users/me", { withCredentials: true });

        if (response.status === 200 && response.data) {
          setIsAuth(true); // User is authenticated
        } else {
          setIsAuth(false); // User is not authenticated
        }
      } catch (error) {
        console.error("Auth Check Failed:", error);
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuth === null) return <div>Loading...</div>; // Show while checking
  return isAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
