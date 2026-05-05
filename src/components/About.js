import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__copy">
          <span className="eyebrow">Our Story</span>
          <h2>A craft bar on Jagiellońska.</h2>
          <p>
            Kraft is a quiet, candle-lit room in the heart of old Kraków —
            built around the idea that a cocktail should be made with the
            same care as the spirit inside it. Our homemade drafts are
            pre-batched, aged and poured at the perfect temperature, while
            our back-bar gathers more than a hundred curated bottles from
            Polish distilleries and the world over.
          </p>
          <p>
            Drop in for a coffee in the afternoon, an Aperol on the patio,
            or settle in for a long evening of single malts. Whatever you
            order, it's poured by people who care.
          </p>

          <div className="about__highlights">
            <div>
              <strong>Homemade</strong>
              <span>9 draft cocktails</span>
            </div>
            <div>
              <strong>120+</strong>
              <span>spirits behind the bar</span>
            </div>
            <div>
              <strong>Daily</strong>
              <span>open until late</span>
            </div>
          </div>
        </div>

        <div className="about__photo">
          <img
            src="/images/interior/DSCF1928_small.jpg"
            alt="Inside Kraft cocktail bar"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
