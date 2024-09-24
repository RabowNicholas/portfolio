/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "0px",
      md: "748px",
      lg: "1024px",
    },
    extend: {
      colors: {
        richBlack: "#101010",
        darkBlack: "#1A1A1A",
        grayishBlack: "#2A2A2A",
        neonPurple: "#A200FF",
        lavender: "#9B59B6",
        lightLavender: "#D7B2E6",
        darkViolet: "#7F00FF",
        apricot: "#F8B85A",
        peach: "#F2A76D",
      },
    },
  },
  plugins: [],
};
