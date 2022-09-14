import "../css/Hero.css";
import React from "react";
import itoshima from "../images/hero/itoshima-main.jpeg";
import dazaifu from "../images/hero/dazaifu-main.jpeg";
import tower from "../images/hero/tower-main.jpeg";
import yatai from "../images/hero/yatai-main.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div class="album">
        <img class="img1" src={itoshima} alt="" />
        <img class="img2" src={dazaifu} alt="" />
        <img class="img3" src={tower} alt="" />
        <img class="img4" src={yatai} alt="" />
      </div>
      <div class="logo">FUKUOKA</div>
    </div>
  );
};

export default Hero;
