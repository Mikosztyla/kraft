import React, { useEffect, useState } from "react";
import logoGold from "../assets/KRAFT_logo_gold.png";
import { useLang } from "../i18n";

export default function Hero() {
  const { t } = useLang();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <a href="#menu">{t.nav.menu}</a>
        <a href="#about">{t.nav.story}</a>
        <a href="#gallery">{t.nav.gallery}</a>
        <a href="#visit">{t.nav.visit}</a>
      </nav>

      <div className="hero__content">
        <img src={logoGold} alt="Kraft" className="hero__logo" />
        <p className="hero__tagline">{t.hero.tagline}</p>
        <div className="hero__rule" />
        <p className="hero__sub">{t.hero.sub}</p>
        <a href="#menu" className="hero__cta">{t.hero.cta}</a>
      </div>

      <div className="hero__scroll-cue">
        <span>{t.hero.scroll}</span>
        <div className="hero__scroll-line" />
      </div>
    </header>
  );
}
