import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#221f1c",
        "ink-soft": "#5d5650",
        linen: "#f7f2ea",
        porcelain: "#fffdf9",
        copper: "#b86f41",
        "copper-dark": "#8f4f2b",
        sage: "#6f7d6b",
        champagne: "#ead8c4",
      },
      boxShadow: {
        soft: "0 18px 70px rgba(34, 31, 28, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
