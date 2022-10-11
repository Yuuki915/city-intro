import "./App.css";
import scrollreveal from "scrollreveal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useContentful from "./useContentful";
import Home from "./Home";
import FoodPage from "./components/pages/FoodPage";
import { useEffect, useState } from "react";
import ScrollTop from "./components/partials/ScrollTop";

const App = () => {
  const { getFood } = useContentful();
  const [food, setFood] = useState([]);

  useEffect(() => {
    getFood().then((res) => setFood(res));
  }, []);

  useEffect(() => {
    const srT = scrollreveal({
      origin: "top",
      distance: "50px",
      duration: 1000,
      easing: "ease-out",
      reset: true,
    });
    srT.reveal(
      `
      .exp, 
      .box, 
      .content
    `,
      {
        opacity: 0,
        interval: 500,
      }
    );

    const srR = scrollreveal({
      origin: "right",
      distance: "50px",
      duration: 1000,
      easing: "ease-out",
      reset: true,
    });
    srR.reveal(`.place1`, {
      opacity: 0,
      interval: 500,
    });

    const srL = scrollreveal({
      origin: "left",
      distance: "50px",
      duration: 1000,
      easing: "ease-out",
      reset: true,
    });
    srL.reveal(`.place2`, {
      opacity: 0,
      interval: 500,
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {food.map((item, key) => (
            <Route
              key={key}
              path={`/${item.foodImg.title}`}
              element={<FoodPage foodItem={item} />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
