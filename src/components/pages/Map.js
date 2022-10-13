import React, { useCallback, useState } from "react";
import "../css/Map.css";
import {
  GoogleMap,
  InfoWindow,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100vw",
  height: "50vh",
};
const center = {
  lat: 33.587350220675916,
  lng: 130.41468731283007,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
// const libraries = ["places"];

const Map = ({ latLng }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // libraries,
  });

  const [map, setMap] = useState(null);
  const [markerInfo, setMarkerInfo] = useState("");

  if (!isLoaded) return <div>Loading...</div>;
  // console.log(latLng);

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={{ lat: latLng[0].lat, lng: latLng[0].lng }}
      zoom={13}
      options={options}
      mapContainerClassName="map-container"
    >
      {latLng.map((item, key) => (
        <MarkerF
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
