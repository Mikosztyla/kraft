import React from "react";
import { useLang } from "../i18n";

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__copy">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2>{t.about.heading}</h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>

          <div className="about__highlights">
            <div>
              <strong>{t.about.h1}</strong>
              <span>{t.about.h1sub}</span>
            </div>
            <div>
              <strong>{t.about.h2}</strong>
              <span>{t.about.h2sub}</span>
            </div>
            <div>
              <strong>{t.about.h3}</strong>
              <span>{t.about.h3sub}</span>
            </div>
          </div>
        </div>

        <div className="about__photo">
          <img
            src={`${process.env.PUBLIC_URL}/images/interior/DSCF1928_small.jpg`}
            alt="Inside Kraft cocktail bar"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
