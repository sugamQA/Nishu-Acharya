import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f19",
        pearl: "#f7f4ee",
        cream: "#fdf6f0",
        champagne: "#d7b879",
        graphite: "#1f2937",
        signal: "#39a7ff",
        sky: "#0ea5e9",
        blush: "#d9467b",
        rose: "#be185d",
        evergreen: "#0f766e"
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(15, 23, 42, 0.18)",
        glow: "0 0 80px rgba(57, 167, 255, 0.24)",
        roseglow: "0 0 80px rgba(217, 70, 123, 0.24)"
      },
      backgroundImage: {
        "executive-mesh":
          "radial-gradient(circle at 15% 15%, rgba(57,167,255,.25), transparent 28%), radial-gradient(circle at 85% 20%, rgba(217,70,123,.20), transparent 26%), radial-gradient(circle at 70% 85%, rgba(14,165,233,.18), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
