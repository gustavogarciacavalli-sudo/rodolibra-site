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
          DEFAULT: "#1AE05A",
          hover: "#15C94F",
          muted: "rgba(26, 224, 90, 0.15)",
          ring: "rgba(26, 224, 90, 0.4)",
        },
        ink: {
          DEFAULT: "#17212B",
          muted: "#475569",
          light: "#64748B",
        },
        mist: {
          DEFAULT: "#F3F6F8",
          subtle: "#E9EFF4",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(11, 31, 51, 0.08)",
        "card-hover": "0 20px 35px -5px rgba(11, 31, 51, 0.14)",
        glow: "0 0 25px rgba(26, 224, 90, 0.35)",
        "glow-sm": "0 0 12px rgba(26, 224, 90, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
