import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#006D5B",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#C6A962",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#E17055",
          foreground: "#FFFFFF",
        },
        background: "#F8F9FA",
        foreground: "#2D3748",
      },
      fontFamily: {
        arabic: ["Noto Sans Arabic", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;