import React, { useEffect, useState } from "react";
import "../css/Food.css";

import useContentful from "../../useContentful";
import { Link } from "react-router-dom";

const Food = () => {
  const { getFood } = useContentful();
  const [food, setFood] = useState([]);

  useEffect(() => {
    getFood().then((res) => setFood(res));
  }, []);

  return (
    <div className="food-haikei">
      <div className="food">
        <h2>Food</h2>

        <ul>
          {food.map((item, key) => (
            <li key={key} className="box">
              <Link to={item.foodImg.title}>
                <img src={item.foodImg.file.url} alt={item.foodImg.title} />
              </Link>
              <p>{item.foodTitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Food;
