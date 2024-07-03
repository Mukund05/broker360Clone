import React, { useEffect } from 'react';

const Map = ({ properties }) => {
  useEffect(() => {
    // Check if properties array has at least one property with valid coordinates
    const initialPosition = properties.length > 0 && properties[0]?.longitude_latitude
      ? properties[0]?.longitude_latitude.split(',').map(Number)
      : [20.5937, 78.9629]; // Default to a reasonable location

    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: initialPosition[0], lng: initialPosition[1] },
      zoom: properties.length > 0 ? 10 : 6,
    });

    // Add markers for each property
    properties.forEach(property => {
      const [latitude, longitude] = property?.longitude_latitude?.split(',').map(Number);
      const marker = new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: property.name,
      });

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `<div><strong>${property.name}</strong><br>${property.address}</div>`,
      });

      marker.addListener("click", () => {
        infoWindow?.open(map, marker);
      });
    });
  }, [properties]);

  return <div id="map" className="w-full h-[400px] md:h-[500px] rounded-3xl md:rounded-s-none"></div>;
};

export default Map;
