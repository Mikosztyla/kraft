import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="site">
      <Hero />
      <main>
        <About />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
