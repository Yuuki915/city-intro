import React, { useCallback, useState } from "react";
import "../css/Map.css";
import { AiFillStar } from "react-icons/ai";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Stars } from "../partials/Stars";

const mapContainerStyle = {
  width: "90vw",
  height: "50vh",
};
// const center = {
//   lat: 33.587350220675916,
//   lng: 130.41468731283007,
// };
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
// const libraries = ["places"];

const Map = ({ foodItem, setClickedShop }) => {
  const latLng = foodItem.shops;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // libraries,
  });

  const [markerInfo, setMarkerInfo] = useState("");
  setClickedShop(markerInfo);
  if (!isLoaded) return <div>Loading...</div>;
  console.log(markerInfo);
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={{ lat: latLng[0].lat, lng: latLng[0].lng }}
      zoom={12}
      options={options}
      mapContainerClassName="map-container"
    >
      {latLng.map((item, key) => (
        <MarkerF
          key={key}
          position={{ lat: item.lat, lng: item.lng }}
          icon={{
            url: `http://maps.google.com/mapfiles/ms/icons/pink-dot.png`,
            scaledSize: new window.google.maps.Size(30, 30),
          }}
          animation={2}
          onClick={() => setMarkerInfo(item)}
        />
      ))}
      {markerInfo && (
        <InfoWindowF
          position={{ lat: markerInfo.lat, lng: markerInfo.lng }}
          onCloseClick={() => {
            setMarkerInfo("");
          }}
        >
          <div className="info-window">
            <h3>{markerInfo.name}</h3>
            <div className="rate">
              <Stars rate={markerInfo.rate} />
              <p>{markerInfo.rate}</p>
            </div>
            {/* <button onClick={() => setMarkerInfo("")}>Close</button> */}
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export default Map;
