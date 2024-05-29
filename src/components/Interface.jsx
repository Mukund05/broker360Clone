import React, { useState } from "react";
import roombg from "../assets/room-bg.png";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomFooter from "../elements/CustomFooter";
import { useNavigate } from "react-router-dom";
import Footer from "../elements/Footer";

const Interface = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [number, setNumber] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const handleClickIndex = (index) => {
    setNumber(index === number ? -1 : index);
  };

  return (
    <div className="">
      <div className="relative">
        <img
          src={roombg}
          className={`${
            activeIndex === 0
              ? "mb-60 md:mb-40 lg:mb-24 "
              : activeIndex === 1
              ? "mb-[22rem] sm:mb-80 md:mb-80 lg:mb-48 "
              : activeIndex === 2
              ? "mb-[18rem] xs:mb-[20rem] sm:mb-[24rem] md:mb-[22rem] lg:mb-56"
              : ""
          } w-full`}
          alt="Room Background"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-y-2 xs:gap-y-8 sm:gap-y-16">
          <img
            src={logo}
            className="flex items-start h-20 w-40 p-4 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="flex flex-col justify-center items-center w-full xs:w-5/6 sm:w-3/4 md:w-1/2 m-auto text-center gap-y-3 xs:gap-y-6">
            <h1 className="text-[#011B4E] text-2xl xs:text-3xl font-bold sm:text-4xl">
              La manera más fácil de encontrar tu casa
            </h1>
            <div className="flex flex-col gap-y-4 w-11/12">
              <div className="flex justify-between text-center items-center bg-gray-100 p-3 rounded-xl text-xs sm:text-sm gap-x-4 text-[#595E6C] ">
                <span
                  className={`font-semibold cursor-pointer ${
                    activeIndex === 0
                      ? "rounded-md bg-[#FF9203] text-white p-2"
                      : ""
                  }`}
                  onClick={() => handleClick(0)}
                >
                  Cualquier ubicación
                </span>
                <span
                  className={`font-semibold cursor-pointer ${
                    activeIndex === 1
                      ? "rounded-md bg-[#FF9203] text-white p-2"
                      : ""
                  }`}
                  onClick={() => handleClick(1)}
                >
                  Cualquier precio
                </span>
                <span
                  className={`font-semibold  cursor-pointer ${
                    activeIndex === 2
                      ? " rounded-md bg-[#FF9203] text-white p-2"
                      : ""
                  }`}
                  onClick={() => handleClick(2)}
                >
                  Cualquier tipo
                </span>
                <img
                  src={search}
                  className="cursor-pointer"
                  onClick={() => navigate("/my-properties2")}
                />
              </div>
              <div className="bg-gray-100 rounded-2xl py-4 px-2 xs:px-6 sm:py-8 flex flex-col gap-y-8 ">
                {/* first one */}

                {activeIndex === 0 && (
                  <input
                    className="bg-white border border-[#8692A6] p-2 rounded-lg text-[#686868] w-full text-sm sm:text-md"
                    placeholder="Busca una colonia, ciudad o estado"
                  ></input>
                )}
                {/* second one */}
                {activeIndex === 1 && (
                  <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-4 text-md  sm:text-lg">
                      <span className="text-[#011B4E] text-start font-bold">
                        Tipo de operación
                      </span>
                      <ul className="flex  justify-between text-[#454545] font-semibold ">
                        <div className="w-1/3 flex items-center justify-center">
                          <li
                            onClick={() => handleClickIndex(0)}
                            className={`flex items-center cursor-pointer w-fit ${
                              number === 0
                                ? "rounded-lg bg-[#FF9203] text-white p-2"
                                : ""
                            }`}
                          >
                            Cualquiera
                          </li>
                        </div>
                        <div className="w-1/3 flex items-center justify-center">
                          <li
                            onClick={() => handleClickIndex(1)}
                            className={`flex items-center cursor-pointer w-fit ${
                              number === 1
                                ? "rounded-lg bg-[#FF9203] text-white p-2"
                                : ""
                            }`}
                          >
                            Compra
                          </li>
                        </div>
                        <div className="w-1/3 flex items-center justify-center">
                          <li
                            onClick={() => handleClickIndex(2)}
                            className={`flex items-center cursor-pointer w-fit text-[#011B4E] ${
                              number === 2
                                ? "rounded-lg bg-[#FF9203] text-white p-2"
                                : ""
                            }`}
                          >
                            Venta
                          </li>
                        </div>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-y-4 text-md  sm:text-lg">
                      <span className="text-[#011B4E] text-start font-bold">
                        Precio
                      </span>
                      <div className="flex gap-x-3 justify-between text-[#6E6E70] font-semibold text-xs xs:text-sm ">
                        <div className="relative w-1/3">
                          <input
                            className="border border-black rounded-lg w-full p-3 pr-12"
                            placeholder="Mínimo"
                          />
                        </div>
                        <div className="relative w-1/3">
                          <input
                            className="border border-black rounded-lg w-full p-3 pr-12 "
                            placeholder="Máximo"
                          />
                        </div>
                        <div className="relative w-1/3">
                          <input
                            className="border border-black rounded-lg w-full p-3 pr-12"
                            placeholder="MXN"
                          />
                          <KeyboardArrowDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* third one */}
                {activeIndex === 2 && (
                  <div className="">
                    <span className="text-start  justify-center xs:justify-start items-start flex text-md sm:text-lg font-bold text-[#011B4E]">
                      Tipo de propiedad
                    </span>
                    <div className="flex justify-start ">
                      <div className="flex flex-col gap-y-6 w-1/2">
                        <div className="flex flex-col gap-y-3 ">
                          <li className="text-md sm:text-lg font-semibold text-start text-[#6E6E70] py-3 list-disc">
                            Residencial
                          </li>
                          <div className="text-[#686868] flex flex-col gap-y-2 justify-center">
                            <div className="flex gap-x-2 ">
                              <input
                                type="checkbox"
                                style={{
                                  appearance: "none",
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  position: "relative",
                                }}
                                className="custom-checkbox "
                              />
                              <span className="font-semibold text-start">
                                Casa
                              </span>
                            </div>
                            <div className="flex gap-x-2 ">
                              <input
                                type="checkbox"
                                style={{
                                  appearance: "none",
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  position: "relative",
                                }}
                                className="custom-checkbox "
                              />
                              <span className="font-semibold text-start">
                                Casa en condominio
                              </span>
                            </div>
                            <div className="flex gap-x-2 ">
                              <input
                                type="checkbox"
                                style={{
                                  appearance: "none",
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  position: "relative",
                                }}
                                className="custom-checkbox "
                              />
                              <span className="font-semibold text-start">
                                Departamento
                              </span>
                            </div>
                            <div className="flex gap-x-2 ">
                              <input
                                type="checkbox"
                                style={{
                                  appearance: "none",
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  position: "relative",
                                }}
                                className="custom-checkbox "
                              />
                              <span className="font-semibold text-start">
                                Quinta
                              </span>
                            </div>
                            <div className="flex gap-x-2 ">
                              <input
                                type="checkbox"
                                style={{
                                  appearance: "none",
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  position: "relative",
                                }}
                                className="custom-checkbox "
                              />
                              <span className="font-semibold text-start">
                                Rancho
                              </span>
                            </div>
                            <div className="flex gap-x-2 ">
                              <input
                                type="checkbox"
                                style={{
                                  appearance: "none",
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  position: "relative",
                                }}
                                className="custom-checkbox "
                              />
                              <span className="font-semibold text-start">
                                Terreno
                              </span>
                            </div>
                            <div className="flex gap-x-2 ">
                              <input
                                type="checkbox"
                                style={{
                                  appearance: "none",
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  position: "relative",
                                }}
                                className="custom-checkbox "
                              />
                              <span className="font-semibold text-start">
                                Villa
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-y-3 ">
                          <li className="text-md sm:text-lg font-semibold text-start text-[#6E6E70] py-3 list-disc">
                            Industrial
                          </li>
                          <div className="text-[#686868] flex flex-col gap-y-2">
                            <div className="flex gap-x-2 ">
                              <input
                                type="checkbox"
                                style={{
                                  appearance: "none",
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  position: "relative",
                                }}
                                className="custom-checkbox "
                              />
                              <span className="font-semibold text-start">
                                Bodega industrial
                              </span>
                            </div>
                            <div className="flex gap-x-2 ">
                              <input
                                type="checkbox"
                                style={{
                                  appearance: "none",
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  position: "relative",
                                }}
                                className="custom-checkbox "
                              />
                              <span className="font-semibold text-start">
                                Nave industrial
                              </span>
                            </div>

                            <div className="flex gap-x-2 ">
                              <input
                                type="checkbox"
                                style={{
                                  appearance: "none",
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  position: "relative",
                                }}
                                className="custom-checkbox "
                              />
                              <span className="font-semibold text-start">
                                Terreno industrial
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-start flex-col gap-y-4  w-1/2">
                        <li className="text-md sm:text-lg font-semibold text-start text-[#6E6E70] py-3 list-disc">
                          Comercial
                        </li>
                        <div className="text-[#686868] flex flex-col gap-y-2">
                          <div className="flex gap-x-2 items-center ">
                            <input
                              type="checkbox"
                              style={{
                                appearance: "none",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "relative",
                              }}
                              className="custom-checkbox "
                            />

                            <span className="font-semibold text-start">
                              Bodega comercial
                            </span>
                          </div>
                          <div className="flex gap-x-2 ">
                            <input
                              type="checkbox"
                              style={{
                                appearance: "none",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "relative",
                              }}
                              className="custom-checkbox "
                            />
                            <span className="font-semibold text-start">
                              Casa con uso de suelo
                            </span>
                          </div>

                          <div className="flex gap-x-2 ">
                            <input
                              type="checkbox"
                              style={{
                                appearance: "none",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "relative",
                              }}
                              className="custom-checkbox "
                            />
                            <span className="font-semibold text-start">
                              Edificio
                            </span>
                          </div>
                          <div className="flex gap-x-2 ">
                            <input
                              type="checkbox"
                              style={{
                                appearance: "none",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "relative",
                              }}
                              className="custom-checkbox "
                            />
                            <span className="font-semibold text-start">
                              Huerta
                            </span>
                          </div>
                          <div className="flex gap-x-2 ">
                            <input
                              type="checkbox"
                              style={{
                                appearance: "none",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "relative",
                              }}
                              className="custom-checkbox "
                            />
                            <span className="font-semibold text-start">
                              Local
                            </span>
                          </div>
                          <div className="flex gap-x-2 ">
                            <input
                              type="checkbox"
                              style={{
                                appearance: "none",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "relative",
                              }}
                              className="custom-checkbox "
                            />
                            <span className="font-semibold text-start">
                              Local comercial
                            </span>
                          </div>
                          <div className="flex gap-x-2 ">
                            <input
                              type="checkbox"
                              style={{
                                appearance: "none",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "relative",
                              }}
                              className="custom-checkbox "
                            />
                            <span className="font-semibold text-start">
                              Local en centro comercial
                            </span>
                          </div>
                          <div className="flex gap-x-2 ">
                            <input
                              type="checkbox"
                              style={{
                                appearance: "none",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "relative",
                              }}
                              className="custom-checkbox "
                            />
                            <span className="font-semibold text-start">
                              Oficina
                            </span>
                          </div>
                          <div className="flex gap-x-2 ">
                            <input
                              type="checkbox"
                              style={{
                                appearance: "none",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "relative",
                              }}
                              className="custom-checkbox "
                            />
                            <span className="font-semibold text-start">
                              Terreno comercial
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-[#6E6E70]"></div>
      <Footer />
    </div>
  );
};

export default Interface;
