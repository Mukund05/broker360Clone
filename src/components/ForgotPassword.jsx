import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton, TextField, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CustomHeader from "../elements/CustomHeader";
import CustomFooter from "../elements/CustomFooter";
import Footer from "../elements/Footer";
import api from "../Api";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = async () => {
    setLoading(true); 
    setError("");
    try {
      const response = await api.forgotPassword({
        email,
      });
      console.log("response msg", response);
      if (response.success) navigate("/reset-password");
      else setError(response.message);
    } catch (err) {
      setError(err.response?.data?.error || "Login failed. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="">
      <CustomHeader />
      <div className="bg-[#eff6ff] p-4 ">
        <div className="w-full xs:w-4/5 sm:w-2/3 md:w-2/3 m-auto flex flex-col justify-center items-center text-center gap-y-6 py-8">
          <span className="text-[#011B4E] text-2xl sm:text-3xl md:text-5xl font-bold">
            Restablece tu contraseña
          </span>
          <span className="text-[#6E6E70] text-lg font-semibold md:px-14 w-[80%]">
            Ingresa tu correo electrónico y te enviaremos un código para
            restablecer tu contraseña de acceso.{" "}
          </span>
          <div className="flex flex-col gap-y-3 sm:w-[60%]">
            <label className="text-[#686868] flex justify-start font-bold">
              Tu email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Escribe tu email"
              className="rounded-md border text-black border-black p-2 sm:p-4 bg-[#eff6ff]"
            />
          </div>
          <span className="text-red-500 text-sm">{error}</span>
          <button
            className="bg-[#011B4E]  text-white font-semibold py-3 px-6 sm:px-10 rounded-3xl text-md sm:text-lg sm:w-[60%] "
            onClick={handleForgotPassword}
            disabled={loading} // Disable button when loading
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Restablecer contraseña"}
          </button>
          <span className="text-[#35278C]  text-sm sm:text-xl font-semibold">
            Cancelar
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
