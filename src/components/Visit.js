import React from "react";
import { useLang } from "../i18n";

export default function Visit() {
  const { t } = useLang();
  return (
    <section id="visit" className="visit">
      <div
        className="visit__bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/interior/DSCF1932.jpg)`,
        }}
      />
      <div className="visit__overlay" />
      <div className="visit__content">
        <span className="eyebrow">{t.visit.eyebrow}</span>
        <h2>{t.visit.heading}</h2>

        <div className="visit__grid">
          <div className="visit__card">
            <h4>{t.visit.address}</h4>
            <p style={{ whiteSpace: "pre-line" }}>{t.visit.addressLine}</p>
            <a
              className="visit__link"
              href="https://maps.app.goo.gl/Gjk2V4Vo333yu2Z56"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.visit.maps} &rarr;
            </a>
          </div>

          <div className="visit__card">
            <h4>{t.visit.hours}</h4>
            <p style={{ whiteSpace: "pre-line" }}>{t.visit.hoursLines}</p>
            <p className="visit__note">{t.visit.hoursNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
