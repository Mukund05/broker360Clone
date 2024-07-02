import React, { useEffect } from 'react';

const Map = ({ properties }) => {
  useEffect(() => {
    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 20.5937, lng: 78.9629 }, // Center the map at a reasonable default location
      zoom: 5,
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
