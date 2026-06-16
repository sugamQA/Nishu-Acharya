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
        ink: "#020308",
        "ink-soft": "#080d1a",
        pearl: "#f0f6ff",
        cream: "#f4faff",
        cyan: "#00d4e6",
        teal: "#00b89e",
        aqua: "#00aec9",
        sky: "#0096e3",
        signal: "#1a9aff",
        electric: "#1a6df7",
        neon: "#2eeaca",
        mint: "#8fefc4",
        graphite: "#1f2937",
        slate: "#64748b",
        pink: "#f43597",
        rose: "#f5254e",
        fuchsia: "#d62cef"
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 30px 90px rgba(6, 182, 212, 0.22)",
        glow: "0 0 60px rgba(0, 212, 230, 0.45)",
        "glow-strong": "0 0 90px rgba(26, 109, 247, 0.55)",
        cyanglow: "0 0 80px rgba(0, 212, 230, 0.42)",
        tealglow: "0 0 80px rgba(0, 184, 158, 0.38)"
      },
      backgroundImage: {
        "healthcare-mesh":
          "radial-gradient(circle at 12% 18%, rgba(0, 212, 230, 0.28), transparent 32%), radial-gradient(circle at 88% 14%, rgba(26, 109, 247, 0.25), transparent 28%), radial-gradient(circle at 70% 88%, rgba(0, 184, 158, 0.22), transparent 32%), radial-gradient(circle at 20% 80%, rgba(46, 234, 202, 0.18), transparent 28%)",
        "neural-grid":
          "linear-gradient(rgba(0, 212, 230, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 230, 0.12) 1px, transparent 1px)"
      },
      backgroundSize: {
        "grid-lg": "60px 60px"
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "spin-reverse": "spin 24s linear infinite reverse",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "scroll-x": "scroll-x 40s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        shimmer: "shimmer 3s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" }
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
