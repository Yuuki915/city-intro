import React, { useState } from "react";
import "../css/Map.css";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "50%",
};
const center = {
  lat: 33.587350220675916,
  lng: 130.41468731283007,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = ({ latLng }) => {
  const [markerInfo, setMarkerInfo] = useState("");
  console.log(latLng);
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={center}
      options={options}
      mapContainerClassName="map-container"
      key={process.env.REACT_GOOGLE_MAPS_API_KEY}
    >
      {latLng.map((item, key) => (
        <Marker
          key={key}
          position={{ lat: item.lat, lng: item.lng }}
          onClick={() => setMarkerInfo(item)}
        />
      ))}
      {markerInfo && (
        <InfoWindow position={{ lat: markerInfo.lat, lng: markerInfo.lng }}>
          <>
            <div>{markerInfo.name}</div>
            <button onClick={() => setMarkerInfo("")}>Close</button>
          </>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;
