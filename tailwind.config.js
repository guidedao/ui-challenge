/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "day-00": "#FFFFFF",
        "day-50": "rgba(48, 42, 42, 0.05)",
        "day-150": "rgba(48, 42, 42, 0.15)",
        "day-350": "rgba(48, 42, 42, 0.35)",
        "day-1000": "#302A2A",
        "night-00": "#302A2A",
        "night-50": "rgba(255, 255, 255, 0.05)",
        "night-150": "rgba(255, 255, 255, 0.15)",
        "night-350": "rgba(255, 255, 255, 0.35)",
        "night-1000": "#FFFFFF",
      },
      screens: {
        lg: "1024px",
      },
      spacing: {
        1: "2px",
        6: "12px",
        16: "32px",
      },
    },
  },
  plugins: [],
};
