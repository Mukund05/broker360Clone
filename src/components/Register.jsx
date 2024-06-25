import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Header from "../elements/Header";
import api from "../Api";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setCShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleCPasswordVisibility = () => {
    setCShowPassword(!showCPassword);
  };

  const goBack = () => {
    navigate(-1); // This will take you back to the previous page/component
  };

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle register
  const handleRegister = async () => {
    // Check for empty fields
    if (!formData.email || !formData.name || !formData.phone || !formData.password || !formData.confirmPassword) {
      setError("All fields are required");
      return;
    }

    // Validate email format
    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email");
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Clear previous errors
    setError("");

    try {
      const response = await api.register({
        email: formData.email,
        name: formData.name,
        number: formData.phone,
        password: formData.password,
      });
      console.log(response);
      if (response.success) {
        navigate("/login");
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="">
      <Header />
      <div className="bg-[#eff6ff]">
        <Link
          onClick={goBack}
          className="inline-flex justify-start text-[#011B4E] p-4 sm:p-8 gap-3"
        >
          <KeyboardBackspaceIcon />
          Atrás
        </Link>

        <div className="w-4/5 m-auto flex sm:px-0 md:px-16 md:inline-flex flex-col items-center text-center gap-y-4 justify-between">
          <span className="text-[#454545] text-xl sm:text-2xl font-semibold">
            Ingresa los datos para que puedas crear tu perfil y publicar
          </span>
          <div className="flex flex-col gap-y-4 w-4/5 sm:w-1/2 lg:w-2/5">
            <label className="text-[#686868] flex justify-start font-bold">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Escribe tu email"
              className="rounded-md border text-black border-black p-2 sm:p-4 bg-[#eff6ff]"
              required
            />
            <label className="text-[#686868] flex justify-start font-bold">
              Nombre y apellido
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Escribe tu nombre aquí"
              className="rounded-md border text-black border-black p-2 sm:p-4 bg-[#eff6ff]"
              required
            />
            <label className="text-[#686868] flex justify-start font-bold">
              Teléfono
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Escribe tu teléfono aquí"
              className="rounded-md border text-black border-black p-2 sm:p-4 bg-[#eff6ff]"
              required
            />
            <label className="text-[#686868] flex justify-start font-bold">
              Contraseña
            </label>
            <div className="flex items-center border rounded-md border-black bg-[#eff6ff] p-1 sm:p-2">
              <TextField
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  placeholder: "Escribe tu contraseña",
                }}
                required
              />
              <IconButton onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            <label className="text-[#686868] flex justify-start font-bold">
              Confirmar contraseña
            </label>
            <div className="flex items-center border rounded-md border-black bg-[#eff6ff] p-1 sm:p-2">
              <TextField
                name="confirmPassword"
                type={showCPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  placeholder: "Repite tu contraseña",
                }}
                required
              />
              <IconButton onClick={toggleCPasswordVisibility}>
                {showCPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <button
            className="bg-[#011B4E] text-white font-semibold py-4 px-6 sm:px-12 rounded-3xl text-md sm:text-lg w-4/5 sm:w-1/2 lg:w-2/5"
            onClick={handleRegister}
          >
            Regístrate
          </button>
          <span className="text-xs sm:text-sm font-semibold text-[#696F79] py-4">
            Al registarme acepto los{" "}
            <span className="text-[#1565D8] underline cursor-pointer">
              términos y condiciones
            </span>{" "}
            y las políticas de privacidad
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
