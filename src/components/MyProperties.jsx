import React, { useEffect, useState } from "react";
import CustomHeader from "../elements/CustomHeader";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropertyCard from "../elements/PropertyCard";
import Footer from "../elements/Footer";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import API from "../Api";

const MyProperties = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [propData, setPropData] = useState(null);
  const [error, setError] = useState("");
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d50597.87088943464!2d-59.02624100016744!3d-34.096484500267904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x95bb0bd1a2b1c4af%3A0x4bb90e05802045e8!2sAv.%20Rivadavia%20942%2C%20B2800%20Z%C3%A1rate%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!3m2!1d-34.096472199999996!2d-59.0268982!4m5!1s0x95bb0bd1a2b1c4af%3A0x4bb90e05802045e8!2sAv.%20Rivadavia%20942%2C%20B2800%20Z%C3%A1rate%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!3m2!1d-34.096472199999996!2d-59.0268982!5e0!3m2!1sen!2s!4v1649050342672!5m2!1sen!2s"
  );

  const [locationFilter, setLocationFilter] = useState("");
  const [operationFilter, setOperationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("");
  const [orderFilter, setOrderFilter] = useState("");

  useEffect(() => {
    const fetchProperty = async () => {
      const user = JSON.parse(localStorage.getItem('user'));

      try {
        const response = await API.getUserProperty(user.id);
        if (response.success) {
          setPropData(response?.data);
          console.log(response.data);
        } else {
          setError(response?.data);
        }
      } catch (error) {
        setError(error.message);
      }
    };

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
            setMapSrc(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.002621439373!2d-99.137835!3d19.433795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3623b3f8af%3A0x84c459ce87c50de7!2sPlaza%20de%20la%20Constituci%C3%B3n%2C%20Centro%20Hist%C3%B3rico%2C%20Centro%2C%2006000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1623943590070!5m2!1sen!2sus"
            );
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setMapSrc(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.002621439373!2d-99.137835!3d19.433795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3623b3f8af%3A0x84c459ce87c50de7!2sPlaza%20de%20la%20Constituci%C3%B3n%2C%20Centro%20Hist%C3%B3rico%2C%20Centro%2C%2006000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1623943590070!5m2!1sen!2sus"
        );
      }
    };

    getUserLocation();
    fetchProperty();
  }, []);

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "location":
        setLocationFilter(value);
        break;
      case "operation":
        setOperationFilter(value);
        break;
      case "price":
        setPriceFilter(value);
        break;
      case "propertyType":
        setPropertyTypeFilter(value);
        break;
      case "order":
        setOrderFilter(value);
        break;
      default:
        break;
    }
  };

  const filteredProperties = propData?.filter((property) => {
    return (
      (locationFilter ? property.location.includes(locationFilter) : true) &&
      (operationFilter ? property.operation_type.includes(operationFilter) : true) &&
      (priceFilter ? property.price <= priceFilter : true) &&
      (propertyTypeFilter ? property.type.includes(propertyTypeFilter) : true)
    );
  });

  const sortedProperties = filteredProperties?.sort((a, b) => {
    switch (orderFilter) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const Modal = ({ setModal }) => {
    return (
      <div className="relative">
        <div className="fixed top-16 right-10 rounded-2xl w-3/4 md:w-1/3 bg-white z-20">
          <div className="bg-[#011B4E] text-white font-semibold rounded-t-2xl text-xl px-10 py-5 text-center">
            Artículos que te pueden interesar
          </div>
          <div className="px-8 flex flex-col gap-3 py-4 overflow-x-auto max-h-[22rem] pb-20 scrollbar-hide">
            <span className="text-black bg-[#f2f2f2] font-semibold p-3 rounded-md">
              👋 Hola. ¿En qué te puedo ayudar? Aquí algunos artículos que te
              pueden ayudar
            </span>
            <div className="flex flex-col gap-3 p-3 text-sm bg-[#f2f2f2] rounded-md">
              <span className="text-[#6E6E70] font-bold">Artículo 1</span>
              <span className="text-[#6E6E70]">
                Lorem ipsum dolor sit amet consectetur. Posuere aliquam dui
                vestibulum tellus dolor. Eros sollicitudin tortor et vulputate
                aliquam sem malesuada. Vitae ac porta ut in massa. Adipiscing
                volutpat nam venenatis scelerisque turpis pellentesque.
              </span>
            </div>

            <div className="flex flex-col gap-3 p-3 text-sm bg-[#f2f2f2] rounded-md">
              <span className="text-[#6E6E70] font-bold">Artículo 2</span>
              <span className="text-[#6E6E70]">
                Lorem ipsum dolor sit amet consectetur. Posuere aliquam dui
                vestibulum tellus dolor. Eros sollicitudin tortor et vulputate
                aliquam sem malesuada. Vitae ac porta ut in massa. Adipiscing
                volutpat nam venenatis scelerisque turpis pellentesque.
              </span>
            </div>
          </div>

          <input
            className="absolute w-full bottom-0 left-0 text-sm font-semibold text-[#737376] p-5 focus:outline-none rounded-b-2xl"
            placeholder="Busca en nuestros artículos "
          />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#eff6ff] relative">
      <div
        className="z-40 fixed bottom-4 right-10 bg-[#002F6D] flex gap-2 justify-center items-center px-4 p-2 rounded-md cursor-pointer"
        onClick={() => setModal(!modal)}
      >
        {modal ? (
          <CloseIcon className="text-white" />
        ) : (
          <OpenWithIcon className="text-white" />
        )}

        <span className="text-white text-xl font-semibold">Chat</span>
      </div>
      <CustomHeader index={0} />
      <div className="flex gap-2 py-8 flex-col md:flex-row">
        <div className="w-[90%] md:w-2/5 xl:w-1/3 border-xl flex justify-between mx-auto md:px-0">
          <div className="overflow-hidden flex justify-end w-full">
            <iframe
              src={mapSrc}
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-3xl md:rounded-s-none w-full h-[400px] md:h-[500px] overflow-hidden"
            ></iframe>
          </div>
        </div>
        <div className="px-4 py-4 flex flex-col gap-y-2">
          <div className="flex justify-start text-[#6E6E70] gap-x-2 sm:gap-x-2 flex-wrap gap-y-3">
            <button
              className="rounded-md py-3 px-2 sm:px-4 text-white bg-[#002F6D] text-xs sm:text-sm max-w-fit"
              onClick={() =>
                navigate("/my-properties/add-property/property-details")
              }
            >
              + Agregar
            </button>
            <div
              className="border border-[#6E6E70] rounded-lg p-1 xs:p-2 bg-white relative w-fit text-xs sm:text-sm flex justify-between flex-row items-center"
              onClick={() => handleFilterChange("location", "SomeLocation")}
            >
              <span>Ubicación</span>
              <KeyboardArrowUpIcon className="text-gray-500" />
            </div>
            <div
              className="border border-[#6E6E70] rounded-lg p-1 xs:p-2 bg-white relative w-fit text-xs sm:text-sm flex justify-between flex-row items-center"
              onClick={() => handleFilterChange("operation", "Sale")}
            >
              Operación
              <KeyboardArrowUpIcon className="text-gray-500" />
            </div>
            <div
              className="border border-[#6E6E70] rounded-lg p-1 xs:p-2 bg-white relative w-fit text-xs sm:text-sm flex justify-between flex-row items-center"
              onClick={() => handleFilterChange("price", 100000)}
            >
              Precio
              <KeyboardArrowUpIcon className="text-gray-500" />
            </div>
            <div
              className="border border-[#6E6E70] rounded-lg p-1 xs:p-2 bg-white relative text-xs sm:text-sm flex justify-between flex-row w-fit items-center"
              onClick={() => handleFilterChange("propertyType", "House")}
            >
              Tipo de propiedad
              <KeyboardArrowUpIcon className="text-gray-500" />
            </div>
            <div className="flex justify-start text-[#6E6E70] gap-x-2 sm:gap-x-4">
              <button
                className="rounded-xl py-3 sm:px-4 px-4 text-white bg-[#002F6D] text-xs sm:text-sm flex justify-center items-center"
                onClick={() => handleFilterChange("order", "priceAsc")}
              >
                <span className="flex justify-center items-center">Ordenar</span>
                <KeyboardArrowUpIcon className="text-white" />
              </button>
            </div>
          </div>
          <div className="border-t border-[#6E6E70] my-1"></div>

          <div className="flex justify-between w-2/3 gap-x-6 items-center">
            <span className="text-[#FF9203] text-sm sm:text-md font-bold">
              {sortedProperties
                ? `1-${sortedProperties?.length} de ${sortedProperties?.length} propiedades`
                : "Cargando..."}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-8 items-center w-full">
            {sortedProperties ? (
              sortedProperties.map((property, index) => (
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
      {modal && <Modal setModal={setModal} />}
      <Footer />
    </div>
  );
};

export default MyProperties;
