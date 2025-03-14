import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL, // Automatically prepends this to all API calls
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default apiClient;
