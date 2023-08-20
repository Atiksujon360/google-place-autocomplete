// Map.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";

const Map = () => {
  const selectedPlace = useSelector((state) => state.place.selectedPlace);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectedPlace && (
        <Marker position={selectedPlace.location}>
          <Popup>{selectedPlace.name}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
