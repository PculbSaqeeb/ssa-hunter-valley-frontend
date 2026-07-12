import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "640px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1440px",
      "4xl": "1536px",
    },
    extend: {
      colors: {
        lime: {
          400: "#a3d900",
          500: "#8fc400",
          600: "#79a800",
        },
      },
    },
  },
  plugins: [],
};

export default config;
