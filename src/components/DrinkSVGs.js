import React from "react";

// Reusable line-art cocktail glasses, drawn in the brand gold.
// Each is 200x260 viewBox, transparent background.

const stroke = "currentColor";
const strokeWidth = 2.4;

export const MartiniGlass = (props) => (
  <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 50 L170 50 L100 150 Z" />
      <line x1="100" y1="150" x2="100" y2="220" />
      <line x1="60" y1="220" x2="140" y2="220" />
      <path d="M50 70 L150 70" opacity="0.55" />
      <circle cx="135" cy="80" r="4" />
      <line x1="135" y1="80" x2="155" y2="40" />
      <circle cx="155" cy="40" r="3" />
    </g>
  </svg>
);

export const HighballGlass = (props) => (
  <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M62 40 L138 40 L132 230 Q100 240 68 230 Z" />
      <path d="M65 75 L135 75" opacity="0.6" />
      <path d="M70 110 Q100 120 130 110" opacity="0.4" />
      <line x1="100" y1="20" x2="100" y2="100" />
      <line x1="92" y1="22" x2="108" y2="22" />
    </g>
  </svg>
);

export const CoupeGlass = (props) => (
  <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 70 Q100 140 170 70" />
      <path d="M30 70 L170 70" />
      <line x1="100" y1="140" x2="100" y2="220" />
      <line x1="55" y1="220" x2="145" y2="220" />
      <circle cx="115" cy="90" r="5" />
      <circle cx="85" cy="105" r="3" />
    </g>
  </svg>
);

export const RocksGlass = (props) => (
  <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 60 L150 60 L145 220 L55 220 Z" />
      <rect x="70" y="120" width="22" height="22" rx="3" transform="rotate(-8 81 131)" />
      <rect x="100" y="135" width="20" height="20" rx="3" transform="rotate(12 110 145)" />
      <path d="M55 90 L145 90" opacity="0.5" />
    </g>
  </svg>
);

export const WineGlass = (props) => (
  <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M55 30 Q55 130 100 140 Q145 130 145 30 Z" />
      <path d="M60 60 Q100 80 140 60" opacity="0.55" />
      <line x1="100" y1="140" x2="100" y2="220" />
      <line x1="65" y1="222" x2="135" y2="222" />
    </g>
  </svg>
);

export const FluteGlass = (props) => (
  <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M82 30 L118 30 L112 170 Q100 175 88 170 Z" />
      <line x1="100" y1="175" x2="100" y2="225" />
      <line x1="75" y1="225" x2="125" y2="225" />
      <circle cx="95" cy="60" r="2.5" />
      <circle cx="105" cy="80" r="2" />
      <circle cx="98" cy="105" r="2" />
      <circle cx="103" cy="135" r="2.5" />
    </g>
  </svg>
);

const DRINK_ICONS = [MartiniGlass, HighballGlass, CoupeGlass, RocksGlass, WineGlass, FluteGlass];

export default DRINK_ICONS;
