export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "system-ui", "sans-serif"],
        gerbil: ["New Gerbil", "system-ui", "sans-serif"],
      },
      colors: {
        primaryYellow: "#FFC250",
        heroGreen: "#D7EEDD",
        heroPink: "#FFC2EA",
      },
    },
  },
  plugins: [],
};