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
        base: {
          "00": "var(--00)",
          50: "var(--50)",
          150: "var(--150)",
          350: "var(--350)",
          1000: "var(--1000)",
        },
      },
      screens: {
        lg: "1024px",
      },
      spacing: {
        1: "2px",
        2: "4px",
        3: "6px",
        4: "8px",
        6: "12px",
        10: "20px",
        16: "32px",
        20: "40px",
      },
    },
  },
  plugins: [],
};
