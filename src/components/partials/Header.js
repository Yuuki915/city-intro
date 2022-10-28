import React from "react";
import "../css/Partials.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = ({ isVisible }) => {
  return (
    <div className={isVisible ? "header visivle" : "header"} id="top">
      <div className="sitetitle" onClick={() => scroll.scrollToTop()}>
        <p>Yukipedia</p>
      </div>

      <nav className="ham">
        <li>
          <Link to="about" smooth={true} duration={500} className="linktag">
            About
          </Link>
        </li>
        <li>
          <Link to="food" smooth={true} duration={500} className="linktag">
            Food
          </Link>
        </li>
        <li>
          <Link to="visit" smooth={true} duration={500} className="linktag">
            Visit
          </Link>
        </li>
        <li>
          <Link to="events" smooth={true} duration={500} className="linktag">
            Events
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
