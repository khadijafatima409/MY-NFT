import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyan-blue": "#BDCADB",
        blue: "#21204A",
        white: "#FFF",
        "soft-peach": "#FDE7FD",
        aqua: "#CDE2FE",
        "light-steel-blue": "#6692CC",
        "grey-blue": "#6E84AB",
        zodiac: "#11315B",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-1": "/header/Noise.svg",
      },
    },
  },
  plugins: [],
};
export default config;
