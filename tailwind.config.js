/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "coral-red": "#ef4444",
        "coral-red-hover": "#fca5a5",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
