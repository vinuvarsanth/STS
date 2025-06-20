// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00c3cb",
        primaryDark: "#019ea3",
        secondary: "#70e6e9",
        lightBg: "#d7f9fa",
        lightBgAlt: "#e1fbfc",
        darkBg: "#1e3f40",
        darkBgAlt: "#1a4244",
        highlightBg: "#e0fafa",
        sectionBg: "#e9ffff",
        extraDarkBg: "#0f172a",
        secondaryDark: "#5cdfe3",
      },
    },
  },
  plugins: [],
};
