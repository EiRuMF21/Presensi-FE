/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ss: "300px",
      sm: "426px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: ["daisyui"],
};
