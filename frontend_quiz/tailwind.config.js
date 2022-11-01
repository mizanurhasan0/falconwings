/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: "Josefin Sans",
      },
      colors: {
        bgColor: "#F9DE56",
        btnColot: "#4BB9B7",
        ansBg: "#fff8e1",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
