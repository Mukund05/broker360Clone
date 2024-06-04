import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://easybroker.devprosolutions.in/api";

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to include the token in the headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

// Login
export const login = async (data) => {
  try {
    const response = await api.post("/login", data);
    // Store the token in local storage
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
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

export const forgotPassword = async (data) => {
  try {
    const response = await api.post("/forget-password", data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const resetPassword = async (data) => {
  try {
    const response = await api.post("/reset-password", data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const createContact = async (data) => {
  try {
    const response = await api.post("/contacts", data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getContacts = async () => {
  try {
    const response = await api.get("/contacts");
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await api.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateContact = async (id, data) => {
  try {
    const response = await api.put(`/contacts/${id}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getProfile = async () => {
  try {
    const response = await api.get("/current/user");
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateProfile = async (data, id) => {
  try {
    const response = await api.put(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const sendProperty = async (data) => {
  try {
    const response = await api.post("/properties", data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export const getProperties = async () => {
  try {
    const response = await api.get("/properties");
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
};

// Function to handle errors
const handleError = (error) => {
  console.error("API call failed. ", error.response?.data);
  throw error;
};

export default {
  login,
  register,
  forgotPassword,
  resetPassword,
  createContact,
  getContacts,
  deleteContact,
  updateContact,
  getProfile,
  updateProfile,
  sendProperty,
  getProperties,
};
