/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  // mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/herobg.png')",
      },
    },
  },
  plugins: [],
};
