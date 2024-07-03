import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://easybroker.devprosolutions.in/api/";

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
    const response = await api.post("/register", data);
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

export const getUsers = async () => {
  try {
    const response = await api.get("users");
    return response.data;
  } catch (error) {
    handleError(error)
  }
}

export const getProfile = async () => {
  try {
    const response = await api.get("/current/user");
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getUserByID = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    handleError(error)
  }
}

export const updateProfile = async (data, id) => {
  try {
    const response = await api.post(`/users/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
};

export const getProperties = async (searchQuery) => {
  try {
    const response = await api.get("/properties", {
      params: {
        s: searchQuery,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getCurrentProperty = async (id) => {
  try {
    const response = await api.get(`/properties/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getUserProperty = async (id) => {
  try {
    const response = await api.get(`/properties/${id}/user`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateProperty = async (id, data) => {
  try {
    const response = await api.put(`/properties/${id}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updatePropertyStatus = async (id, data) => {
  try {
    const response = await api.put(`/properties/${id}/status`, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const sendGallery = async (data) => {
  try {
    const response = await api.post("/properties/images", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getGallery = async (id) => {
  try {
    const response = await api.get(`/properties/${id}/images`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getUserTask = async (id) => {
  try {
    const response = await api.get(`/tasks/user/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getTask = async (id) => {
  try {
    const response = await api.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const sendTask = async (data) => {
  try {
    const response = await api.post(`/tasks`, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateTask = async (id,data) => {
  try {
    const response = await api.put(`/tasks/${id}`,data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export const removeTask = async (id) => {
  try {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export const sendMail = async (mailData) => {
  try {
    const response = await api.post(`mails`,mailData);
    return response.data;
  } catch (error) {
    handleError(error)
  }
}

export const deleteMail = async (id) => {
  try {
    const response = await api.delete(`mails/${id}`);
    return response.data;
  } catch (error) {
    handleError(error)
  }
}

export const fetchMail = async () => {
  try {
    const response= await api.get("mails");
    return response.data;
  } catch (error) {
    handleError(error)
  }
}

export const mycard = async () => {
  try {
    const response = await api.get("cards");
    return response.data;
  } catch (error) {
    handleError(error)
  }
}

export const saveCard = async (data) => {
  try {
    const response = await api.post("cards",data);
    return response.data;
  } catch (error) {
    handleError(error)
  }
}

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
  getCurrentProperty,
  sendGallery,
  getGallery,
  getUserProperty,
  updateProperty,
  updatePropertyStatus,
  getUserTask,
  getTask,
  sendTask,
  removeTask,
  updateTask,
  sendMail,
  deleteMail,
  fetchMail,
  mycard,
  saveCard,
  getUsers,
  getUserByID
};
