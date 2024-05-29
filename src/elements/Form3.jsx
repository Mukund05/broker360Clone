import React from "react";
import Roundedq from "../assets/Roundedq.png";

const Form3 = () => {
  return (
    <div className="w-full flex flex-col gap-8 shadow-2xl p-5 xs:p-8 sm:p-12 rounded-2xl ">
      <span className=" gap-4 text-[#686868] font-bold text-start flex text-2xl sm:text-3xl items-center md:px-14">
        Características de la propiedad{" "}
        <img className="px-3 w-12 h-6" src={Roundedq} />
      </span>
      <div className="flex justify-center  items-start">
        <div className="w-1/3 flex justify-end ">
          <span className="text-[#686868] text-md sm:text-md font-bold py-2">
            Amenidades
          </span>
        </div>
        <div className="p-2  flex justify-center w-2/3 flex-col gap-2">
          <div className="flex gap-2 w-auto ml-5 sm:ml-20">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className=" text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Cine{" "}
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center  items-start">
        <div className="w-1/3 flex justify-end ">
          <span className="text-[#686868] text-md sm:text-md font-bold py-2">
            Exterior
          </span>
        </div>
        <div className="p-2  flex justify-center w-2/3 flex-col gap-2">
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Muelle de carga{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Acceso a la playa{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Andén{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Balcón{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Cisterna{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Frente a la playa{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Garaje{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Jardín{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Parrilla{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Patio{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Riego por aspersión{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Roof of garden{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Terraza{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Vista al mar{" "}
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center  items-start">
        <div className="w-1/3 flex justify-end ">
          <span className="text-[#686868] text-md sm:text-md font-bold py-2">
            General
          </span>
        </div>
        <div className="p-2  flex justify-center w-2/3 flex-col gap-2">
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Accesibilidad para personas con discapacidad{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Aire acondicionado{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Alarma{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Amueblado{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Bodega{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Calefacción{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Chimenea{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Circuito cerrado{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Cocina integral{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Conmutador{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Cuarto de servicio{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Elevador{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Fraccionamiento privado{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Hidroneumático{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Mascotas permitidas{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Panel solar{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Penthouse{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Generador eléctrico{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Portero{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Portero{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Recámaras en planta baja{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Seguridad{" "}
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-center  items-start">
        <div className="w-1/3 flex justify-end ">
          <span className="text-[#686868] text-md sm:text-md font-bold py-2">
            Políticas
          </span>
        </div>
        <div className="p-2  flex justify-center w-2/3 flex-col gap-2">
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              No se aceptan mascotas{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Prohibido fumar{" "}
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center  items-start">
        <div className="w-1/3 flex justify-end ">
          <span className="text-[#686868] text-md sm:text-md font-bold py-2">
            Recreación
          </span>
        </div>
        <div className="p-2  flex justify-center w-2/3 flex-col gap-2">
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Alberca{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Área de juegos infantiles{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Cancha de padel{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Cancha de tenis{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Fogatero{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Gimnasio{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Jacuzzi{" "}
            </label>
          </div>
          <div className="flex gap-2 w-auto ml-5 sm:ml-20 ">
            <input
              type="checkbox"
              style={{
                appearance: "none",
                width: "0.6rem",
                height: "0.6rem",
                position: "relative",
                marginRight: "16px",
                cursor: "pointer",
              }}
              className="custom-checkbox  "
            />
            <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
              Salón de usos múltiples{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form3;
