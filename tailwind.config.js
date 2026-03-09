/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        'lato-bold': ["Lato", "sans-serif"],
        britannic: ["Britannic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
