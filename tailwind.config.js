module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      animation:{
        spin_slow: 'spin 6s linear infinite',
      },
      colors:{
        darkTheme:'#11001F'
      }
    },
  },
  darkMode: 'class',
  plugins: []
}