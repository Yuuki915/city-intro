import React from "react";
import "../css/Food.css";

const Food = () => {
  return (
    <div class="food-haikei">
      <div className="food">
        <div>
          <h2>Food</h2>
        </div>

        <ul>
          <li class="box">
            <a href="WA-1-motsu.html">
              <img src="./img//motsunabe-main.jpeg" alt="" />
            </a>
            <p>Motsunabe</p>
          </li>
          <li class="box">
            <a href="#">
              <img src="./img//ramen-main.jpeg" alt="" />
            </a>
            <p>Ramen</p>
          </li>
          <li class="box">
            <a href="#">
              <img src="./img//mentaiko.jpeg" alt="" />
            </a>
            <p>Mentaiko</p>
          </li>
          <li class="box">
            <a href="#">
              <img src="./img//mizutaki.jpeg" alt="" />
            </a>
            <p>Mizutaki</p>
          </li>
          <li class="box">
            <a href="#">
              <img src="./img//gyouza.jpeg" alt="" />
            </a>
            <p>Tetsunabe Gyouza</p>
          </li>
          <li class="box">
            <a href="#">
              <img src="./img//yakitori.jpeg" alt="" />
            </a>
            <p>Yakitori</p>
          </li>
          <li class="box">
            <a href="#">
              <img src="./img//unagi.jpeg" alt="" />
            </a>
            <p>Unagi</p>
          </li>
          <li class="box">
            <a href="#">
              <img src="./img//ika.jpeg" alt="" />
              <p>Spuid</p>
            </a>
          </li>
          <li class="box">
            <a href="#">
              <img src="./img//gobotenudon.jpeg" alt="" />
            </a>
            <p>Goboten Udon</p>
          </li>
          <li class="box">
            <a href="#">
              <img src="./img//umegaemoti.jpeg" alt="" />
            </a>
            <p>Umegaemochi</p>
          </li>
          <li class="box">
            <a href="#">
              <img src="./img//toorimonn.jpeg" alt="" />
            </a>
            <p>Hakata Torimon</p>
          </li>
          <li class="box">
            <a href="#">
              <img src="./img//menbei.png" alt="" />
            </a>
            <p>Menbei</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Food;
