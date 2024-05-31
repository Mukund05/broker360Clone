import React, { useState } from "react";
import { IconButton, TextField, CircularProgress } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import api from "../Api";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleResetPassword = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await api.resetPassword({ email, otp, password });
      if (response.success) navigate("/login");
      else setError(response.message);
    } catch (err) {
      setError(err.response?.data?.error || "Reset failed. Please try again.");
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
            Ingresa el código de verificación
          </span>
          <span className="text-[#6E6E70] text-lg font-semibold md:px-14 w-[80%]">
            Ingresa el código que hemos enviado a tu correo electrónico junto con tu nueva contraseña.
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
            <label className="text-[#686868] flex justify-start font-bold">
              Código de verificación
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Ingresa el código"
              className="rounded-md border text-black border-black p-2 sm:p-4 bg-[#eff6ff]"
            />
            <label className="text-[#686868] flex justify-start font-bold">
              Nueva contraseña
            </label>
            <div className="flex items-center border rounded-md border-black bg-[#eff6ff] p-1 sm:p-2">
              <TextField
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  placeholder: "Ingresa tu nueva contraseña",
                }}
              />
              <IconButton onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
          </div>
          <span className="text-red-500 text-sm">{error}</span>
          <button
            className="bg-[#011B4E] text-white font-semibold py-3 px-6 sm:px-10 rounded-3xl text-md sm:text-lg sm:w-[60%]"
            onClick={handleResetPassword}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Restablecer contraseña"}
          </button>
          <span className="text-[#35278C] text-sm sm:text-xl font-semibold">
            Cancelar
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
