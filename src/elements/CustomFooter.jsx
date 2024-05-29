import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Tagline from "./Tagline";

const CustomFooter = () => {
  return (
    <div className="bg-gray-50 flex flex-col">
      <footer className=" text-[#011B4E] py-4 text-center  bottom-0 w-full  items-center px-8 sm:px-20 flex flex-col sm:flex-row gap-8  sm:gap-12 sticky h-fit">
        <Link to="/" className="logo ">
          <img src={logo} alt="Logo" className="max-w-20 sm:max-w-40 " />
        </Link>
        <div className="container w-auto mx-auto flex items-center">
          <ul className="text-[#011B4E] font-semibold flex text-sm sm:text-md gap-6 sm:gap-4 w-auto m-auto">
            <span className="flex flex-col gap-x-4 md:gap-x-8  gap-y-4 sm:flex-row">
              <li className=" cursor-pointer">Sobre Broker360</li>
              <li className=" cursor-pointer">Destinos mas buscados</li>
            </span>
            <span className="flex flex-col gap-x-4 md:gap-x-8  gap-y-4 sm:flex-row">
              <li className=" cursor-pointer">Oportunidades</li>
              <li className=" cursor-pointer">Lugares vacacionales</li>
            </span>
          </ul>
        </div>
      </footer>
      <Tagline />
    </div>
  );
};

export default CustomFooter;
