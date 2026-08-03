import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3C2A98",
          primaryDark: "#2B1C7A",
          primaryLight: "#533EE1",
          purpleDark: "#1E1256",
          softBg: "#F6F4FE",
          accent: "#3C2A98",
          dark: "#0F172A",
          muted: "#64748B",
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
