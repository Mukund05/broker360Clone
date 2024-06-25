import React, { useEffect, useState } from "react";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import building from "../assets/building.png";
import first from "../assets/first.png";
import second from "../assets/second.png";
import world from "../assets/world.png";
import phone from "../assets/phone.png";
import egypt from "../assets/egypt.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import location from "../assets/location.png";
import check from "../assets/check.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import youtube from "../assets/youtube.png";
import x from "../assets/x.png";
import more from "../assets/more.png";
import less from "../assets/less.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HandymanIcon from "@mui/icons-material/Handyman";
import PropertyCard from "../elements/PropertyCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ViewProperties = () => {
  const [box, setBox] = useState(null);
  const [mapSrc, setMapSrc] = useState("");

  useEffect(() => {
    setBox(document.querySelector(".container-carousel"));

    // Get the user's current location
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setMapSrc(
              `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_API}&q=${latitude},${longitude}`
            );
          },
          (error) => {
            console.error("Error obtaining location: ", error);
            // Use a default location if the user denies the location request
            setMapSrc(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.002621439373!2d-99.137835!3d19.433795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3623b3f8af%3A0x84c459ce87c50de7!2sPlaza%20de%20la%20Constituci%C3%B3n%2C%20Centro%20Hist%C3%B3rico%2C%20Centro%2C%2006000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1623943590070!5m2!1sen!2sus"
            );
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        // Use a default location if geolocation is not supported
        setMapSrc(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.002621439373!2d-99.137835!3d19.433795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3623b3f8af%3A0x84c459ce87c50de7!2sPlaza%20de%20la%20Constituci%C3%B3n%2C%20Centro%20Hist%C3%B3rico%2C%20Centro%2C%2006000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1623943590070!5m2!1sen!2sus"
        );
      }
    };

    getUserLocation();
  }, []);

  const handlePrev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const handleNext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  const [slideIndex, setSlideIndex] = useState(0);
  const [totalSetsOfImages] = useState(6);

  const handleMoreClick = () => {
    // Check if there are more images available to slide
    if (slideIndex < totalSetsOfImages - 1) {
      // Update slideIndex to slide to the next set of images
      setSlideIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleLessClick = () => {
    // Update slideIndex to slide to the next set of images
    setSlideIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div>
      <CustomHeader index={1} />
      <div className="bg-[#eff6ff] sm:py-4 ">
        <div className="flex px-5 justify-between gap-4 py-3">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-3xl text-[#052682]">
              Casa bonita
            </span>
            <button className="text-white bg-[#FF9203] rounded-md w-fit p-1 px-3">
              Renta temporal
            </button>
            <div className="text-[#6E6E70] flex gap-2">
              <LocationOnIcon className="" />
              <span className="text-sm font-semibold">
                578 carrera 7w Cancún, México
              </span>
            </div>
            <span className="text-[#ff9203] font-bold text-sm">
              Publicado hace 2 horas
            </span>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex justify-end gap-2 text-[#052682]">
              <div className="p-1 border border-[#FF9203] rounded-md cursor-pointer">
                <FavoriteBorderIcon className="" />
              </div>
              <div className="p-1 border border-[#FF9203] rounded-md cursor-pointer">
                <ShareIcon className="" />
              </div>
              <div className="p-1 border border-[#FF9203] rounded-md cursor-pointer">
                <PrintIcon className="" />
              </div>
            </div>
            <span className="font-bold text-3xl text-[#052682] text-end">
              500,36.00 MXN
            </span>
            <span className="text-sm font-bold text-[#6e6e70] ">/mes</span>
          </div>
        </div>
        <div className="border-t border-[#C7C7D1] m-4"></div>
        <div className="flex gap-x-6 px-4 flex-col md:flex-row gap-y-6">
          <div className="flex flex-col gap-y-6 w-full md:w-3/4  ">
            <div className="min-w-full">
              <img src={building} className="min-w-full" />
            </div>
            <div className="flex gap-x-2 overflow-hidden relative">
              {slideIndex != 0 && (
                <img
                  src={less}
                  alt="less"
                  className="absolute w-fit h-fit left-4 top-6 cursor-pointer z-50"
                  onClick={handleLessClick}
                />
              )}
              {[first, second, first, second, first, second].map(
                (image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`image-${index}`}
                    style={{
                      transform: `translateX(-${slideIndex * (100 / 2)}%)`, // Adjust 3 according to the number of images per slide
                    }}
                    className="w-28 sm:w-36 h-fit"
                  />
                )
              )}
              {slideIndex != totalSetsOfImages - 1 && (
                <img
                  src={more}
                  alt="more"
                  className="absolute w-fit h-fit right-4 top-6 cursor-pointer"
                  onClick={handleMoreClick}
                />
              )}
            </div>
            {/* <div className="absolute top-0 left-0 right-0 flex justify-center mt-4">
                <KeyboardArrowLeftIcon
                  onClick={handlePrevSlide}
                  style={{ cursor: "pointer", fontSize: "3rem" }}
                  className="rounded-full p-2 bg-white z-50"
                />
                <KeyboardArrowRightIcon
                  onClick={handleNextSlide}
                  style={{ cursor: "pointer", fontSize: "3rem" }}
                  className="rounded-full p-2 bg-white"
                />
              </div> */}
            <div className="rounded-lg  bg-white ">
              <span className="text-[#6E6E70] text-lg font-semibold p-4">
                Descripción general
              </span>
              <div className="border font-semibold text-sm rounded-lg border-[#D7D7D7] p-4 flex flex-wrap justify-center gap-12 lg:gap-4 gap-y-4 text-[#6D737A]">
                <div className="w-1/3 lg:w-1/4  flex justify-center gap-1 flex-col ">
                  <span className="">Tipo de propiedad</span>
                  <span className="">Apartamento</span>
                </div>
                <div className="w-1/3 lg:w-1/4 flex justify-start gap-2 items-center">
                  <BedroomParentIcon className="" />
                  <div className="flex justify-center gap-1 flex-col">
                    <span className="">Habitaciones</span>
                    <span className="">3</span>
                  </div>
                </div>
                <div className="w-1/3 lg:w-1/4 flex justify-start gap-2 items-center">
                  <DirectionsCarFilledIcon className="" />
                  <div className="flex justify-center gap-1 flex-col">
                    <span className="">Estacionamiento</span>
                    <span className="">2</span>
                  </div>
                </div>
                <div className="w-1/3 lg:w-1/4 flex justify-start gap-2 items-center">
                  <HandymanIcon className="" />

                  <div className="flex justify-center gap-1 flex-col">
                    <span className="">Contrucción</span>
                    <span className="">95.36 m²</span>
                  </div>
                </div>
                <div className="w-1/3 lg:w-1/4 flex justify-start gap-2 items-center">
                  <BathtubIcon className="" />

                  <div className="flex justify-center gap-1 flex-col">
                    <span className="">Baños</span>
                    <span className="">2</span>
                  </div>
                </div>
                <div className="w-1/3 lg:w-1/4 flex justify-start gap-2 items-center">
                  <CalendarTodayIcon className="" />

                  <div className="flex justify-center gap-1 flex-col">
                    <span className="">Año de construcción</span>
                    <span className="">2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-2 text-[#6d6d6d] mt-4 sm:mt-8">
              <img className="" src={location} />
              <span className="">Residencias del Sol</span>{" "}
            </div>
            <div className="border-xl w-full">
              {/* Render iframe with random map by default */}
              <div className="">
                <iframe
                  src={mapSrc}
                  className="rounded-2xl w-full h-[300px]"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="rounded-lg  bg-white ">
              <div className=" flex justify-between p-4 py-3">
                <span className="text-[#6E6E70] text-lg font-semibold ">
                  Descripción del sitio
                </span>
                <div className="justify-center gap-1 flex items-center">
                  <CalendarTodayIcon className="text-[#6E6E70]" />
                  <span className="text-[#6E6E70] text-lg font-semibold ">
                    Subido hace dos horas
                  </span>
                </div>
              </div>
              <div className="border  text-sm rounded-lg border-[#D7D7D7] p-4 flex flex-wrap justify-center gap-12 lg:gap-4 gap-y-4 text-[#6D737A]">
                Lorem ipsum dolor sit amet consectetur. Eleifend augue non donec
                orci ac ut rutrum eget. Egestas vitae a in tristique mattis amet
                tellus turpis semper. Gravida justo pellentesque amet sit
                gravida adipiscing et augue pharetra. Blandit bibendum augue
                vestibulum diam quis nec odio volutpat faucibus. Ut tristique ut
                et in nibh. Sollicitudin sed nisi eros est. Bibendum odio varius
                nullam donec nulla. Eget lacus orci eget vulputate convallis
                adipiscing. Praesent gravida tincidunt tincidunt in ut pretium
                ut. Mollis tortor a facilisis enim. At amet hendrerit turpis
                eget vitae sodales. Sit diam pharetra lacus vulputate. Etiam
                quis nullam consectetur varius. In eleifend rutrum gravida leo.
              </div>
            </div>{" "}
            <div className="rounded-lg  bg-white ">
              <div className="p-4 py-2">
                {" "}
                <span className="text-[#6E6E70] text-lg font-semibold p-4">
                  Dirección
                </span>
              </div>

              <div className="border font-semibold text-sm rounded-lg border-[#D7D7D7] p-4 flex flex-col lg:flex-row  justify-center gap-12 gap-y-4 items-center">
                <div className="w-full lg:w-1/2 flex flex-col gap-3">
                  <div className="flex justify-between text-lg">
                    <span className="text-[#6E6E70] font-semibold">Ciudad</span>
                    <span className="text-[#989B9E] font-semibold">Cancún</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-[#6E6E70] font-semibold">Estado</span>
                    <span className="text-[#989B9E] font-semibold">
                      Quintana Roo
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-[#6E6E70] font-semibold">País</span>
                    <span className="text-[#989B9E] font-semibold">México</span>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-3">
                  {" "}
                  <div className="flex justify-between text-lg">
                    <span className="text-[#6E6E70] font-semibold">Calle</span>
                    <span className="text-[#989B9E] font-semibold">
                      7124, la torre siete
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-[#6E6E70] font-semibold">
                      Esquina con
                    </span>
                    <span className="text-[#989B9E] font-semibold">
                      Tercera
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-[#6E6E70] font-semibold">
                      Código postal
                    </span>
                    <span className="text-[#989B9E] font-semibold">00554</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg  bg-white ">
              <div className="p-4 py-2">
                {" "}
                <span className="text-[#6E6E70] text-lg font-semibold p-4">
                  Detalles
                </span>
              </div>

              <div className="border font-semibold text-sm rounded-lg border-[#D7D7D7] p-4 flex flex-col lg:flex-row  justify-center gap-8 gap-y-4 items-center">
                <div className="w-full lg:w-1/2 flex flex-col gap-3">
                  <div className="flex justify-between text-lg ">
                    <span className="text-[#6E6E70] font-semibold">
                      Id de la propiedad
                    </span>
                    <span className="text-[#989B9E] font-semibold">
                      1254lki
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-[#6E6E70] font-semibold">Precio</span>
                    <span className="text-[#989B9E] font-semibold">
                      Quintana Roo
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-[#6E6E70] font-semibold">
                      Tamaño de la propiedad
                    </span>
                    <span className="text-[#989B9E] font-semibold">México</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-[#6E6E70] font-semibold">
                      Tipo de propiedad
                    </span>
                    <span className="text-[#989B9E] font-semibold">00554</span>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-3">
                  {" "}
                  <div className="flex justify-between text-lg">
                    <span className="text-[#6E6E70] font-semibold">Baños</span>
                    <span className="text-[#989B9E] font-semibold">
                      7124, la trre siete
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-[#6E6E70] font-semibold">
                      Habitaciones
                    </span>
                    <span className="text-[#989B9E] font-semibold">
                      Tercera
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-[#6E6E70] font-semibold">
                      Año de construcción
                    </span>
                    <span className="text-[#989B9E] font-semibold">México</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-[#6E6E70] font-semibold">
                      Estatus de la propiedad
                    </span>
                    <span className="text-[#989B9E] font-semibold">00554</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg  bg-white ">
              <div className="p-4 py-2">
                {" "}
                <span className="text-[#6E6E70] text-lg font-semibold p-4">
                  Características
                </span>
              </div>
              <div className="border font-semibold  rounded-lg border-[#D7D7D7] p-6 flex flex-wrap justify-center sm:justify-between  gap-10 lg:gap-4 gap-y-4 ">
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">
                    Aire acondicionado
                  </span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">Elevador</span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">Alberca</span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">Bodega</span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">
                    Mascotas permitidas
                  </span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">
                    Área de juegos infantiles
                  </span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">
                    Cocina integral
                  </span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">
                    Generador eléctrico
                  </span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">
                    Cancha de tenis
                  </span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">
                    Cuarto de servicio
                  </span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">Portero</span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">Gimnasio</span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">Elevador</span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">Seguridad</span>
                </div>
                <div className="w-fit lg:w-1/4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#686868] text-[16px]">Jacuzzi</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col">
            <div className="bg-white rounded-xl border w-full flex flex-col px-3 py-4 gap-y-3 h-fit shadow-2xl">
              <div className="border-[#002F6D]  rounded-xl  flex flex-col gap-y-2">
                <div className="flex gap-x-3">
                  <img src={egypt} />
                  <span className="text-[#011B4E] text-sm sm:text-md  cursor-pointer">
                    Inmobiliaria Egypt-House
                  </span>
                </div>{" "}
                <div className="flex gap-x-3">
                  <img src={phone} />
                  <span className="text-[#6e6e70] text-sm sm:text-md  cursor-pointer">
                    123-658-8569
                  </span>
                </div>{" "}
                <div className="flex gap-x-3">
                  <img src={world} />
                  <span className="text-[#2580Ed] text-sm sm:text-md cursor-pointer">
                    example-example.com
                  </span>
                </div>
              </div>

              <div className="border-[#002F6D] border rounded-xl p-2 flex flex-col gap-y-1 text-sm sm:text-md ">
                <span className="text-[#686868]">Email</span>
                <span className="text-[#454545]">Laura500@laura.com</span>
              </div>
              <div className="border-[#002F6D] border rounded-xl p-2 flex flex-col gap-y-1 text-sm sm:text-md  ">
                <span className="text-[#686868]">Nombre</span>
                <span className="text-[#454545]">Laura Rodriguez|</span>
              </div>
              <div className="border-[#002F6D] border rounded-xl p-2 flex flex-col gap-y-1 text-sm sm:text-md ">
                <span className="text-[#686868]">Mensaje</span>
                <span className="text-[#454545]">
                  ¡Hola! Quiero que se comuniquen conmigo por esta propiedad en
                  alquiler que vi en Broker360.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                  />
                  <span className="text-[#454545] font-semibold text-sm">
                    Acepto los Términos y Condiciones de Uso.
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <input
                    style={{
                      appearance: "none",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    className="custom-checkbox "
                    type="checkbox"
                  />
                  <span className="text-[#454545] font-semibold text-sm">
                    Acepto la Política de Privacidad.
                  </span>
                </div>
              </div>
              <div className="flex gap-5 w-full justify-center ">
                <button className="text-[#35278C] w-1/2">Llamar</button>

                <button className="bg-[#052682] w-1/2 text-white font-semibold py-2 px-4  rounded-lg text-sm sm:text-lg mx-2 ">
                  Enviar mensaje
                </button>
              </div>

              <button className="bg-[#4CAF50]  text-white font-semibold py-2 px-6 sm:px-12 rounded-lg text-sm sm:text-lg mx-2 ">
                Contactar por WhatsApp
              </button>
            </div>
            <div className="flex justify-center p-4 items-center gap-3">
              <img src={fb} className="cursor-pointer" />
              <img src={insta} className="cursor-pointer" />
              <img src={youtube} className="cursor-pointer" />
              <img src={x} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-5 px-6 py-4">
          <span className="text-[#002f6d] font-bold text-2xl ">
            Propiedades similares
          </span>
          <div
            style={{
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
            className=" flex gap-12 overflow-x-auto max-w-screen container-carousel scroll-smooth"
          >
            <div
              className="absolute shadow-2xl rounded-full p-1 left-1 text-[#002F6D] bg-white cursor-pointer z-20 top-1/2"
              onClick={handlePrev}
            >
              <KeyboardArrowLeftIcon className="" />
            </div>
            <div
              className="absolute shadow-2xl rounded-full p-1 right-1 text-[#002F6D] bg-white cursor-pointer z-20 top-1/2"
              onClick={handleNext}
            >
              <ChevronRightIcon className="" />
            </div>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewProperties;
