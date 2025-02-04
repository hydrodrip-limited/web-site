import type { Config } from "tailwindcss";

export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          100: "#E3F1FB",
          200: "#C1E3F6",
          300: "#8ACDEF",
          400: "#52B6E6",
          500: "#249AD3",
          600: "#167BB3",
          700: "#136291",
          800: "#135379",
          900: "#164664",
        },
        secondary: {
          100: "#EAEEF4",
          200: "#D1DCE6",
          300: "#A8BDD1",
          400: "#799AB7",
          500: "#587D9F",
          600: "#446485",
          700: "#38516C",
          800: "#31455B",
          900: "#2A3848",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
