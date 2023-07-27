import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analyst from "./components/Analyst";
import News from "./components/News";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analyst />
      <News />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
