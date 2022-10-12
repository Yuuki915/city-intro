import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useContentful from "./useContentful";
import Home from "./Home";
import FoodPage from "./components/pages/FoodPage";
import { useEffect, useState } from "react";
import ScrollTop from "./components/partials/ScrollTop";
// import scrollreveal from "scrollreveal";

const App = () => {
  const { getFood } = useContentful();
  const [food, setFood] = useState([]);

  useEffect(() => {
    getFood().then((res) => setFood(res));
  }, []);

  // useEffect(() => {
  //   const sr = scrollreveal({
  //     distance: "50px",
  //     duration: 1000,
  //     easing: "ease-out",
  //     reset: true,
  //   });
  //   sr.reveal(
  //     `
  //       .exp,
  //       .box,
  //       .content
  //       `,
  //     {
  //       origin: "top",
  //       interval: 500,
  //     }
  //   );

  //   sr.reveal(`.v1 .place1`, {
  //     origin: "right",
  //     interval: 500,
  //   });

  //   sr.reveal(`.v1 .place2`, {
  //     origin: "left",
  //     interval: 500,
  //   });
  // }, []);

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
