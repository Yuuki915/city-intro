import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

import "../css/FoodPage.css";

// why making const is to avoid too many re-renders
// const libraries = ["places"];

const FoodPage = ({ foodItem }) => {
  const { isLoaded } = useLoadScript({
    id: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // libraries,
  });
  if (!isLoaded) return <div>Loading...</div>;

  const shops = foodItem.shops;
  return (
    <div className="food-page">
      <Header />
      <div>{foodItem.foodTitle}</div>
      <Map latLng={foodItem.shops} />

      <div>
        <h3>Popular in Town</h3>
        <div>
          {shops.map((item, key) => (
            <div key={key}>
              <p>{item.name}</p>
              <p>{item.memo}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FoodPage;
