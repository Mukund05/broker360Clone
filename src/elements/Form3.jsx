import React, { useState, useEffect } from "react";
import Roundedq from "../assets/Roundedq.png";

const Form3 = ({ propertyData, onFormDataChange }) => {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    if (propertyData.property_features) {
      const featuresArray = propertyData.property_features.split(",").map(feature => feature.trim());
      const initialCheckedItems = featuresArray.reduce((acc, feature) => {
        acc[feature] = true;
        return acc;
      }, {});
      setCheckedItems(initialCheckedItems);
    }
  }, [propertyData.property_features]);

  useEffect(() => {
    const selectedFeatures = Object.keys(checkedItems)
      .filter((key) => checkedItems[key])
      .join(", ");
    onFormDataChange({ ...propertyData, property_features: selectedFeatures });
  }, [checkedItems]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({ ...prev, [name]: checked }));
  };

  const renderCheckboxes = (items) =>
    items.map((item) => (
      <div className="flex gap-2 w-auto ml-5 sm:ml-20" key={item}>
        <input
          type="checkbox"
          name={item}
          checked={checkedItems[item] || false}
          onChange={handleCheckboxChange}
          style={{
            appearance: "none",
            width: "0.6rem",
            height: "0.6rem",
            position: "relative",
            marginRight: "16px",
            cursor: "pointer",
          }}
          className="custom-checkbox"
        />
        <label className="text-[#686868] font-semibold text-md text-start text-wrap md:flex-nowrap">
          {item}
        </label>
      </div>
    ));

  return (
    <div className="w-full flex flex-col gap-8 shadow-2xl p-5 xs:p-8 sm:p-12 rounded-2xl">
      <span className="gap-4 text-[#686868] font-bold text-start flex text-2xl sm:text-3xl items-center md:px-14">
        Características de la propiedad{" "}
        <img className="px-3 w-12 h-6" src={Roundedq} alt="icon" />
      </span>
      <div className="flex justify-center items-start">
        <div className="w-1/3 flex justify-end">
          <span className="text-[#686868] text-md sm:text-md font-bold py-2">
            Amenidades
          </span>
        </div>
        <div className="p-2 flex justify-center w-2/3 flex-col gap-2">
          {renderCheckboxes(["Cine"])}
        </div>
      </div>
      <div className="flex justify-center items-start">
        <div className="w-1/3 flex justify-end">
          <span className="text-[#686868] text-md sm:text-md font-bold py-2">
            Exterior
          </span>
        </div>
        <div className="p-2 flex justify-center w-2/3 flex-col gap-2">
          {renderCheckboxes([
            "Muelle de carga",
            "Acceso a la playa",
            "Andén",
            "Balcón",
            "Cisterna",
            "Frente a la playa",
            "Garaje",
            "Jardín",
            "Parrilla",
            "Patio",
            "Riego por aspersión",
            "Roof of garden",
            "Terraza",
            "Vista al mar",
          ])}
        </div>
      </div>
      <div className="flex justify-center items-start">
        <div className="w-1/3 flex justify-end">
          <span className="text-[#686868] text-md sm:text-md font-bold py-2">
            General
          </span>
        </div>
        <div className="p-2 flex justify-center w-2/3 flex-col gap-2">
          {renderCheckboxes([
            "Accesibilidad para personas con discapacidad",
            "Aire acondicionado",
            "Alarma",
            "Amueblado",
            "Bodega",
            "Calefacción",
            "Chimenea",
            "Circuito cerrado",
            "Cocina integral",
            "Conmutador",
            "Cuarto de servicio",
            "Elevador",
            "Fraccionamiento privado",
            "Hidroneumático",
            "Mascotas permitidas",
            "Panel solar",
            "Penthouse",
            "Generador eléctrico",
            "Portero",
            "Recámaras en planta baja",
            "Seguridad",
          ])}
        </div>
      </div>
      <div className="flex justify-center items-start">
        <div className="w-1/3 flex justify-end">
          <span className="text-[#686868] text-md sm:text-md font-bold py-2">
            Políticas
          </span>
        </div>
        <div className="p-2 flex justify-center w-2/3 flex-col gap-2">
          {renderCheckboxes(["No se aceptan mascotas", "Prohibido fumar"])}
        </div>
      </div>
      <div className="flex justify-center items-start">
        <div className="w-1/3 flex justify-end">
          <span className="text-[#686868] text-md sm:text-md font-bold py-2">
            Recreación
          </span>
        </div>
        <div className="p-2 flex justify-center w-2/3 flex-col gap-2">
          {renderCheckboxes([
            "Alberca",
            "Área de juegos infantiles",
            "Cancha de padel",
            "Cancha de tenis",
            "Fogatero",
            "Gimnasio",
            "Jacuzzi",
            "Salón de usos múltiples",
          ])}
        </div>
      </div>
    </div>
  );
};

export default Form3;
