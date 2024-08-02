/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brand-pink": "#ffc6da",
        "brand-yellow": "#fff1a6",
        "brand-blue": "#bad8eb",
        "navy-blue": "#124c5f",
      },
    },
    fontFamily: {
      body: ["Roboto, system-ui"],
      desc: ["Pangolin, cursive"],
    },
  },
  plugins: [],
};
