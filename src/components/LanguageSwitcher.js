import React, { useEffect, useState } from "react";
import { useLang } from "../i18n";

const FlagPL = (props) => (
  <svg viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="5" height="1.5" fill="#fff" />
    <rect y="1.5" width="5" height="1.5" fill="#dc143c" />
    <rect width="5" height="3" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="0.05" />
  </svg>
);

const FlagGB = (props) => (
  <svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" {...props}>
    <clipPath id="kraft-uk-t">
      <path d="M30,15 h30 v15 z M30,15 v15 h-30 z M30,15 h-30 v-15 z M30,15 v-15 h30 z" />
    </clipPath>
    <rect width="60" height="30" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#kraft-uk-t)" />
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

const OPTIONS = [
  { code: "pl", label: "Polski", Flag: FlagPL },
  { code: "en", label: "English", Flag: FlagGB },
];

/**
 * Floating language toggle.
 *
 * The chooser drops to a lowered position whenever something else is sitting
 * at the top of the viewport that it might overlap with on narrow screens:
 *   - the hero <nav> (visible while the hero is still on screen), or
 *   - the sticky Menu category tab bar (engaged while inside #menu).
 *
 * On any other section (about / gallery / visit) it returns to the normal
 * top corner. CSS overrides keep it pinned to the corner on wide screens
 * (>=1320px) where there is no overlap risk anywhere.
 */
export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [lowered, setLowered] = useState(false);

  useEffect(() => {
    const handle = () => {
      // 1. Hero nav is at the top while the hero is still substantially in view.
      //    We treat "hero on top" as: scrolled less than (hero height - small offset).
      const hero = document.querySelector(".hero");
      const heroOnTop =
        !!hero && window.scrollY < hero.offsetHeight - 80;

      // 2. Menu sticky tab bar is engaged when the menu section's top has
      //    crossed the viewport top and its bottom is still below the bar.
      const menuSection = document.getElementById("menu");
      const menuStuck =
        !!menuSection &&
        (() => {
          const r = menuSection.getBoundingClientRect();
          return r.top <= 0 && r.bottom > 80;
        })();

      setLowered(heroOnTop || menuStuck);
    };

    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  return (
    <div
      className={`lang-switcher ${lowered ? "is-lowered" : ""}`}
      role="group"
      aria-label="Language"
    >
      {OPTIONS.map(({ code, label, Flag }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`lang-switcher__btn ${lang === code ? "is-active" : ""}`}
          aria-pressed={lang === code}
          aria-label={label}
        >
          <Flag className="lang-switcher__flag" aria-hidden="true" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
