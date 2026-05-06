import React from "react";
import { useLang } from "../i18n";

const photos = [
  { src: "/images/interior/DSCF1924_small.jpg", alt: "Bar counter at Kraft" },
  { src: "/images/interior/DSCF1927_small.jpg", alt: "Seating area at Kraft" },
  { src: "/images/interior/DSCF1932_small.jpg", alt: "Detail at Kraft" },
  { src: "/images/interior/DSCF1934_small.jpg", alt: "Evening atmosphere at Kraft" },
];

export default function Gallery() {
  const { t } = useLang();
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__heading">
        <span className="eyebrow">{t.gallery.eyebrow}</span>
        <h2>{t.gallery.heading}</h2>
      </div>
      <div className="gallery__grid">
        {photos.map((p, i) => (
          <figure key={p.src} className={`gallery__cell gallery__cell--${i}`}>
            <img src={`${process.env.PUBLIC_URL}${p.src}`} alt={p.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
