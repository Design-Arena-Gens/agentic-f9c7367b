import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        success: "#2ecc71",
        surface: "#f5f7fb",
        neutral: {
          900: "#1a1a1a",
          700: "#3c4858",
          500: "#6c7a89",
          300: "#d1d8e0",
          100: "#f0f4f8"
        }
      },
      boxShadow: {
        card: "0 10px 30px rgba(52, 152, 219, 0.08)",
        soft: "0 4px 14px rgba(0, 0, 0, 0.08)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
