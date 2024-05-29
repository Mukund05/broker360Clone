import React, { useEffect, useRef, useState } from "react";
import propertyImg from "../assets/propertyimg.png";
import { useNavigate } from "react-router-dom";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const data = [
  propertyImg,
  propertyImg,
  propertyImg,
  propertyImg,
  propertyImg,
  propertyImg,
  propertyImg,
  propertyImg,
];

const PropertyCard = ({ heading, content, route }) => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const handlePrev = () => {
    if (slide > 0) setSlide(slide - 1);
    else setSlide(data.length - 1);
  };

  const handleNext = () => {
    if (slide < data.length - 1) setSlide(slide + 1);
    else setSlide(0);
  };

  return (
    <div className="min-w-80 sm:min-w-80 md:w-80 bg-white border border-gray-200 rounded-md shadow">
      <div className="relative">
        <div
          className="absolute shadow-2xl rounded-full p-1 left-1 text-yellow-500 cursor-pointer z-10 top-1/2"
          onClick={handlePrev}
        >
          <KeyboardArrowLeftIcon className="" />
        </div>
        <div
          className="absolute shadow-2xl rounded-full p-1 right-1 text-yellow-500 cursor-pointer z-10 top-1/2"
          onClick={handleNext}
        >
          <ChevronRightIcon className="" />
        </div>
        <div className="absolute bottom-2 left-1/3 flex gap-1 z-10">
          {data.map((data, index) => (
            <div
              className={`p-1 ${
                index === slide ? "bg-white" : "bg-[#D9D9D9] opacity-40"
              }  cursor-pointer rounded-full`}
              key={index}
              onClick={() => setSlide(index)}
            ></div>
          ))}
        </div>
        <div className="custom-container scroll-smooth flex  relative">
          {data.map((img, index) => (
            <img
              className={`rounded-t-md overflow-x-hidden min-w-80 ${
                slide === index ? "inline" : "hidden"
              }`}
              src={propertyImg}
              alt=""
              key={index}
            />
          ))}
        </div>

        <div className="bg-[#bdc2c6] p-[1px] absolute bottom-3 right-3 rounded-sm">
          <FavoriteBorderIcon className="text-[#011B4E]" />
        </div>
        <button className="text-white bg-[#6E6E70] text-sm rounded-md absolute top-3 left-3 cursor-pointer font-semibold p-2">
          Activa
        </button>
        <button className="text-white bg-[#011B4E] text-sm rounded-md absolute top-3 right-3 cursor-pointer font-semibold p-2">
          Renta temporal
        </button>
      </div>
      <div
        className="p-3 flex flex-col gap-y-1 "
        onClick={() => navigate(route)}
      >
        <div className="flex justify-between w-full items-center">
          <span className="text-[#FF9203] font-bold text-xl">258,36 MXN</span>
          <span className="text-xs text-end font-semibold text-[#6E6E70]">
            Inmobiliaria Egypt-House
          </span>
        </div>

        <span className="text-[#052682] text-md sm:text-lg font-bold">
          Casa bonita
        </span>
        <span className="text-[#6E6E70] text-sm sm:text-md">
          Casa ubicada en el centro
        </span>
        <div className="flex gap-3 items-center justify-start text-[#6D737A]">
          <div className="flex gap-2">
            <span className="font-bold text-lg">2</span>
            <BathtubIcon className="" />
          </div>
          <div className="flex gap-2">
            <span className="font-bold text-lg">3</span>
            <BedroomParentIcon className="" />
          </div>
          <div className="flex gap-2">
            <span className="font-bold text-lg">1</span>
            <DirectionsCarIcon className="" />
          </div>
        </div>
        <span className="text-[#6E6E70] text-sm sm:text-md font-semibold">
          Construcción 95.36 m²
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
