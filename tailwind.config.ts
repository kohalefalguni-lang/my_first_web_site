import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F8F7",
        ink: "#10201C",
        muted: "#55655F",
        line: "#D3DCD8",
        brand: { DEFAULT: "#0E5A4A", dark: "#0A4235", soft: "#E3EFEB" },
        gold: "#D9A21B",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
