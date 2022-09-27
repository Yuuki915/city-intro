import React from "react";
import "../css/Map.css";
import { GoogleMap, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "50%",
};
const center = {
  lat: 33.596958,
  lng: 130.408066,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = ({ latLng }) => {
  console.log(latLng);
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
      options={options}
      mapContainerClassName="map-container"
    >
      {latLng.map((item, key) => (
        <Marker key={key} position={{ lat: item.lat, lng: item.lng }} />
      ))}
    </GoogleMap>
  );
};

export default Map;
