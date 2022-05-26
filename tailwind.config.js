module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
       Krona: ["Krona One", "sans-serif"],
       Montserrat: ["Montserrat", "sans-serif"],
       Poppins: ["Rampart One", "sans-serif"]
      },
      backgroundImage: {
        'bg1': "url('/bg/bg1.png')",
        'bg2': "url('/bg/bg2.png')",
        'bg3': "url('/bg/bg3.png')",
        'bg4': "url('/bg/bg4.png')",
        'bg5': "url('/bg/bg5.png')"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
