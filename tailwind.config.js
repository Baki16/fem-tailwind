/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      "primary-red": "hsl(0, 100%, 67%)",
      "primary-red-100": "hsl(0, 100%, 97%)",
      "primary-yellow": "hsl(39, 100%, 56%)",
      "primary-yellow-100": "hsl(39, 100%, 96%)",
      "primary-green": "hsl(166, 100%, 37%)",
      "primary-green-100": "hsl(166, 100%, 95%)",
      "primary-blue": "hsl(234, 85%, 45%)",
      "primary-blue-100": "hsl(234, 85%, 95%)",
      "gradient-slate-blue": "hsl(252, 100%, 67%)",
      "gradient-royal-blue": "hsl(241, 81%, 54%)",
      "gradient-violet-blue": "hsla(256, 72%, 46%, 1)",
      "gradient-persian-blue": "hsla(241, 72%, 46%, 0)",
      "neutral-blue": "hsl(221, 100%, 96%)",
      "neutral-lavender": "hsl(241, 100%, 89%)",
      "neutral-gray": "hsl(224, 30%, 27%)",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      fontFamily: {
        "sans-serif": ["Hanken Grotesk"],
      },
    },
  },
  plugins: [],
};
