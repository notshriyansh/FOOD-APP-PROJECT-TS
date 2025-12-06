/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#1d4ed8",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
      // ✅ Add custom shimmer animation here
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
