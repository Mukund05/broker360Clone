import React from "react";
import HeroImg from "../assets/hero.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${HeroImg})` }}
      ></div>
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.83) 52.14%, #FFFFFF 100%)",
        }}
      ></div>

      <div className="relative z-20 text-white text-center py-16 sm:py-24 w-3/4 flex flex-col justify-center m-auto items-center gap-y-4 sm:gap-y-8">
        <h1 className="text-xl xs:text-2xl sm:text-4xl font-bold mb-4 text-[#011B4E] sm:leading-10  md:px-20">
          La plataforma dedicada a los profesionales del sector inmobiliario
        </h1>
        <h4 className="text-sm xs:text-md sm:text-lg text-[#ff9203] font-semibold ">
          Envía de manera rápida y eficiente tus listados de propiedades a tus
          clientes y colegas del ámbito inmobiliario con tan solo un clic
        </h4>
        <div className="flex">
          <button
            className="bg-[#011B4E]  text-white font-semibold py-2 px-2 sm:px-5 rounded-2xl text-xs sm:text-md w-fit flex items-center"
            onClick={() => {
              navigate("/subscription-plans");
            }}
          >
            Comienza ahora
            <ChevronRightIcon />
          </button>
        </div>
        <h2 className="text-md sm:text-lg text-[#011B4E] font-bold ">
          Más de 10,000 asesores inmobiliarios confían en Brokers360
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
