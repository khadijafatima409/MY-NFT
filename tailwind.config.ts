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
        "purply-blue": "#9D9BB9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-1": "/header/Noise.svg",
        price:
          "background: linear-gradient(0deg,rgba(23, 23, 25, 0.1) 0%,rgba(23, 23, 25, 0.1) 100%),linear-gradient(276deg,rgba(20, 161, 255, 0.5) 13.18%,rgba(245, 61, 245, 0.5) 93.73%);",
      },
    },
  },
  plugins: [],
};
export default config;
