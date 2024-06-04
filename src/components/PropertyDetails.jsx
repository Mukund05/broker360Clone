import React, { useState, useEffect } from "react";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useNavigate } from "react-router-dom";
import earth from "../assets/earth.png";
import edit from "../assets/edit.png";
import gallery from "../assets/gallery.png";
import clock from "../assets/clock.png";
import share from "../assets/share.png";
import building from "../assets/building.png";
import m from "../assets/m.png";
import vector from "../assets/Vector.png";
import date from "../assets/date.png";
import info from "../assets/info.png";
import CloseIcon from "@mui/icons-material/Close";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "../Api";
import { CircularProgress } from "@mui/material";

const PropertyDetails = () => {
  const navigate = useNavigate();

  const notify = () =>
    toast.success(
      <div>
        <h4 className="text-green-500">Notificación</h4>
        <p>El enlace se ha copiado en el cortapapeles</p>
      </div>
    );

  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(0);
  const [grayActive, setGrayActive] = useState(null);
  const [dateModal, setDateModal] = useState(false);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const response = await Api.getProperties(); // Replace with your API endpoint
        console.log("Property Data: ", response.message);
        setProperty(response.message);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchPropertyData();
  }, []);

  const draft = () => {
    setActive(1);
    setShowModal(false);
  };

  const publish = () => {
    setActive(0);
    setShowModal(false);
  };

  const Modal = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-30 z-50">
        <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center gap-y-4">
          <div className="flex justify-end items-end w-full">
            <CloseIcon
              className="cursor-pointer"
              onClick={() => setShowModal(false)}
            />
          </div>
          <img src={info} className="flex" />
          <h2 className="text-lg font-bold mb-4 text-center">
            Estatus de publicación
          </h2>
          <div className="flex justify-center bg-[#011B4E] rounded-lg p-1">
            <button
              className={`${
                active === 0 && "bg-[#FF9203] "
              } text-white font-semibold py-2 px-3 sm:px-12 rounded-md  text-sm sm:text-lg`}
              onClick={publish}
            >
              Publicada
            </button>
            <button
              className={`${
                active === 1 && "bg-[#FF9203] "
              }  text-white font-semibold py-2 px-3 sm:px-12 rounded-md text-sm sm:text-lg`}
              onClick={draft}
            >
              Borrador
            </button>
          </div>
        </div>
      </div>
    );
  };

  const DateModal = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-30 z-50 ">
        <div className="bg-white p-6 rounded-lg flex flex-col items-start justify-center gap-y-4 sm:gap-y-8 py-10 w-3/4 md:w-1/2">
          <span className="font-semibold text-md sm:text-lg text-[#686868] text-start">
            Recordatorio
          </span>
          <input
            className="p-3 rounded-md border-[#8692A6] border w-full"
            placeholder="Agregar descripción"
          />
          <div className="flex justify-between gap-4 font-bold items-center">
            <QueryBuilderIcon className="w-8 h-8" />
            <div className="flex  justify-between p-2 rounded-md border-[#6E6E70] border w-1/3">
              <input className="flex  w-1/2" placeholder="DD" />
              <KeyboardArrowDownIcon className="flex" />
            </div>
            <div className="flex  justify-between p-2 rounded-md border-[#6E6E70] border w-1/3">
              <input className="flex  w-1/2" placeholder="MM" />
              <KeyboardArrowDownIcon className="flex" />
            </div>
            <div className="flex  justify-between p-2 rounded-md border-[#6E6E70] border w-1/3">
              <input className="flex  w-1/2" placeholder="AAAA" />
              <KeyboardArrowDownIcon className="flex" />
            </div>
          </div>
          <button
            className="bg-[#011B4E]  text-white font-semibold py-3 px-8 sm:px-12 rounded-3xl text-sm sm:text-md mx-auto"
            onClick={() => setDateModal(false)}
          >
            Programar
          </button>
          <span
            className="text-[#011B4E] text-lg sm:text-xl mx-auto font-semibold cursor-pointer"
            onClick={() => setDateModal(false)}
          >
            Cancelar
          </span>
        </div>
      </div>
    );
  };

  const goBack = () => {
    navigate(-1); // This will take you back to the previous page/component
  };

  if (!property) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-[#EFF6FF]">
      <CustomHeader index={0} />
      <ToastContainer className="w-96" />

      <div className=" mb-12">
        <Link
          onClick={goBack}
          className="inline-flex justify-start text-[#011B4E] px-8 py-4 gap-3"
        >
          <KeyboardBackspaceIcon />
          Atrás
        </Link>
        {property.map((propertyData, index) => (
          <div className="w-5/6 p-4 sm:p-8 bg-white m-auto my-5 rounded-2xl shadow-2xl flex flex-col md:flex-row  gap-6 " key={index}>
            <div className="flex flex-col gap-6 md:w-3/5">
              <img src={building} className="" />
              <div className="flex gap-1 justify-between flex-wrap md:flex-nowrap">
                <div
                  className={` ${
                    grayActive === 0 && "bg-[#d4d9e1]"
                  } hover:bg-[#d4d9e1] flex flex-col gap-1 justify-center cursor-pointer  items-center  text-center font-semibold leading-4  p-2 rounded-lg`}
                  onClick={() => {
                    setShowModal(true), setGrayActive(0);
                  }}
                >
                  <img src={earth} className="" />
                  <span className="text-[#011B4E] text-xs text-nowrap  ">
                    Cambiar estatus
                  </span>
                </div>
                <div
                  className={`${
                    grayActive === 1 && "bg-[#d4d9e1]"
                  } hover:bg-[#d4d9e1] flex flex-col gap-1 justify-center cursor-pointer  items-center w-30 text-center font-semibold leading-4 p-2 rounded-lg`}
                  onClick={() => {
                    setGrayActive(1),
                      navigate("/my-properties/add-property/property-details");
                  }}
                >
                  <img src={edit} className="w-4 text-[#011B4E]" />
                  <span className="text-[#011B4E] text-xs  ">
                    Editar detalles
                  </span>
                </div>
                <div
                  className={`${
                    grayActive === 2 && "bg-[#d4d9e1]"
                  } hover:bg-[#d4d9e1] flex flex-col gap-1 justify-center cursor-pointer  items-center w-24 text-center font-semibold leading-4 p-2 rounded-lg`}
                  onClick={() => {
                    setGrayActive(2),
                      navigate("/my-properties/add-property/add-gallery");
                  }}
                >
                  <img src={gallery} className="w-4" />
                  <span className="text-[#011B4E] text-xs ">
                    Editar galeria
                  </span>
                </div>
                <div
                  className={`${
                    grayActive === 3 && "bg-[#d4d9e1]"
                  } hover:bg-[#d4d9e1] flex flex-col gap-1 justify-center cursor-pointer  items-center w-30  leading-4 w-24 text-center font-semibold p-2 rounded-lg`}
                  onClick={() => {
                    setDateModal(true), setGrayActive(3);
                  }}
                >
                  <img src={clock} className="w-4" />
                  <span className="text-[#011B4E] text-xs ">
                    Programar recordatorio
                  </span>
                </div>
                <div
                  className={` ${
                    grayActive === 4 && "bg-[#d4d9e1]"
                  } hover:bg-[#d4d9e1] flex flex-col gap-1 justify-center cursor-pointer  items-center w-24 text-center font-semibold leading-4 p-2 rounded-lg`}
                  onClick={() => setGrayActive(4)}
                >
                  <img src={share} className="w-4" />
                  <span
                    className="text-[#011B4E] text-xs "
                    onClick={() => notify()}
                  >
                    Compartirs
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 mx-auto sm:mx-0">
              <span className="text-[#6E6E70] text-md md:text-lg font-semibold">
                {propertyData.internal_key}
              </span>
              <span className="text-[#052682] text-lg md:text-xl font-bold">
                {propertyData.ad_desc}
              </span>
              <span className="text-[#ff9203] text-md md:text-lg font-semibold">
                {propertyData?.show_price_ad ? `${propertyData?.price} MXN` : ""}
              </span>
              <span className="text-[#6e6e70] text-md md:text-lg ">
                {propertyData.street}
              </span>
              <div className="flex gap-2 items-center">
                <img src={m} className="" />
                <span className="text-md sm:text-lg text-[#454545]">
                  {propertyData.construction} m2
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <img src={vector} className="w-4 h-4 " />
                <span className="text-md sm:text-lg text-[#E5B219] font-semibold">
                  Inmobiliaria {propertyData?.id}{" "}
                  {/* Replace with actual user data */}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <img src={date} className="w-4 h-4 " />
                <span className="text-md sm:text-lg text-[#6e6e70] font-semibold">
                Creada {propertyData ? formatDate(propertyData.created_at) : ""}
                  {/* Replace with actual creation date */}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      {showModal && <Modal />}
      {dateModal && <DateModal />}
    </div>
  );
};

export default PropertyDetails;
