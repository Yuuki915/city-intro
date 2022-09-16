import React, { useEffect, useState } from "react";
import "../css/Food.css";

import useContentful from "../../useContentful";

const Food = () => {
  const { getFood } = useContentful();
  const [food, setFood] = useState([]);

  useEffect(() => {
    getFood().then((res) => setFood(res));
  }, []);

  return (
    <div className="food-haikei">
      <div className="food">
        <div>
          <h2>Food</h2>
        </div>

        <ul>
          {food.map((item, key) => (
            <li key={key} className="box">
              <a href="#">
                <img src={item.foodImg.file.url} alt={item.foodImg.title} />
              </a>
              <p>{item.foodTitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Food;
