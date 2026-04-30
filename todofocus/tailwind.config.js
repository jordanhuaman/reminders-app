/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/*/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        appbgprimary:'#f6f7f9',
        appbgsecundary:'#0e1f54',
        apptextprimary:'#232744',
        apptextsecundary: '#a6a3ac',
        apptexttercerary:'#a5a6b7'
      }
    },
  },
  plugins: [],
}