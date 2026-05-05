import React from "react";

export default function Visit() {
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
        <span className="eyebrow">Visit Us</span>
        <h2>Find your seat at Kraft.</h2>

        <div className="visit__grid">
          <div className="visit__card">
            <h4>Address</h4>
            <p>
              Jagiello&#324;ska 8<br />
              31-010 Krak&oacute;w, Polska
            </p>
            <a
              className="visit__link"
              href="https://www.google.com/maps/search/?api=1&query=Jagiellonska+8+31-010+Krakow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps &rarr;
            </a>
          </div>

          <div className="visit__card">
            <h4>Hours</h4>
            <p>
              Mon &ndash; Thu &middot; 16:00 &ndash; 00:00<br />
              Fri &ndash; Sat &middot; 16:00 &ndash; 02:00<br />
              Sun &middot; 16:00 &ndash; 23:00
            </p>
          </div>

          <div className="visit__card">
            <h4>Reservations</h4>
            <p>
              Walk-ins welcome.<br />
              For groups of 4+ please get in touch.
            </p>
            <a className="visit__link" href="mailto:hello@kraft-krakow.pl">
              hello@kraft-krakow.pl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
