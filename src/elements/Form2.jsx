import React, { useEffect, useState, useRef } from "react";
import Roundedq from "../assets/Roundedq.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Form2 = ({ propertyData, onFormDataChange }) => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const mapRef = useRef(null);
  const updateQueue = useRef([]);

  useEffect(() => {
    const initMap = () => {
      const defaultLocation = { lat: 19.433795, lng: -99.137835 };
      const map = new window.google.maps.Map(mapRef.current, {
        center: defaultLocation,
        zoom: 15,
      });

      const marker = new window.google.maps.Marker({
        position: defaultLocation,
        map: map,
        draggable: true,
      });

      const handleLocationChange = (latLng) => {
        const latitude = latLng.lat();
        const longitude = latLng.lng();
        queueLocationUpdate(latitude, longitude);
      };

      map.addListener("click", (event) => {
        const latLng = event.latLng;
        marker.setPosition(latLng);
        handleLocationChange(latLng);
      });

      marker.addListener("dragend", (event) => {
        const latLng = event.latLng;
        handleLocationChange(latLng);
      });

      setMap(map);
      setMarker(marker);
    };

    if (window.google && window.google.maps) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_API}&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, []);

  const trimAddress = (address, keyword) => {
    const parts = address.split(",");
    const index = parts.findIndex(
      (part) => part?.trim()?.toLowerCase() === keyword?.toLowerCase()
    );
    if (index !== -1) {
      return parts.slice(0, index + 1).join(", ");
    }
    return address; // return the full address if the keyword is not found
  };

  const queueLocationUpdate = (latitude, longitude) => {
    updateQueue.current.push({ latitude, longitude });
    if (updateQueue.current.length === 1) {
      processUpdateQueue();
    }
  };

  const processUpdateQueue = async () => {
    if (updateQueue.current.length === 0) {
      return;
    }

    const { latitude, longitude } = updateQueue.current[0];

    const location = `${latitude},${longitude}`;
    console.log(location);

    // Fetch address using Google Geolocation API
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_API}`
      );
      const data = await response.json();
      if (data.status === "OK") {
        const address = data.results[0].formatted_address;
        // Extract components from the address
        const street = trimAddress(
          address,
          data.results[0].address_components.find((component) =>
            component.types.includes("sublocality_level_1")
          )?.long_name
        );
        const postal_code = data.results[0].address_components.find(
          (component) => component.types.includes("postal_code")
        )?.long_name;
        const corner_with = data.results[0].address_components.find(
          (component) => component.types.includes("administrative_area_level_1")
        )?.long_name;

        onFormDataChange({
          ...propertyData,
          longitude_latitude: location,
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

    updateQueue.current.shift();
    if (updateQueue.current.length > 0) {
      processUpdateQueue();
    }
  };

  const handleAddLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const latLng = new window.google.maps.LatLng(latitude, longitude);
          marker.setPosition(latLng);
          map.panTo(latLng);
          queueLocationUpdate(latitude, longitude);
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

      <div className="flex justify-end gap-2 items-center flex-col sm:flex-row">
        <div className="flex justify-between w-full sm:w-2/3 rounded-md">
          <div
            ref={mapRef}
            style={{ height: "300px", width: "100%" }}
            className="rounded-3xl"
          ></div>
        </div>
      </div>
      <div className="flex justify-end gap-2 items-center flex-col sm:flex-row">
        <button
          onClick={handleAddLocation}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Add Current Location
        </button>
      </div>
    </div>
  );
};

export default Form2;
