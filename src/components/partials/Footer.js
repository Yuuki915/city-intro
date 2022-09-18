import React from "react";
import "../css/Partials.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="end">
        <div className="sitetitle">
          <p>Yukipedia</p>
        </div>
        <nav className="endnav">
          <ul>
            <li>
              <p className="linktag" onClick={() => scroll.scrollToTop()}>
                Top
              </p>
            </li>
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
              <Link
                to="events"
                smooth={true}
                duration={500}
                className="linktag"
              >
                Events
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="copywrite">&copy; Yuki</p>
    </div>
  );
};

export default Footer;
