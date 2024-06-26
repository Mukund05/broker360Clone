import React, { useEffect, useState } from "react";
import CustomHeader from "../elements/CustomHeader";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropertyCard from "../elements/PropertyCard";
import Footer from "../elements/Footer";
import Api from "../Api";
import { useLocation } from "react-router-dom";

const Properties = () => {
  const location = useLocation();
  const [propData, setPropData] = useState([]);
  const [error, setError] = useState("");
  const [mapSrc, setMapSrc] = useState("");

  useEffect(() => {
    const fetchProperty = async () => {
      const searchParams = new URLSearchParams(location.search);
      const searchQuery = searchParams.get("search");
      try {
        const response = await Api.getProperties(searchQuery);
        console.log("response ", response);
        if (response.success) {
          setPropData(response?.data);
        } else {
          setError(response?.data);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProperty();
  }, [location.search]);

  useEffect(() => {
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

  return (
    <div className="bg-[#eff6ff]">
      <CustomHeader index={1} />
      <div className="py-4">
        <div className="flex gap-1 flex-col">
          <div className="flex justify-between md:w-1/2 pr-10"></div>
          <div className="flex flex-col md:flex-row gap-x-4 my-6 gap-y-8">
            <div className="w-[90%] md:w-1/2 border-xl flex justify-between mx-auto">
              <div className="overflow-hidden flex justify-end w-full">
                <iframe
                  src={mapSrc}
                  style={{ border: 0 }}
                  loading="lazy"
                  className="rounded-3xl md:rounded-s-none w-full h-[400px] md:h-[500px] overflow-hidden"
                ></iframe>
              </div>
            </div>
            <div className="md:w-3/4 flex flex-col gap-y-2 gap-x-4 pe-8 px-4">
              <div className="flex flex-wrap gap-y-4 justify-start text-[#6E6E70] gap-x-2 sm:gap-x-4">
                <div className="border border-[#6E6E70] rounded-lg p-2 bg-white relative w-fit text-xs sm:text-sm flex justify-between flex-col xs:flex-row px-5 cursor-pointer hover:bg-[#011b4e] hover:text-white">
                  <span>Ubicación</span>
                </div>
                <div className="border border-[#6E6E70] rounded-lg p-2 bg-white relative w-fit text-xs sm:text-sm flex justify-between flex-col xs:flex-row px-5 cursor-pointer hover:bg-[#011b4e] hover:text-white">
                  Operación
                </div>
                <div className="border border-[#6E6E70] rounded-lg p-2 bg-white relative w-fit cursor-pointer text-xs sm:text-sm flex justify-between flex-col xs:flex-row px-5 hover:bg-[#011b4e] hover:text-white">
                  Precio
                </div>
                <div className="border border-[#6E6E70] rounded-lg p-2 bg-white relative w-fit cursor-pointer text-xs sm:text-sm flex justify-between flex-col xs:flex-row px-5 hover:bg-[#011b4e] hover:text-white">
                  Tipo de propiedad
                </div>
                <div className="border border-[#6E6E70] rounded-lg p-2 bg-white relative w-fit cursor-pointer text-xs sm:text-sm flex justify-between flex-col xs:flex-row px-5 hover:bg-[#011b4e] hover:text-white">
                  Ordenar
                </div>
              </div>
              <div className="border-t border-[#6E6E70] my-4"></div>
              <div className="flex justify-between w-2/3 gap-x-6 items-center">
                <span className="text-[#FF9203] text-sm sm:text-md font-bold">
                  {propData
                    ? `1-${propData?.length} de ${propData?.length} propiedades`
                    : "Cargando..."}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-8 items-center w-full">
                {propData ? (
                  propData?.map((property, index) => (
                    <PropertyCard
                      key={index}
                      heading={property}
                      property={property}
                      route={`/my-property/property-details/${property}`}
                    />
                  ))
                ) : (
                  <div>Cargando propiedades...</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
