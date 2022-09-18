import React from "react";
import "../css/Map.css"
// import GoogleMapReact from "google-map-react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = ({ center }) => {
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
