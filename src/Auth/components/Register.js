import React, { useState } from "react";
import "../css/Signup.css"; // Import the external CSS
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/axios";
function Register() {
  const [traqId, setTraqId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // Initialize navigation function

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      setSuccessMessage("");
      setErrorMessage("");

      // Make API request to register user
      const response = await apiClient.post("/users", {
        name: traqId,
        password: password,
      });

      console.log(response);

      setSuccessMessage("User registered successfully!");

      // Clear input fields
      setTraqId("");
      setPassword("");

      // Navigate to the login page after 2 seconds
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Registration failed");
      } else {
        setErrorMessage("Network error, please try again later");
      }
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <form className="signup-card" onSubmit={handleSubmit}>
        {/* Header Section */}
        <div className="signup-header">
          {/* Q icon (use an <img> if you have a specific logo) */}
          <div className="signup-logo">S</div>
          <h2 className="signup-title">Sign up</h2>
        </div>

        {/* Display messages */}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        {/* traQ ID Input */}
        <label className="input-label" htmlFor="traqId">
          Sisimpur ID
        </label>
        <input
          id="traqId"
          type="text"
          value={traqId}
          onChange={(e) => setTraqId(e.target.value)}
          className="input-field"
          placeholder="Enter your traQ ID"
          required
        />

        {/* Password Input */}
        <label className="input-label" htmlFor="password">
          password
        </label>
        <div className="password-field-wrapper">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field password-field"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            className="password-toggle"
            onClick={handleTogglePassword}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="signup-button">
          Create an account
        </button>
      </form>
    </div>
  );
}

export default Register;
