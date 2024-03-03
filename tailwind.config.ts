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
        brand: "var(--brand)",
        primary: "var(--primary)",
        primaryLight: "var(--primary-light)",
        primaryLighter: "var(--primary-lighter)",
        secondary: "var(--secondary)",
        secondaryAccent: "var(--secondary-accent)",
      },
      spacing: {
        small: "var(--small)",
        regular: "var(--regular)",
        medium: "var(--medium)",
        section: "var(--section)",
      },
    },
  },
  plugins: [],
};
export default config;
