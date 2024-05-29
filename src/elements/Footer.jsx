import React from "react";
import logo from "../assets/logowhite.png";
import bgx from "../assets/bgx.png";
import bgfb from "../assets/bgfb.png";
import bginsta from "../assets/bginsta.png";
import bgyt from "../assets/bgyt.png";
import { Link } from "react-router-dom";
import Tagline from "./Tagline";

const Footer = () => {
  return (
    <div className="bg-[#002F6D] flex flex-col gap-3 ">
      <footer className="flex flex-col md:flex-row px-8 pt-6 justify-between gap-4">
        <div className="flex flex-col gap-5 p-2">
          <Link to="/" className="flex justify-center">
            <img src={logo} alt="" className="h-fit w-fit md:w-4/5" />
          </Link>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <span className="text-[#FF9203] font-semibold text-2xl">
              Contáctanos
            </span>
            <span className="text-[#ffffff] font-semibold text-sm">
              Teléfono : +123 400 123
            </span>
            <span className="text-[#ffffff] font-semibold text-sm">
              Email: example@mail.com
            </span>
          </div>
        </div>
        <div className="flex gap-5 md:gap-10 justify-center md:justify-start flex-col xs:flex-row">
          <div className="flex flex-col gap-3 justify-start items-center md:items-start">
            <span className="text-[#FF9203] font-semibold text-2xl">
              Características
            </span>
            <span className="text-[#ffffff] font-semibold text-sm cursor-pointer">
              Inicio
            </span>
            <span className="text-[#ffffff] font-semibold text-sm cursor-pointer">
              Precios
            </span>
          </div>
          <div className="flex flex-col gap-3 justify-start items-center md:items-start">
            <span className="text-[#FF9203] font-semibold text-2xl text-nowrap">
              Nuestra empresa
            </span>
            <span className="text-[#ffffff] font-semibold text-sm cursor-pointer">
              Nosotros
            </span>
            <span className="text-[#ffffff] font-semibold text-sm cursor-pointer">
              Contacto
            </span>
            <span className="text-[#ffffff] font-semibold text-sm cursor-pointer">
              Blog
            </span>
          </div>
        </div>
      </footer>
      <div className="px-8 flex justify-between flex-col md:flex-row gap-6">
        <div className="flex gap-3 justify-center md:justify-start">
          <img src={bgx} className="rounded-md cursor-pointer" />
          <img src={bginsta} className="rounded-md cursor-pointer" />
          <img src={bgyt} className="rounded-md cursor-pointer" />
          <img src={bgfb} className="rounded-md cursor-pointer" />
        </div>
        <div className="flex gap-3 justify-center md:justify-end ">
          <input
            className="bg-white p-1 text-lg font-semibold focus:outline-none rounded-md w-44 xs:w-64 lg:w-[27rem]"
            type="text"
          />
          <button className="text-white text-center bg-[#FF9203] px-8 rounded-md text-lg">
            Suscríbete
          </button>
        </div>
      </div>
      <Tagline />
    </div>
  );
};

export default Footer;
