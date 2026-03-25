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
        saffron: {
          50: "#FFF8F0",
          100: "#FEEBD0",
          200: "#FDDAA8",
          300: "#F5C078",
          400: "#D99A42",
          500: "#C8712A",
          600: "#A85A1F",
          700: "#87441A",
          800: "#6B3518",
          900: "#4A2410",
        },
        warmwhite: "#FEFCF8",
        ayurveda: {
          bg: "#FFF8E1",
          border: "#FFD54F",
          text: "#5D4037",
        },
        modern: {
          bg: "#E3F2FD",
          border: "#42A5F5",
          text: "#1565C0",
        },
        parchment: "#FBF5E6",
        exam: {
          bg: "#E3F2FD",
          border: "#1976D2",
          text: "#0D47A1",
        },
        mnemonic: {
          bg: "#F3E5F5",
          border: "#AB47BC",
          text: "#6A1B9A",
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
        sanskrit: ['"Noto Serif Devanagari"', "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
