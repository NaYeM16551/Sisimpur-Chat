import React, { useState } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../../api/axios";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // For error handling
  const navigate = useNavigate(); // For navigation

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    try {
      setErrorMessage(""); // Clear previous error messages

      // Send login request
      const response = await apiClient.post("/login", {
        name: id, // Assuming "name" field as per API
        password: password,
      });

      console.log(response);

      // Redirect to dashboard on successful login
      navigate("/dashboard");
    } catch (error) {
      // Handle errors (e.g., wrong credentials)
      if (error.response) {
        setErrorMessage(
          error.response.data.message || "Login failed. Try again."
        );
      } else {
        setErrorMessage("Network error. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Sisimpur-Chat</h2>

        {/* Display Error Message */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="input-group">
          <label>Sisimpur ID</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter your ID"
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              className="password-input"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <button
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <div className="button-container">
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <Link to="/register">
            <button className="register-button">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
