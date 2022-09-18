import "./App.css";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import About from "./components/contents/About";
import Food from "./components/contents/Food";
import Hero from "./components/contents/Hero";
import Visit from "./components/contents/Visit";
import Events from "./components/contents/Events";
import FoodPage from "./components/pages/FoodPage";

const App = () => {
  return (
    <div className="App">
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

export default App;
