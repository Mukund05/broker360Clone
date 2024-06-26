import React, { useEffect, useState } from "react";
import logo from "../assets/logo.net.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";
import settings from "../assets/settings.png";
import edit from "../assets/edit.png";
import play from "../assets/play.png";
import question from "../assets/question.png";
import info from "../assets/info.png";
import { useAuth } from "../Auth/AuthProvider";
import Api from "../Api";

const CustomHeader = ({ index }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(index);
  const [up, setUp] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [arrowUp, setArrowUp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchqry, setSearchqry] = useState("");
  const { logOut } = useAuth();
  const { profile_url, name } = JSON.parse(
    localStorage.getItem("user") || null
  );

  const setIndex = (index) => {
    if (index == 0) navigate("/view-properties");
    else if (index == 1) navigate("/collaborations");
    else if (index == 2) navigate("/agencies");
    setActiveIndex(index);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    if (itemName === 1) {
      navigate("/view-properties");
    } else if (itemName === 2) {
      navigate("/mywebsites/use-template");
    } else if (itemName === 3) {
      navigate("/message-gateway");
    } else if (itemName === 0) {
      navigate("/my-properties");
    } else if (itemName === 4) {
      navigate("/tasks");
    }
  };

  const handleTiltIcon = () => {
    if (up) {
      setUp(false);
    } else {
      setUp(true);
    }
  };

  const handleSearch = () => {
    if (searchqry === "") {
      alert("Search Field Cannot be Empty!");
      return;
    }
    navigate(`/view-properties?search=${searchqry}`);
  };

  const Modal = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-30 z-50">
        <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center gap-y-4">
          <img src={info} className="flex" />
          <h2 className="text-lg font-bold mb-4 text-center">
            ¿Estas seguro que deseas cerrar sesión?
          </h2>
          <div className="flex justify-center">
            <button
              className=" text-[#35278c] font-bold py-2 px-4 rounded mr-4"
              onClick={() => setShowModal(false)}
            >
              No, quiero
            </button>
            <button
              className="bg-[#011B4E]  text-white font-semibold py-2 px-6 sm:px-12 rounded-3xl text-xs sm:text-md"
              onClick={logOut}
            >
              Si, quiero
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white z-30 relative">
      <div className="relative top-0 left-0 w-full flex justify-between pt-4 px-4 z-10">
        <Link to="/">
          <img src={logo} alt="error loading " className="w-32 sm:w-fit" />
        </Link>
        <ul
          className={`hidden sm:flex  justify-center p-4  gap-x-4 text-center text-xs sm:text-xs text-[#011B4E] font-bold items-center `}
        >
          <li
            className={`cursor-pointer pb-2 ${
              activeItem === 0 ? "border-b-[#FF9203] border-b-2" : ""
            } text-sm md:text-[14px]`}
            onClick={() => handleItemClick(0)}
          >
            Mis propiedades
          </li>
          <li
            className={`cursor-pointer pb-2 ${
              activeItem === 1 ? "border-b-[#FF9203] border-b-2 " : ""
            } flex gap-x-1 text-sm md:text-[14px]`}
          >
            <div
              className="flex items-center relative"
              onClick={() => handleTiltIcon()}
            >
              Bolsa inmobiliaria
            </div>
            {up ? (
              <div className="absolute bg-white  top-20 border rounded-lg py-2  w-[25%]  z-50">
                <ul className="flex flex-col gap-y-1 text-start text-sm sm:text-md ">
                  <li
                    className={`  ${
                      activeIndex === 0
                        ? "text-white bg-[#FF9203] rounded-md p-2 m-2"
                        : "text-[#6E6E70] p-2 m-2"
                    }`}
                    onClick={() => setIndex(0)}
                  >
                    Ver propiedades
                  </li>
                  <li
                    className={`  ${
                      activeIndex === 1
                        ? "text-white bg-[#FF9203] rounded-md p-2 m-2"
                        : "text-[#6E6E70] p-2 m-2"
                    }`}
                    onClick={() => setIndex(1)}
                  >
                    Ver colaboraciones
                  </li>
                  <li
                    className={`  ${
                      activeIndex === 2
                        ? "text-white bg-[#FF9203] rounded-md p-2 m-2"
                        : "text-[#6E6E70] p-2 m-2"
                    }`}
                    onClick={() => setIndex(2)}
                  >
                    Ver inmobiliarias
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
            {up ? (
              <div className="">
                <KeyboardArrowUpIcon
                  className="text-[#011B4E]"
                  onClick={() => handleTiltIcon()}
                />
              </div>
            ) : (
              <KeyboardArrowDownIcon
                className="text-[#011B4E]"
                onClick={() => handleTiltIcon()}
              />
            )}
          </li>
          <li
            className={`cursor-pointer pb-2 ${
              activeItem === 2 ? "border-b-[#FF9203] border-b-2 " : ""
            } text-sm md:text-[14px]`}
            onClick={() => {
              handleItemClick(2);
            }}
          >
            Mi sitio web
          </li>
          <li
            className={`cursor-pointer pb-2 ${
              activeItem === 3 ? "border-b-[#FF9203] border-b-2" : ""
            } text-sm md:text-[14px]`}
            onClick={() => {
              handleItemClick(3);
            }}
          >
            Buzón de mensajes
          </li>
          <li
            className={`cursor-pointer pb-2 ${
              activeItem === 4 ? "border-b-[#FF9203] border-b-2" : ""
            } text-sm md:text-[14px]`}
            onClick={() => {
              handleItemClick(4);
            }}
          >
            Tareas
          </li>
        </ul>

        <div className="flex items-center relative">
          <img
            src={
              profile_url
                ? `${import.meta.env.VITE_BASE_URL}${profile_url}`
                : `${import.meta.env.VITE_BASE_URL}/dummy.jpg`
            }
            className="h-8 w-8 rounded-full"
          />
          {arrowUp ? (
            <KeyboardArrowUpIcon
              className="text-gray-500 ml-3 cursor-pointer"
              onClick={() => setArrowUp(false)}
            />
          ) : (
            <KeyboardArrowDownIcon
              className="text-gray-500 ml-3 cursor-pointer"
              onClick={() => setArrowUp(true)}
            />
          )}

          {arrowUp ? (
            <div className="absolute bg-white  top-16 right-4 border w-60 sm:w-80   z-50 rounded-2xl">
              <div className="h-28 bg-gradient-to-b from-[#011B4E] to-[#023EB4] flex flex-row items-center rounded-t-2xl gap-x-4 px-3 sm:px-6">
                <div className="h-fit rounded-full bg-[#FF9203] flex items-center justify-center p-1">
                  <img
                    src={
                      profile_url
                        ? `${import.meta.env.VITE_BASE_URL}${profile_url}`
                        : `${import.meta.env.VITE_BASE_URL}/dummy.jpg`
                    }
                    className="h-16 w-16 rounded-full object-cover"
                    alt="Profile"
                  />
                </div>
                <div className="flex flex-col font-semibold">
                  <div className="text-white cursor-pointer">{name}</div>
                  <div
                    className="text-[#35CEFF] cursor-pointer"
                    onClick={() => navigate("/Edit-profile")}
                  >
                    Editar perfil
                  </div>
                </div>
              </div>

              <ul className="flex flex-col gap-y-3 text-start text-md sm:text-lg p-4">
                <li className="flex gap-x-2 items-center ">
                  <img src={edit} className="h-4 w-4" />{" "}
                  <span
                    className="font-semibold text-[#6E6E70] cursor-pointer"
                    onClick={() => navigate("/contactsList")}
                  >
                    Lista de contactos
                  </span>
                </li>
                <li className="flex gap-x-2 items-center border-b border-[#7E8085] pb-3">
                  <img src={settings} className="h-4 w-4" />{" "}
                  <span
                    className="font-semibold text-[#6E6E70] cursor-pointer"
                    onClick={() => navigate("/configurations")}
                  >
                    Configuraciones
                  </span>
                </li>
                <li className="flex gap-x-2 items-center">
                  <img src={question} className="h-4 w-4" />{" "}
                  <span
                    className="font-semibold text-[#6E6E70] cursor-pointer"
                    onClick={() => navigate("/help")}
                  >
                    Ayuda
                  </span>
                </li>
                <li className="flex gap-x-2 items-center">
                  <img src={play} className="h-4 w-4" />{" "}
                  <span
                    className="font-semibold text-[#6E6E70] cursor-pointer"
                    onClick={() => setShowModal(true)}
                  >
                    Cerrar sesión
                  </span>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <div className="w-2/4">
          <input
            type="text"
            placeholder="Buscar"
            className="px-4 py-2 border rounded-l-md w-4/5"
            value={searchqry}
            onChange={(e) => setSearchqry(e.target.value)}
          />
          <button
            className="bg-[#FF9203] text-white px-4 py-2 ml-2 rounded"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>
        <button
          className="ml-2 bg-[#011B4E] text-white px-4 py-2 rounded-md"
          onClick={() =>
            navigate("/my-properties/add-property/property-details")
          }
        >
          Agregar propiedad
        </button>
      </div>
      {showModal && <Modal />}
    </div>
  );
};

export default CustomHeader;
