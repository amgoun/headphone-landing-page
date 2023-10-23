import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "19.5px"],
        lg: ["18px", "21.94px"],
        xl: ["20px", "24.38px"],
        "2xl": ["24px", "29.26px"],
        "3xl": ["28px", "50px"],
        "4xl": ["48px", "58px"],
        "8xl": ["96px", "106px"],
      },
      colors: {
        primary: "#068DA9",
        lightb_lue: "#ECF8F9",
        marron: "#7E1717",
        orange: "#E55807",
      },
      backgroundImage: {
        'hero': "url('../public/images/collection-background.svg')",
        'hero2': "url('../public/images/collection-background3.svg')",
        'super_quality_bg': "url('../public/images/super_quality_bg.png')",
        'card': "url('../public/images/collection-background01.svg')",

      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
