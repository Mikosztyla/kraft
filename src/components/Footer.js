import React from "react";
import logoWhite from "../assets/KRAFT_logo_white.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <img src={logoWhite} alt="Kraft" className="footer__logo" />
        <div className="footer__cols">
          <div>
            <h5>Kraft Cocktail Bar</h5>
            <p>Jagiello&#324;ska 8, 31-010 Krak&oacute;w</p>
          </div>
          <div>
            <h5>Contact</h5>
            <p>
              <a href="mailto:hello@kraft-krakow.pl">hello@kraft-krakow.pl</a>
            </p>
          </div>
          <div>
            <h5>Follow</h5>
            <p>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{" "}
              &middot;{" "}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
        <p className="footer__legal">
          &copy; {new Date().getFullYear()} Kraft. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
