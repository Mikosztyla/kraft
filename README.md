# Kraft — Cocktail Bar Website

A React website for **Kraft**, a cocktail bar at Jagiellońska 8, 31-010 Kraków.

## Highlights

- **Hero** with the bar interior as a parallax background and the gold Kraft logo on top.
- **Story** section with copy and a framed interior photo.
- **Interactive menu** with sticky category tabs and a **rotating cocktail-glass illustration** that spins as you scroll. The illustration also switches between six different drink types (martini, highball, coupe, rocks, wine, flute) as the active category changes.
- **Gallery** mosaic from the interior photoshoot.
- **Visit** section with address, opening hours and a Google Maps link.
- Full **responsive layout** — tested for desktop, tablet, and mobile.
- Brand palette extracted from the printed menu (deep wine + warm gold).
- All menu data extracted from the printed menu pages — every drink, every PLN price.

## Project structure

```
src/
  App.js              -- top-level layout (Hero + Main + Footer)
  App.css             -- all visual styles, including the responsive breakpoints
  index.css           -- font imports + base reset
  components/
    Hero.js           -- full-bleed hero with parallax background
    About.js          -- "Our Story" section
    Menu.js           -- interactive menu with rotating cocktail glass
    DrinkSVGs.js      -- 6 hand-drawn cocktail-glass SVGs
    Gallery.js        -- 4-cell photo mosaic
    Visit.js          -- address, hours, contact card
    Footer.js         -- bottom bar with logo and contact
  data/menu.js        -- structured menu data (categories, items, prices in PLN)
  assets/             -- logos imported as React modules
public/images/
  interior/           -- web-optimised interior photos (~600KB each)
  logo/               -- gold/white/black brand logos
```

## Running locally

```bash
npm install      # already done in this repo
npm start        # http://localhost:3000
npm run build    # production build into ./build
```

## Available logos

Three colour variants of the Kraft logo are available in `public/images/logo/`
and `src/assets/`: `KRAFT_logo_gold.png`, `KRAFT_logo_white.png`, `KRAFT_logo_black.png`.

## Customising the menu

All menu data lives in `src/data/menu.js`. Each entry looks like:

```js
{ id: "draft", name: "Homemade Draft", tagline: "...", items: [
  { name: "Negroni", price: 40 }, ...
] }
```

Add, edit or reorder freely — the menu UI updates automatically.
