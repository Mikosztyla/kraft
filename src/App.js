import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { LanguageProvider } from "./i18n";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <div className="site">
        <LanguageSwitcher />
        <Hero />
        <main>
          <About />
          <Menu />
          <Gallery />
          <Visit />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
