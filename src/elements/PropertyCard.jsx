import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import propertyImg from "../assets/propertyimg.png"; // Placeholder image

const PropertyCard = ({ property }) => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();
  const [imageError, setImageError] = useState({});

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handlePrev = () => {
    if (slide > 0) setSlide(slide - 1);
    else setSlide(property.images.length - 1);
  };

  const handleNext = () => {
    if (slide < property.images.length - 1) setSlide(slide + 1);
    else setSlide(0);
  };

  const handleImageError = (index) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="min-w-80 sm:min-w-80 md:w-80 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="relative">
        <div
          className="absolute shadow-2xl rounded-full p-1 left-1 text-yellow-500 cursor-pointer z-10 top-1/2 transform -translate-y-1/2"
          onClick={handlePrev}
        >
          <KeyboardArrowLeftIcon className="text-2xl" />
        </div>
        <div
          className="absolute shadow-2xl rounded-full p-1 right-1 text-yellow-500 cursor-pointer z-10 top-1/2 transform -translate-y-1/2"
          onClick={handleNext}
        >
          <ChevronRightIcon className="text-2xl" />
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
          {property.images.map((_, index) => (
            <div
              className={`p-1 ${
                index === slide ? "bg-white" : "bg-[#D9D9D9] opacity-40"
              } cursor-pointer rounded-full`}
              key={index}
              onClick={() => setSlide(index)}
            ></div>
          ))}
        </div>
        <div className="custom-container scroll-smooth flex relative">
          {(property.images.length > 0 ? property.images : [propertyImg]).map(
            (img, index) => (
              <img
                className={`rounded-t-lg overflow-x-hidden w-full h-60 object-cover ${
                  slide === index ? "block" : "hidden"
                }`}
                src={
                  imageError[index]
                    ? propertyImg
                    : property.images.length > 0
                    ? `${baseUrl}${img.url}`
                    : img
                }
                alt=""
                key={index}
                onError={() => handleImageError(index)}
              />
            )
          )}
        </div>

        <div className="bg-[#bdc2c6] p-1 absolute bottom-3 right-3 rounded-full">
          <FavoriteBorderIcon className="text-[#011B4E]" />
        </div>
        <button className="text-white bg-[#6E6E70] text-xs md:text-sm rounded-md absolute top-3 left-3 cursor-pointer font-semibold p-1 md:p-2">
          {property?.ad_type || "Tipo de anuncio"}
        </button>
        <button className="text-white bg-[#011B4E] text-xs md:text-sm rounded-md absolute top-3 right-3 cursor-pointer font-semibold p-1 md:p-2">
          {property?.operation_type || "Tipo de operación"}
        </button>
      </div>
      <div
        className="p-4 flex flex-col gap-y-2 cursor-pointer"
        onClick={() =>
          navigate(`/my-property/property-details/${property?.id || ""}`)
        }
      >
        <div className="flex justify-between items-center">
          <span className="text-[#FF9203] font-bold text-lg md:text-xl">
            {property?.show_price_ad
              ? `${property?.show_price_ad || "N/A"} MXN`
              : "Precio no disponible"}
          </span>
          <span className="text-xs md:text-sm text-end font-semibold text-[#6E6E70]">
            {property?.type || "Descripción del anuncio"}
          </span>
        </div>
        <span className="text-[#052682] text-md md:text-lg font-bold">
          {property?.ad_type || "Encabezado"}
        </span>
        <span className="text-[#6E6E70] text-sm md:text-md">
          {property?.ad_desc || "Descripción de la propiedad"}
        </span>
        <div className="flex gap-4 items-center text-[#6D737A]">
          <div className="flex gap-1 items-center">
            <BathtubIcon className="text-lg" />
            <span className="font-bold text-md md:text-lg">
              {property?.bathrooms || 0}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <BedroomParentIcon className="text-lg" />
            <span className="font-bold text-md md:text-lg">
              {property?.bedrooms || 0}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <DirectionsCarIcon className="text-lg" />
            <span className="font-bold text-md md:text-lg">
              {property?.parking_lots || 0}
            </span>
          </div>
        </div>
        <span className="text-[#6E6E70] text-sm md:text-md font-semibold">
          Construcción {property?.construction || 0} m²
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
