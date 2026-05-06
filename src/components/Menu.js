import React, { useEffect, useRef, useState } from "react";
import menu from "../data/menu";
import DRINK_ICONS from "./DrinkSVGs";
import { useLang } from "../i18n";

export default function Menu() {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);
  const tabsRef = useRef(null);
  const tabRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = section.offsetHeight - viewportH;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;

      setRotation(progress * 720);

      const centerY = viewportH / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      categoryRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      setActiveIndex(bestIdx);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Center the active tab horizontally; clamps naturally to left/right at the edges.
  useEffect(() => {
    const container = tabsRef.current;
    const btn = tabRefs.current[activeIndex];
    if (!container || !btn) return;
    const target =
      btn.offsetLeft + btn.offsetWidth / 2 - container.clientWidth / 2;
    container.scrollTo({ left: target, behavior: "smooth" });
  }, [activeIndex]);

  const ActiveIcon = DRINK_ICONS[activeIndex % DRINK_ICONS.length];
  const formatPrice = (p) => new Intl.NumberFormat("pl-PL").format(p) + " PLN";
  const scrollTo = (idx) => {
    categoryRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Resolve a localized category, falling back to the data file if no translation exists.
  const cat = (rawCat) => {
    const trans = t.categories?.[rawCat.id];
    return {
      name: trans?.name ?? rawCat.name,
      tagline: trans?.tagline ?? rawCat.tagline,
    };
  };

  const activeCat = menu[activeIndex] ? cat(menu[activeIndex]) : { name: "", tagline: "" };

  return (
    <section id="menu" className="menu" ref={sectionRef}>
      <div className="menu__heading">
        <span className="eyebrow">{t.menu.eyebrow}</span>
        <h2>{t.menu.heading}</h2>
        <p>{t.menu.note}</p>
      </div>

      <div className="menu__tabs-wrap">
        <div className="menu__tabs" ref={tabsRef}>
          {menu.map((rawCat, i) => (
            <button
              key={rawCat.id}
              ref={(el) => (tabRefs.current[i] = el)}
              className={`menu__tab ${activeIndex === i ? "is-active" : ""}`}
              onClick={() => scrollTo(i)}
            >
              {cat(rawCat).name}
            </button>
          ))}
        </div>
      </div>

      <div className="menu__layout">
        <aside className="menu__visual">
          <div className="menu__visual-sticky">
            <div
              className="menu__glass"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <ActiveIcon />
            </div>
            <div className="menu__visual-meta">
              <span className="menu__visual-eyebrow">{t.menu.now}</span>
              <strong>{activeCat.name}</strong>
              <em>{activeCat.tagline}</em>
              <span className="menu__visual-counter">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(menu.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </aside>

        <div className="menu__list">
          {menu.map((rawCat, i) => {
            const c = cat(rawCat);
            return (
              <article
                key={rawCat.id}
                className="menu__category"
                ref={(el) => (categoryRefs.current[i] = el)}
              >
                <header className="menu__cat-head">
                  <h3>{c.name}</h3>
                  <span>{c.tagline}</span>
                </header>
                <ul className="menu__items">
                  {rawCat.items.map((it) => (
                    <li key={it.name} className="menu__item">
                      <span className="menu__item-name">{it.name}</span>
                      <span className="menu__item-dots" />
                      <span className="menu__item-price">
                        {formatPrice(it.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
