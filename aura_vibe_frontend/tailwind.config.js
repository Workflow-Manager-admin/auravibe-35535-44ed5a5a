module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        accent: "#780707"
      },
      fontFamily: {
        serif: ["'Times New Roman'", "Times", "serif"],
      }
    }
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
}
