/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dropShadow: "0px 2px 2px 0px #00000040",
        t000: "#000",
        t222: "#222",
        t333: "#333",
        t666: "#666",
        tfff: "#fff",
        tf7f7f7: "#F7F7F7",
        t09: "rgba(150, 150, 150, 0.3)",
      },
    },
  },
  plugins: [],
};
