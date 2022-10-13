import React, { useState } from "react";
import Map from "./Map";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

import "../css/FoodPage.css";

const FoodPage = ({ foodItem }) => {
  const [clickedShop, setClickedShop] = useState("");
  console.log(clickedShop);
  const shops = foodItem.shops;
  const memo = foodItem.memo;
  console.log(foodItem);

  return (
    <div className="food-page">
      <Header />
      <div className="food-page-main">
        {memo === undefined ? (
          <></>
        ) : (
          <div className="memo">
            <h3>Memo</h3>
            <p>{memo}</p>
          </div>
        )}

        <div className="title-container">
          <h1 className="food-title">{foodItem.foodTitle}</h1>
          <p className="title-border"></p>
        </div>

        <Map foodItem={foodItem} setClickedShop={setClickedShop} />

        <div className="shops-container">
          <div className="title-container">
            <h2 className="foodpage-h2">Popular in Town</h2>
            <p className="title-border"></p>
          </div>

          <div className="shops">
            {shops.map((item, key) => (
              <>
                {clickedShop === item ? (
                  <div key={key} className="shop shop-chosen">
                    <p className="shop-name">{item.name}</p>
                    <div className="adds">
                      <p className="address-en">{item.addressEn}</p>
                      <p className="address-ja">{item.addressJa}</p>
                    </div>
                  </div>
                ) : (
                  <div key={key} className="shop">
                    <p className="shop-name">{item.name}</p>
                    <div className="adds">
                      <p className="address-en">{item.addressEn}</p>
                      <p className="address-ja">{item.addressJa}</p>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FoodPage;
