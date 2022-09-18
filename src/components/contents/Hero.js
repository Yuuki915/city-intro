import "../css/Hero.css";
import React from "react";
import itoshima from "../images/hero/itoshima-main.jpeg";
import dazaifu from "../images/hero/dazaifu-main.jpeg";
import tower from "../images/hero/tower-main.jpeg";
import yatai from "../images/hero/yatai-main.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="album">
        <img className="img1" src={itoshima} alt="" />
        <img className="img2" src={dazaifu} alt="" />
        <img className="img3" src={tower} alt="" />
        <img className="img4" src={yatai} alt="" />
      </div>
      <div className="logo">FUKUOKA</div>
    </div>
  );
};

export default Hero;
