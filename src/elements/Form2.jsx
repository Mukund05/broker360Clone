import React, { useEffect, useState } from "react";
import Roundedq from "../assets/Roundedq.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Form2 = ({ propertyData, onFormDataChange }) => {
  const [active, setActive] = useState(0);
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.002621439373!2d-99.137835!3d19.433795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3623b3f8af%3A0x84c3bb8d67b5d898!2sCalle%20de%20Tacuba%2C%20Centro%20Hist%C3%B3rico%2C%20Cuauht%C3%A9moc%2C%2006000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1633987697815!5m2!1sen!2sus"
  );

  useEffect(() => {
    const updateLocation = (latitude, longitude) => {
      const location = `${latitude},${longitude}`;
      onFormDataChange({ ...propertyData, longitude_latitude: location });
      setMapSrc(
        `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_API}&q=${latitude},${longitude}`
      );
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          updateLocation(latitude, longitude);
        },
        () => {
          // User denied location access, show default location
          const defaultLatitude = 19.433795;
          const defaultLongitude = -99.137835;
          updateLocation(defaultLatitude, defaultLongitude);
        }
      );
    } else {
      // Geolocation not supported, show default location
      const defaultLatitude = 19.433795;
      const defaultLongitude = -99.137835;
      updateLocation(defaultLatitude, defaultLongitude);
    }
  }, []);

  const trimAddress = (address, keyword) => {
    const parts = address.split(",");
    const index = parts.findIndex(part => part.trim().toLowerCase() === keyword.toLowerCase());
    if (index !== -1) {
      return parts.slice(0, index + 1).join(", ");
    }
    return address; // return the full address if the keyword is not found
  };
  

  const handleAddLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const location = `${latitude},${longitude}`;
          onFormDataChange({ ...propertyData, longitude_latitude: location });
          setMapSrc(
            `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_API}&q=${latitude},${longitude}`
          );

          // Fetch address using Google Geolocation API
          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_API}`
            );
            const data = await response.json();
            console.log(data)
            if (data.status === "OK") {
              const address = data.results[0].formatted_address;
              // Extract components from the address
              const street = trimAddress(address,data.results[0].address_components.find(
                (component) => component.types.includes("sublocality_level_1")
              )?.long_name)
              const postal_code = data.results[0].address_components.find(
                (component) => component.types.includes("postal_code")
              )?.long_name;
              const corner_with = data.results[0].address_components.find(
                (component) => component.types.includes("administrative_area_level_1")
              )?.long_name;
              onFormDataChange({
                ...propertyData,
                street: street || "",
                postal_code: postal_code || "",
                corner_with: corner_with || "",
              });
            } else {
              console.error("Geocode API error:", data.status);
            }
          } catch (error) {
            console.error("Error fetching address:", error);
          }
        },
        (error) => {
          console.error("Error obtaining location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="w-full flex flex-col gap-5 shadow-2xl p-5 xs:p-8 sm:p-12 rounded-2xl">
      <span className="text-[#686868] font-bold text-start flex text-xl sm:text-2xl items-center">
        Ubicación <img className="px-3 w-12 h-6" src={Roundedq} />
      </span>

      <div className="flex justify-center gap-2 items-center flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Calle
          </span>
        </div>
        <div className="w-full sm:w-2/3 flex gap-3">
          <div className="p-2 px-4 flex justify-between w-2/3 border border-[#8692A6] rounded-md">
            <input
              placeholder="Calle"
              className="overflow-hidden w-full focus:outline-none"
              name="street"
              value={propertyData.street}
              onChange={(e) =>
                onFormDataChange({ ...propertyData, street: e.target.value })
              }
            />
          </div>
          <div className="p-2 px-4 flex justify-between w-2/3 border border-[#8692A6] rounded-md">
            <input
              placeholder="Número"
              className="overflow-hidden w-full focus:outline-none"
            />
          </div>
          <div className="p-2 px-4 flex justify-between w-2/3 border border-[#8692A6] rounded-md">
            <input
              placeholder="Interior"
              className="overflow-hidden w-full focus:outline-none"
              name=""

              // onChange={(e) =>
              //   onFormDataChange({
              //     ...propertyData,
              //     corner_with: e.target.value,
              //   })
              // }
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 items-center flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Esquina con
          </span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input
            type="text"
            placeholder="Ninguno"
            className="overflow-hidden w-full focus:outline-none"
            name="corner_with"
            value={propertyData.corner_with}
            onChange={(e) =>
              onFormDataChange({ ...propertyData, corner_with: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex justify-start gap-2 items-center flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Código postal
          </span>
        </div>
        <div className="p-2 px-4 flex justify-center border border-[#8692A6] rounded-md w-full sm:w-1/4">
          <input
            type="number"
            placeholder="Ninguno"
            className="overflow-hidden w-full focus:outline-none"
            name="postal_code"
            value={propertyData.postal_code}
            onChange={(e) =>
              onFormDataChange({ ...propertyData, postal_code: e.target.value })
            }
          />
        </div>
      </div>

      <div className="flex justify-center gap-2 items-center flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold"></span>
        </div>
        <div className="flex justify-between w-full sm:w-2/3 rounded-md">
          <iframe
            title="Embedded Google Map"
            src={mapSrc}
            style={{ border: 0 }}
            loading="lazy"
            className="rounded-3xl w-full h-60"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-center gap-2 items-center flex-col sm:flex-row">
        <button
          onClick={handleAddLocation}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Add Location
        </button>
      </div>
    </div>
  );
};

export default Form2;
