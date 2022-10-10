import React, { useEffect, useState } from "react";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import About from "./components/contents/About";
import Food from "./components/contents/Food";
import Hero from "./components/contents/Hero";
import Visit from "./components/contents/Visit";
import Events from "./components/contents/Events";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolledVal, setScrolledVal] = useState(0);

  useEffect(() => {
    const currentPosi = () => setScrolledVal(window.pageYOffset);
    window.addEventListener("scroll", currentPosi);
    currentPosi();

    if (scrolledVal >= 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    return () => window.removeEventListener("scroll", currentPosi);
  }, [scrolledVal]);

  return (
    <div>
      <Header isVisible={isVisible} />

      <Hero />
      <About />
      <Food />
      <Visit />
      <Events />

      <Footer />
    </div>
  );
};

export default Home;
