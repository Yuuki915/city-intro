import React from "react";
import Map from "./Map";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

import "../css/FoodPage.css";

const FoodPage = ({ foodItem }) => {
  const shops = foodItem.shops;
  const memo = foodItem.memo;
  console.log(shops);

  return (
    <div className="food-page">
      <Header />
      <div className="food-page-main">
        <div>{foodItem.foodTitle}</div>
        <Map latLng={foodItem.shops} />

        <div className="shops-container">
          <h2 className="foodpage-h2">Popular in Town</h2>
          <div className="shops">
            {shops.map((item, key) => (
              <div key={key} className="shop">
                <p className="shop-name">{item.name}</p>
                <div className="adds">
                  <p className="address-en">{item.addressEn}</p>
                  <p className="address-ja">{item.addressJa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FoodPage;
