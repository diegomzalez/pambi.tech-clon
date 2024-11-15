import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromTop: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "appear-from-top": "slideInFromTop 1s ease-out",
        "appear-from-right": "slideInFromRight 1s ease-out",
        "appear-from-left": "slideInFromLeft 1s ease-out",
      },
      colors: {
        primary: "#D87006",
        "primary-light": "#DF8414",
        transparency: "#33333380",
      },
      backgroundImage: {
        screen1: "url('../public/bg-1.jpg')",
        screen2: "url('../public/bg-2.png')",
        loading: "url('../public/official_logo.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
