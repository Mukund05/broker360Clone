import axios from "axios";

const BASE_URL = "http://devprosolutions.in/broker/api";

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Login
export const login = async (data) => {
  try {
    const response = await api.post("/login", data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Register
export const register = async (data) => {
  try {
    const response = await api.post("/users", data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function to handle errors
const handleError = (error) => {
  console.error("API call failed. ", error.response?.data);
  throw error;
};

export default {
  login,
  register,
};
