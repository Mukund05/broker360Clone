import React from "react";
import back from "../assets/backArrow.png";
import forward from "../assets/forwardArrow.png";
import profile from "../assets/2profile.png";
import laptop from "../assets/laptop.png";
import { useNavigate } from "react-router-dom";

const SearchHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white px-6 py-4 flex justify-center sm:justify-between ">
      <div className="border-[#D3D3D3] rounded-md font-semibold border p-2 text-sm sm:text-lg text-[#FF9203] w-1/2 sm:w-1/3 hidden sm:inline">
        Nombre del proyecto
      </div>
      <div className="flex gap-x-4 justify-between items-center">
        <div className="flex gap-x-4 justify-between items-center">
          <img src={back} className="w-6 h-6 cursor-pointer" />
          <img src={forward} className="w-4 h-4 cursor-pointer" />
          <img src={laptop} className="w-6 h-6 cursor-pointer" />
        </div>
        <input
          className="hidden md:flex p-3 bg-[#F4F4F4] rounded-md text-[#6E6E70] w-fit"
          placeholder="Guardar como borrador"
        />
        <button
          className="flex bg-[#011B4E]  text-white font-semibold py-2 px-8 sm:px-14 rounded-3xl text-xs sm:text-md"
          onClick={() => {
            navigate("/mywebsites/editwebsite");
          }}
        >
          Publicar
        </button>
        <img src={profile} className="w-8 h-8 " />
      </div>
    </div>
  );
};

export default SearchHeader;
