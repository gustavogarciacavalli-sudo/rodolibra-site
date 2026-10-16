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
        white: "#FFFFFF",
        navy: {
          DEFAULT: "#0B1F33",
          50: "#F0F4F8",
          100: "#D9E3EC",
          800: "#0F2B47",
          900: "#0B1F33",
          950: "#061320",
        },
        brand: {
          DEFAULT: "#164A70",
          light: "#21689C",
          dark: "#0E324C",
        },
        accent: {
          DEFAULT: "#EA580C",
          hover: "#C2410C",
          light: "#F97316",
          soft: "#FFEDD5",
          muted: "rgba(234, 88, 12, 0.14)",
          ring: "rgba(234, 88, 12, 0.35)",
        },
        ink: {
          DEFAULT: "#17212B",
          muted: "#475569",
          light: "#64748B",
        },
        mist: {
          DEFAULT: "#F4F6F9",
          subtle: "#E9EFF4",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(11, 31, 51, 0.06)",
        "card-hover": "0 12px 28px -4px rgba(11, 31, 51, 0.12)",
        glow: "0 8px 20px -4px rgba(234, 88, 12, 0.4)",
        "glow-sm": "0 4px 12px -2px rgba(234, 88, 12, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
