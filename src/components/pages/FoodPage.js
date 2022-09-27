import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

import "../css/FoodPage.css";

// why making const is to avoid too many re-renders
const libraries = ["places"];

const FoodPage = ({ foodItem }) => {
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="food-page">
      <Header />
      <div>My recomendation of {foodItem.foodTitle}</div>
      <Map latLng={foodItem.shops} />
      <Footer />
    </div>
  );
};

export default FoodPage;
