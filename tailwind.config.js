const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0f",
        foreground: "#e7e7ea",
        brandStart: "#7C3AED",
        brandEnd: "#22D3EE",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      backgroundImage: {
        hero:
          "radial-gradient(1200px 600px at 50% -20%, rgba(124,58,237,0.25), transparent 60%), " +
          "radial-gradient(800px 400px at 80% 20%, rgba(34,211,238,0.2), transparent 60%)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
