import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

// All translatable strings live here. Polish is the default.
export const translations = {
  pl: {
    nav: { menu: "Menu", story: "O nas", gallery: "Galeria", visit: "Odwiedź nas" },
    hero: {
      tagline: "Bar Koktajlowy · Kraków",
      sub:
        "Rzemieślnicze koktajle z nalewaków, światowej klasy alkohole w klimatycznym miejscu w samym centrum Krakowa - otwarte od południa do nocy",
      cta: "Zobacz Menu",
      scroll: "scroll",
    },
    about: {
      eyebrow: "O nas",
      heading: "Rzemieślniczy bar na Jagiellońskiej.",
      p1:
        "Kraft to klimatyczne lokal w sercu starego Krakowa — oparty na założeniu, że koktajl powinien być przygotowany z taką samą dbałością jak alkohol, z którego powstaje. Nasze domowe koktajle z nalewaków są wcześniej kompowane, leżakowane i podawane w idealnej temperaturze, a za barem czeka ponad sto starannie wybranych butelek z Polski oraz z całego świata.",
      p2:
        "Wpadnij na kawę w południe, na Aperola w ciągu dnia lub zostań na dłużej z whisky w dłoni. Cokolwiek wybierzesz to zadba o ciebie ktoś, kto wie co robi oraz komu naprawdę zależy.",
      h1: "Domowe", h1sub: "11 koktajli z nalewaków",
      h2: "120+", h2sub: "alkoholi za barem",
      h3: "Codziennie", h3sub: "otwarte do późna",
    },
    menu: {
      eyebrow: "Karta",
      heading: "Menu",
      note: "Wszystkie ceny w PLN. Roczniki i dostępność mogą się zmieniać.",
      now: "Aktualnie",
    },
    gallery: { eyebrow: "Wnętrze", heading: "Wewnątrz Kraftu" },
    visit: {
      eyebrow: "Odwiedź nas",
      heading: "Znajdź swoje miejsce w Krafcie.",
      address: "Adres",
      addressLine: "Jagiellońska 8\n31-010 Kraków, Polska",
      hours: "Godziny otwarcia",
      hoursLines: "Niedz. – Czw. · 12:00 – 01:00\nPt. – Sob. · 12:00 – 02:00",
      hoursNote: "Czasem zostajemy dłużej — do ostatniego gościa.",
      maps: "Otwórz w Google Maps",
    },
    footer: {
      brand: "Kraft Cocktail Bar",
      address: "Jagiellońska 8, 31-010 Kraków",
      contact: "Kontakt",
      follow: "Obserwuj",
      legal: "Wszystkie prawa zastrzeżone.",
    },
    categories: {
      draft:           { name: "Homemade Draft",            tagline: "Koktajle z beczki, robione w domu" },
      vodka:           { name: "Wódka",                     tagline: "Polskie i światowe wódki" },
      gin:             { name: "Gin",                       tagline: "Klasyki ziołowe i nowoczesne edycje" },
      rum:             { name: "Rum",                       tagline: "Od jasnej trzciny po głęboko leżakowane" },
      tequila:         { name: "Tequila & Mezcal",          tagline: "Alkohole z agawy, sączone powoli" },
      "whisky-scotch":   { name: "Whisky Szkocja",            tagline: "Single malts i kupaże ze Szkocji" },
      "whisky-american": { name: "Whiskey Ameryka",           tagline: "Bourbon, rye i amerykańskie destylaty" },
      "whisky-irish-jp": { name: "Whisky Irlandia & Japonia", tagline: "Łagodne irlandzkie i wytrawne japońskie whisky" },
      brandy:          { name: "Brandy & Spirytusy",        tagline: "Koniak, calvados, śliwowica i absynt" },
      wine:            { name: "Wino",                      tagline: "Na kieliszki i butelki" },
      cafe:            { name: "Café",                      tagline: "Espresso bar przez cały dzień" },
    },
  },
  en: {
    nav: { menu: "Menu", story: "Story", gallery: "Gallery", visit: "Visit" },
    hero: {
      tagline: "Cocktail Bar · Kraków",
      sub:
        "Craft cocktails on tap, world-class spirits, and a cozy atmosphere right in the heart of Kraków — open from noon till late at night",
      cta: "Explore the Menu",
      scroll: "scroll",
    },
    about: {
      eyebrow: "Our Story",
      heading: "A craft bar on Jagiellońska.",
      p1:
        "Kraft is an atmospheric room in the heart of old Kraków — built around the idea that a cocktail should be made with the same care as the spirit inside it. Our homemade tap cocktails are pre-batched, aged and poured at the perfect temperature, while our back-bar gathers more than a hundred curated bottles from Polish distilleries and the world over.",
      p2:
        "Drop in for a coffee at noon, an Aperol during the day, or settle in with a whisky in hand. Whatever you choose, it's poured by someone who knows their craft and truly cares.",
      h1: "Homemade", h1sub: "11 draft cocktails",
      h2: "120+", h2sub: "spirits behind the bar",
      h3: "Daily", h3sub: "open until late",
    },
    menu: {
      eyebrow: "The List",
      heading: "Menu",
      note: "All prices in PLN. Vintages and availability may vary.",
      now: "Now serving",
    },
    gallery: { eyebrow: "The Room", heading: "Inside Kraft" },
    visit: {
      eyebrow: "Visit Us",
      heading: "Find your seat at Kraft.",
      address: "Address",
      addressLine: "Jagiellońska 8\n31-010 Kraków, Poland",
      hours: "Hours",
      hoursLines: "Sun – Thu · 12:00 – 01:00\nFri – Sat · 12:00 – 02:00",
      hoursNote: "Sometimes we stay open later — until the last guest.",
      maps: "Open in Google Maps",
    },
    footer: {
      brand: "Kraft Cocktail Bar",
      address: "Jagiellońska 8, 31-010 Kraków",
      contact: "Contact",
      follow: "Follow",
      legal: "All rights reserved.",
    },
    categories: {
      draft:           { name: "Homemade Draft",       tagline: "Cocktails on tap, crafted in-house" },
      vodka:           { name: "Vodka",                tagline: "Polish & international vodka selection" },
      gin:             { name: "Gin",                  tagline: "Botanical classics & modern editions" },
      rum:             { name: "Rum",                  tagline: "From light cane to deep-aged reserve" },
      tequila:         { name: "Tequila & Mezcal",     tagline: "Agave spirits, sipped slow" },
      "whisky-scotch":   { name: "Whisky — Scotland",     tagline: "Single malts and blends from Scotland" },
      "whisky-american": { name: "Whiskey — America",     tagline: "Bourbon, rye and craft American" },
      "whisky-irish-jp": { name: "Whisky — Ireland & Japan", tagline: "Smooth Irish drams & refined Japanese whisky" },
      brandy:          { name: "Brandy & Spirits",     tagline: "Cognac, calvados, śliwowica & absinthe" },
      wine:            { name: "Wine",                 tagline: "By the glass and by the bottle" },
      cafe:            { name: "Café",                 tagline: "Espresso bar, all day" },
    },
  },
};

const LanguageContext = createContext({ lang: "en", setLang: () => {}, t: translations.en });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    try {
      return localStorage.getItem("kraft.lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try { localStorage.setItem("kraft.lang", lang); } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] || translations.pl }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}
