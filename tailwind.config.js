/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      md: "768px",
      xl: "1280px",
    }
  },
  plugins: [],
};
