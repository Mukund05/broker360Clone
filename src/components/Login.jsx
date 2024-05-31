import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import google from "../assets/google.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import api from "../Api";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const goBack = () => {
    navigate(-1); // This will take you back to the previous page/component
  };

  //handle login
  const handleLogin = async () => {
    try {
      const response = await api.login({
        email,
        password,
      });
      console.log(" response msg",response);
      if (response.success) navigate("/my-properties");
      else setError(response.message);
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="">
      <Header />
      <div className="bg-[#eff6ff] p-4 ">
        <Link
          onClick={goBack}
          className="inline-flex justify-start text-[#011B4E] p-4 sm:p-8 gap-3 "
        >
          <KeyboardBackspaceIcon />
          Atrás
        </Link>

        <div className="w-[90%] sm:w-4/5  m-auto flex sm:px-0 md:px-16 md:inline-flex flex-col  items-center text-center gap-y-4 justify-between">
          <span className="text-[#ff9203] text-2xl sm:text-4xl font-bold w-1/2 mx-auto">
            Bienvenido
          </span>
          <span className="text-[#6E6E70] text-lg sm:text-xl font-semibold  xs:w-4/5 md:w-3/5 mx-auto">
            Desde tu cuenta puedes acceder a tus favoritos, avisos que
            contactaste, búsquedas guardadas y más!{" "}
          </span>
          <div className="flex flex-col gap-y-3 w-[90%] sm:w-3/5 mx-auto sm:px-8">
            <label className="text-[#686868] flex justify-start font-bold">
              Tu email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Escribe tu email"
              className="rounded-md border text-black border-black p-2 sm:p-3 bg-[#eff6ff]"
            />
            <label className="text-[#686868] flex justify-start font-bold">
              Contraseña
            </label>
            <div className="flex items-center border rounded-md border-black bg-[#eff6ff] p-1 sm:p-2">
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  placeholder: "Ingresa tu contraseña",
                }}
              />
              <IconButton onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <button
            className="bg-[#011B4E]  text-white font-semibold py-4  sm:px-12 rounded-3xl text-md   w-1/2  mx-auto xs:px-8"
            onClick={handleLogin}
          >
            Inicia sesión
          </button>
          <span className="text-sm font-semibold text-[#696F79]">
            ¿No tienes cuenta y quieres publicar?{" "}
            <span
              className="text-[#1565D8] underline cursor-pointer  py-8"
              onClick={() => navigate("/register")}
            >
              Regístrate aquí
            </span>{" "}
            <br />
            para obtener una cuenta. ¿Olvidaste tu contraseña?{" "}
            <span
              className="text-[#1565D8] underline cursor-pointer"
              onClick={() => navigate("/forgot-password")}
            >
              Recupérala aquí
            </span>
          </span>

          <div className="w-80 flex justify-center items-center">
            <div className="flex-grow border-b border-[#686868]"></div>
            <span className="text-[#6E6E70] mx-4">or</span>
            <div className="flex-grow border-b border-[#686868]"></div>
          </div>
          <div className="flex  gap-x-2">
            <img src={google} className="w-12 sm:w-16" />
            <img src={twitter} className="w-12  sm:w-16" />
            <img src={linkedin} className="w-12  sm:w-16" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
