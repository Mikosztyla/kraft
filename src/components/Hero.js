import React, { useEffect, useState } from "react";
import logoGold from "../assets/KRAFT_logo_gold.png";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Subtle parallax: background drifts slower than scroll
  const parallax = Math.min(scrollY * 0.35, 250);

  return (
    <header className="hero">
      <div
        className="hero__bg"
        style={{
          transform: `translate3d(0, ${parallax}px, 0) scale(1.08)`,
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/interior/DSCF1924.jpg)`,
        }}
      />
      <div className="hero__overlay" />

      <nav className="hero__nav">
        <a href="#menu">Menu</a>
        <a href="#about">Story</a>
        <a href="#gallery">Gallery</a>
        <a href="#visit">Visit</a>
      </nav>

      <div className="hero__content">
        <img src={logoGold} alt="Kraft" className="hero__logo" />
        <p className="hero__tagline">Cocktail Bar &middot; Krak&oacute;w</p>
        <div className="hero__rule" />
        <p className="hero__sub">
          Homemade draft cocktails, world-class spirits and a quiet
          corner on Jagiello&#324;ska &mdash; open from afternoon until late.
        </p>
        <a href="#menu" className="hero__cta">Explore the Menu</a>
      </div>

      <div className="hero__scroll-cue">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </header>
  );
}
