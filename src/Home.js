import React from "react";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import About from "./components/contents/About";
import Food from "./components/contents/Food";
import Hero from "./components/contents/Hero";
import Visit from "./components/contents/Visit";
import Events from "./components/contents/Events";

const Home = () => {
  return (
    <div>
      <Header />

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
