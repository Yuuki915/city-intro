import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

import "../css/FoodPage.css";

const FoodPage = () => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;

  const center = { lat: 44, lng: -80 };

  return (
    <div className="food-page">
      <Header />
      <div>recomendation</div>
      <Map center={center} />
      <Footer />
    </div>
  );
};

export default FoodPage;
