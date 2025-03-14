import React from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/axios";
import "./css/Dashboard.css"; // Import CSS for styling


const Dashboard = () => {
  const navigate = useNavigate(); // Navigation hook

  const handleLogout = async () => {
    try {

     
      // Call the Logout API
      await apiClient.post("/logout");

      // Remove any stored authentication data (if applicable)
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");

      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <>
    
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard!</h1>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
    </>
  );
};

export default Dashboard;
