import React from "react";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import camera from "../assets/camera.png";
import profile from "../assets/profile.png";
import google from "../assets/googleIcon.png";

const EditProfile = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // This will take you back to the previous page/component
  };
  return (
    <div className="">
      <CustomHeader />
      <div className="bg-[#eff6ff] px-4 flex flex-col md:relative ">
        <Link
          onClick={goBack}
          className="md:absolute inline-flex justify-start text-[#011B4E] my-4 mx-4 "
        >
          <KeyboardBackspaceIcon />
          Atrás
        </Link>

        <div className="w-full md:w-[90%]  m-auto flex sm:px-0   flex-col  items-center text-center gap-y-4 justify-between ">
          <div className="p-4 py-8 sm:p-12 rounded-xl shadow-2xl flex flex-col gap-y-6 bg-white items-center justify-center w-[95%] sm:w-[85%] my-4 md:my-12">
            <span className="text-xl sm:3xl text-[#002F6D] font-bold">
              Editar mi perfil
            </span>
            <div className="relative ">
              <img src={profile} className="h-20 w-20 " />
              <img src={camera} className="absolute top-14 left-14" />
            </div>
            <div className="flex gap-y-4 flex-col text-[#686868] text-sm sm:text-md w-full">
              <div className="flex justify-center items-center mx-4 sm:mx-12">
                <label className="w-28 flex justify-end ">Nombre</label>
                <input
                  className="border p-2 rounded-md border-[#8692A6] w-full ml-2"
                  placeholder="Escribe tu nombre"
                />
              </div>
              <div className="flex justify-center items-center mx-4 sm:mx-12 ">
                <label className="w-28 flex justify-end">Apellido</label>
                <input
                  className="border p-2 rounded-md border-[#8692A6] w-full   ml-2"
                  placeholder="Escribe tu apellido"
                />
              </div>
              <div className="flex justify-center items-center mx-4 sm:mx-12 ">
                <label className="w-28 flex justify-end">Email</label>
                <input
                  className="border p-2 rounded-md border-[#8692A6] w-full  ml-2"
                  placeholder="Escribe tu email"
                />
              </div>
              <div className="flex justify-center items-center mx-4 sm:mx-12">
                <label className="w-28 flex justify-end">Inmobiliaria</label>
                <input
                  className="border p-2 rounded-md border-[#8692A6] w-full  ml-2"
                  placeholder="Escribe  el nombre de tu inmobiliaria"
                />
              </div>
              <div className="flex  justify-center items-center mx-4 sm:mx-12  ">
                <label className="w-24 flex justify-end">Teléfono</label>
                <div className="flex justify-center flex-col sm:flex-row  gap-y-3  ml-2 gap-x-2 w-full">
                  <input
                    className="border p-2 rounded-md border-[#8692A6] w-full ml-2"
                    placeholder="12589654"
                  />
                  <input
                    className="border p-2 rounded-md border-[#8692A6] w-full ml-2"
                    placeholder="Cambiar"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center mx-4 sm:mx-12 ">
                <label className="w-28 flex justify-end">Idioma</label>
                <input
                  className="border p-2 rounded-md border-[#8692A6] w-full  ml-2"
                  placeholder="Seleccionar"
                />
              </div>{" "}
              <div className="flex justify-center items-center mx-4 sm:mx-12 ">
                <label className="w-28 flex justify-end  text-wrap sm:text-nowrap">
                  Huso horario
                </label>
                <input
                  className="border p-2 rounded-md border-[#8692A6] w-full  ml-2"
                  placeholder="(GMT-05:00) Bógota"
                />
              </div>
              <div className="flex justify-center items-start mx-4 sm:mx-7 ">
                <label className="w-28 flex justify-end text-right sm:text-nowrap">
                  Firma de tus emails
                </label>
                <textarea
                  className="border p-2 rounded-md border-[#8692A6] w-full  ml-2"
                  placeholder="Descripción"
                  rows={5}
                  cols={50}
                />
              </div>
              <div className="flex sm:flex-row flex-col justify-center items-center mx-4 sm:mx-12 ">
                <label className="w-28 flex justify-center sm:justify-end text-right text-nowrap">
                  Cuenta conectada
                </label>
                <div className=" p-2 w-full  ml-2">
                  <div className="flex gap-x-2 flex-wrap justify-between items-center md:items-center gap-y-1 px-5 text-lg">
                    <div className="w-fit flex gap-4 items-center flex-wrap justify-center text-center">
                      <img src={google} className="w-20 h-6" />
                      <span className="text-black text-sm lg:text-lg">
                        example@example.com
                      </span>
                    </div>
                    <span className="cursor-pointer underline text-[#011B4E] flex items-center justify-center text-center w-auto mx-auto text-sm lg:text-lg">
                      Desconectar
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mx-4 sm:mx-12 ">
                <label className="w-28 flex justify-end text-right sm:text-nowrap">
                  Nueva contraseña
                </label>
                <input
                  className="border p-2 rounded-md border-[#8692A6] w-full  ml-2"
                  placeholder="Escribe tu contraseña"
                />
              </div>
              <div className="flex justify-center items-center mx-4 sm:mx-12 ">
                <label className="w-28 flex justify-end text-right sm:text-nowrap">
                  Confirmar contraseña
                </label>
                <input
                  className="border p-2 rounded-md border-[#8692A6] w-full  ml-2"
                  placeholder="Repite la contraseña"
                />
              </div>
              <div className="flex justify-center gap-x-8 sm:gap-x-16 items-center">
                <span className="text-[#35278c] font-bold">Cancelar</span>
                <button
                  className="bg-[#011B4E]  text-white font-semibold py-3 px-6 sm:px-10 rounded-3xl text-xs sm:text-md"
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
