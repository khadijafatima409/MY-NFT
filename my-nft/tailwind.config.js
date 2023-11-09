/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyan-blue": "#BDCADB",
        blue: "#21204A",
        white: "#FFF",
      },
      backgroundImage: {
        "hero-1": "/header/Noise.svg",
      },
    },
  },
  plugins: [],
};
