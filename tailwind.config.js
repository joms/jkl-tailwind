/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import { fontStyles } from "./typography";

const jklColors = {
  svart: "#000",
  granitt: "#1b1917",
  skifer: "#313030",
  fjellgra: "#444141",
  stein: "#636060",
  svaberg: "#c8c5c3",
  varde: "#e0dbd4",
  dis: "#ece9e5",
  sand: "#f4f2ef",
  snohvit: "#f9f9f9",
  hvit: "#fff",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...jklColors,
    },
    spacing: {
      2: "2px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      32: "32px",
      40: "40px",
      64: "64px",
      104: "104px",
      168: "168px",
    },
    fontSize: null,
    lineHeight: null,
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({ ...fontStyles() });
    }),
  ],
};
