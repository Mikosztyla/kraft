import React from "react";
import logoWhite from "../assets/KRAFT_logo_white.png";
import { useLang } from "../i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <img src={logoWhite} alt="Kraft" className="footer__logo" />
        <div className="footer__cols">
          <div>
            <h5>{t.footer.brand}</h5>
            <p>{t.footer.address}</p>
          </div>
          <div>
            <h5>{t.footer.contact}</h5>
            <p>
              <a href="mailto:kraft.krakow@gmail.com">kraft.krakow@gmail.com</a>
            </p>
          </div>
          <div>
            <h5>{t.footer.follow}</h5>
            <p>
              <a
                href="https://www.instagram.com/kraft.krk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
        <p className="footer__legal">
          &copy; {new Date().getFullYear()} Kraft. {t.footer.legal}
        </p>
      </div>
    </footer>
  );
}
