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
        navy: "#09213f",
        "navy-soft": "#2f4963",
        cream: "#fff7eb",
        sand: "#f4ead8",
        clay: "#b87455",
        "clay-dark": "#8f543f",
        sage: "#87967a",
        "sage-light": "#cdd8c2",
        ink: "#09213f",
        "ink-soft": "#2f4963",
        linen: "#f4ead8",
        porcelain: "#fff7eb",
        copper: "#b87455",
        "copper-dark": "#8f543f",
        champagne: "#e2d3bd",
      },
      boxShadow: {
        soft: "0 22px 80px rgba(9, 33, 63, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
