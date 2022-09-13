import "./App.css";
import About from "./components/contents/About";
import Food from "./components/contents/Food";
import Hero from "./components/contents/Hero";
import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Food />
      <Footer />
    </div>
  );
};

export default App;
