import React, { useState, useEffect } from "react";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  let { id } = useParams();

  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

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
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const response = await Api.getCurrentProperty(id); // Replace with your API endpoint
        setPropertyData(response.data);
        // console.log(response.message);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    const fetchGallery = async () => {
      try {
        const response = await Api.getGallery(id);
        if (response.success) {
          setImages(response.data);
        }
      } catch (error) {
        console.log("Error While Fetching gallery!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
    fetchGallery();
  }, []);

  const draft = () => {
    try {
      const response = Api.updatePropertyStatus(id, { status: 0 });
      if (response.success) {
        toast.success(
          <div>
            <h4 className="text-green-500">Notificación</h4>
            <p>Estado actualizado exitosamente</p>
          </div>
        );
        //Add navigation here if you need
      }
    } catch (error) {
      console.log(error);
    } finally {
      setActive(1);
      setShowModal(false);
    }
  };

  const publish = () => {
    try {
      const response = Api.updatePropertyStatus(id, { status: 1 });
      if (response.success) {
        toast.success(
          <div>
            <h4 className="text-green-500">Notificación</h4>
            <p>Estado actualizado exitosamente</p>
          </div>
        );
        //Add navigation here if you need
      }
    } catch (error) {
      console.log(error);
    } finally {
      setActive(0);
      setShowModal(false);
    }
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
          <img src={info} className="flex" alt="info" />
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
            className="p-3 rounded-md border-[#8692A6] border w-full focus:outline-none"
            placeholder="Agregar descripción"
          />
          <div className="flex justify-between gap-4 font-bold items-center">
            <QueryBuilderIcon className="w-8 h-8" />
            <div className="flex  justify-between p-2 rounded-md border-[#6E6E70] border w-1/3">
              <input
                className="flex  w-1/2  focus:outline-none"
                placeholder="DD"
              />
              <KeyboardArrowDownIcon className="flex" />
            </div>
            <div className="flex  justify-between p-2 rounded-md border-[#6E6E70] border w-1/3">
              <input
                className="flex  focus:outline-none  w-1/2"
                placeholder="MM"
              />
              <KeyboardArrowDownIcon className="flex" />
            </div>
            <div className="flex  justify-between p-2 rounded-md border-[#6E6E70] border w-1/3">
              <input
                className="flex   focus:outline-none w-1/2"
                placeholder="AAAA"
              />
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

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleShare = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setGrayActive(4);
    notify();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (!propertyData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Property data not found</h1>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <CustomHeader index={0} />
      <ToastContainer className="w-96" />

      <div className="mb-12 bg-[#EFF6FF]">
        <Link
          onClick={goBack}
          className="inline-flex justify-start text-[#011B4E] px-8 py-4 gap-3"
        >
          <KeyboardBackspaceIcon />
          Atrás
        </Link>

        <div className="w-5/6 p-4 sm:p-8 bg-white m-auto my-5 rounded-2xl shadow-2xl flex flex-col md:flex-row  gap-6">
          <div className="flex flex-col gap-6 md:w-3/5">
            <div className="relative flex items-center h-[300px]">
              {images.length > 0 ? (
                <img
                  src={`${import.meta.env.VITE_BASE_URL}${
                    images[currentImageIndex]?.url || "dummy.jpg"
                  }`}
                  alt="Property"
                  className="w-80 rounded-lg"
                />
              ) : (
                <img
                  src={`${import.meta.env.VITE_BASE_URL}dummy.jpg`}
                  alt="Default"
                  className="w-80 rounded-lg"
                />
              )}
              {images.length > 1 && (
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-2">
                  <button
                    className="bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={handlePreviousImage}
                  >
                    &lt;
                  </button>
                  <button
                    className="bg-black bg-opacity-50 text-white p-2 rounded-full"
                    onClick={handleNextImage}
                  >
                    &gt;
                  </button>
                </div>
              )}
            </div>
            <div className="flex gap-1 justify-between flex-wrap md:flex-nowrap">
              <div
                className={`${
                  grayActive === 0 && "bg-[#d4d9e1]"
                } hover:bg-[#d4d9e1] flex flex-col gap-1 justify-center cursor-pointer  items-center  text-center font-semibold leading-4  p-2 rounded-lg`}
                onClick={() => {
                  setShowModal(true);
                  setGrayActive(0);
                }}
              >
                <img src={earth} alt="Change Status" />
                <span className="text-[#011B4E] text-xs text-nowrap">
                  Cambiar estatus
                </span>
              </div>
              <div
                className={`${
                  grayActive === 1 && "bg-[#d4d9e1]"
                } hover:bg-[#d4d9e1] flex flex-col gap-1 justify-center cursor-pointer  items-center w-30 text-center font-semibold leading-4 p-2 rounded-lg`}
                onClick={() => {
                  setGrayActive(1);
                  navigate("/my-properties/add-property/property-details", {
                    state: { data: propertyData },
                  });
                }}
              >
                <img
                  src={edit}
                  alt="Edit Details"
                  className="w-4 text-[#011B4E]"
                />
                <span className="text-[#011B4E] text-xs">Editar detalles</span>
              </div>
              <div
                className={`${
                  grayActive === 2 && "bg-[#d4d9e1]"
                } hover:bg-[#d4d9e1] flex flex-col gap-1 justify-center cursor-pointer  items-center w-24 text-center font-semibold leading-4 p-2 rounded-lg`}
                onClick={() => {
                  setGrayActive(2);
                  navigate("/my-properties/add-property/add-gallery", {
                    state: { propertId: id },
                  });
                }}
              >
                <img src={gallery} alt="Edit Gallery" className="w-4" />
                <span className="text-[#011B4E] text-xs">Editar galeria</span>
              </div>
              <div
                className={`${
                  grayActive === 3 && "bg-[#d4d9e1]"
                } hover:bg-[#d4d9e1] flex flex-col gap-1 justify-center cursor-pointer  items-center w-30 leading-4 w-24 text-center font-semibold p-2 rounded-lg`}
                onClick={() => {
                  setDateModal(true);
                  setGrayActive(3);
                }}
              >
                <img src={clock} alt="Schedule Reminder" className="w-4" />
                <span className="text-[#011B4E] text-xs">
                  Programar recordatorio
                </span>
              </div>
              <div
                className={`${
                  grayActive === 4 && "bg-[#d4d9e1]"
                } hover:bg-[#d4d9e1] flex flex-col gap-1 justify-center cursor-pointer  items-center w-24 text-center font-semibold leading-4 p-2 rounded-lg`}
                onClick={handleShare}
              >
                <img src={share} alt="Share" className="w-4" />
                <span className="text-[#011B4E] text-xs">Compartir</span>
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
              {propertyData?.show_price_ad
                ? `${propertyData?.price || 0} MXN`
                : ""}
            </span>

            <div className="flex gap-2 items-center">
              <img src={m} alt="Size" />
              <span className="text-md sm:text-lg text-[#454545]">
                {propertyData.construction} m2
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={date} alt="Date" className="w-4 h-4" />
              <span className="text-md sm:text-lg text-[#6e6e70] font-semibold">
                Creada {propertyData ? formatDate(propertyData.created_at) : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {showModal && <Modal />}
      {dateModal && <DateModal />}
    </div>
  );
};

export default PropertyDetails;
