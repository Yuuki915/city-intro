import React from "react";
import "../css/Partials.css";

const Footer = () => {
  return (
    <div className="footer">
      <div class="end">
        <div class="sitetitle">
          <a href="#top">Yukipedia</a>
        </div>
        <nav class="endnav">
          <ul>
            <li>
              <a href="#top">Top</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#food">Food</a>
            </li>
            <li>
              <a href="#visit">Visit</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
