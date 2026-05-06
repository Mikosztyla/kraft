import React, { useEffect, useRef, useState } from "react";
import menu from "../data/menu";
import DRINK_ICONS from "./DrinkSVGs";

/**
 * Interactive menu with a rotating drink illustration.
 * - As the user scrolls through the menu section, the cocktail glass rotates.
 * - Each category snaps into view, switching the active glass.
 * - The active tab in the sticky pill bar auto-centres horizontally:
 *     * first tab stays on the left (no scroll yet),
 *     * middle tabs sit in the centre,
 *     * the last tabs end up on the right when the bar can't scroll further.
 * - Click a category tab to jump straight to it.
 */
export default function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);
  const tabsRef = useRef(null);
  const tabRefs = useRef([]);

  // Track scroll position to set rotation + active category
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

  // Center the active tab inside the horizontally-scrollable tab bar.
  // The browser clamps scrollLeft to [0, scrollWidth - clientWidth] automatically,
  // so the first tab naturally sits on the left and the last tabs on the right;
  // everything in between is centred.
  useEffect(() => {
    const container = tabsRef.current;
    const btn = tabRefs.current[activeIndex];
    if (!container || !btn) return;

    const target =
      btn.offsetLeft + btn.offsetWidth / 2 - container.clientWidth / 2;

    container.scrollTo({ left: target, behavior: "smooth" });
  }, [activeIndex]);

  const ActiveIcon = DRINK_ICONS[activeIndex % DRINK_ICONS.length];

  const formatPrice = (p) =>
    new Intl.NumberFormat("pl-PL").format(p) + " PLN";

  const scrollTo = (idx) => {
    categoryRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="menu" className="menu" ref={sectionRef}>
      <div className="menu__heading">
        <span className="eyebrow">The List</span>
        <h2>Menu</h2>
        <p>All prices in PLN. Vintages and availability may vary.</p>
      </div>

      {/* Sticky tab bar (categories) */}
      <div className="menu__tabs-wrap">
        <div className="menu__tabs" ref={tabsRef}>
          {menu.map((cat, i) => (
            <button
              key={cat.id}
              ref={(el) => (tabRefs.current[i] = el)}
              className={`menu__tab ${activeIndex === i ? "is-active" : ""}`}
              onClick={() => scrollTo(i)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="menu__layout">
        {/* Left: rotating drink visual */}
        <aside className="menu__visual">
          <div className="menu__visual-sticky">
            <div
              className="menu__glass"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <ActiveIcon />
            </div>
            <div className="menu__visual-meta">
              <span className="menu__visual-eyebrow">Now serving</span>
              <strong>{menu[activeIndex]?.name}</strong>
              <em>{menu[activeIndex]?.tagline}</em>
              <span className="menu__visual-counter">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(menu.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </aside>

        {/* Right: scrolling list of categories */}
        <div className="menu__list">
          {menu.map((cat, i) => (
            <article
              key={cat.id}
              className="menu__category"
              ref={(el) => (categoryRefs.current[i] = el)}
            >
              <header className="menu__cat-head">
                <h3>{cat.name}</h3>
                <span>{cat.tagline}</span>
              </header>
              <ul className="menu__items">
                {cat.items.map((it) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
