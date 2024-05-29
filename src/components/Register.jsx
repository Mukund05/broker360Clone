import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Header from "../elements/Header";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setCShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleCPasswordVisibility = () => {
    setCShowPassword(!showCPassword);
  };
  const goBack = () => {
    navigate(-1); // This will take you back to the previous page/component
  };
  return (
    <div className="">
      <Header />
      <div className="bg-[#eff6ff]  ">
        <Link
          onClick={goBack}
          className="inline-flex justify-start text-[#011B4E] p-4 sm:p-8 gap-3"
        >
          <KeyboardBackspaceIcon />
          Atrás
        </Link>

        <div className="w-4/5  m-auto flex sm:px-0 md:px-16 md:inline-flex flex-col  items-center text-center gap-y-4 justify-between">
          <span className="text-[#454545] text-xl sm:text-2xl font-semibold">
            Ingresa los datos para que puedas crear tu perfil y publicar
          </span>
          <div className="flex flex-col gap-y-4 w-4/5 sm:w-1/2 lg:w-2/5">
            <label className="text-[#686868] flex justify-start font-bold">
              Email
            </label>
            <input
              placeholder="Escribe tu email"
              className="rounded-md border text-black border-black p-2 sm:p-4 bg-[#eff6ff]"
            />
            <label className="text-[#686868] flex justify-start font-bold">
              Nombre y apellido
            </label>
            <input
              placeholder="Escribe tu emnombre aquí"
              className="rounded-md border text-black border-black p-2 sm:p-4 bg-[#eff6ff]"
            />
            <label className="text-[#686868] flex justify-start font-bold">
              Teléfono
            </label>
            <input
              placeholder="Escribe tu teléfono aquí"
              className="rounded-md border text-black border-black p-2 sm:p-4 bg-[#eff6ff]"
            />
            <label className="text-[#686868] flex justify-start font-bold">
              Contraseña
            </label>
            <div className="flex items-center border rounded-md border-black bg-[#eff6ff] p-1 sm:p-2">
              <TextField
                type={showPassword ? "text" : "password"}
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  placeholder: "Escribe tu contraseña",
                }}
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
                type={showCPassword ? "text" : "password"}
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  placeholder: "Repite tu contraseña",
                }}
              />
              <IconButton onClick={toggleCPasswordVisibility}>
                {showCPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
          </div>
          <button
            className="bg-[#011B4E]  text-white font-semibold py-4 px-6 sm:px-12 rounded-3xl text-md sm:text-lg w-4/5 sm:w-1/2 lg:w-2/5 "
            onClick={() => navigate("/login")}
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
