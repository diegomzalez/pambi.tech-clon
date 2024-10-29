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
        primary: "#D87006",
        "primary-light": "#fd9e29",
        transparency: "#33333380",
      },
      backgroundImage: {
        screen1: "url('../public/bg-1.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
