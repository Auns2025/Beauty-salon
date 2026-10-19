/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#110D0B',
          900: '#0C0908',
          800: '#110D0B',
          700: '#1A1411',
        },
        chocolate: {
          DEFAULT: '#1A1411',
          light: '#251D19',
        },
        bronze: {
          DEFAULT: '#3D2C1B',
          light: '#533D27',
        },
        gold: {
          DEFAULT: '#D9B46A',
          light: '#E8CA8A',
          muted: '#B88A44',
          deep: '#8F6A2C',
        },
        champagne: '#B88A44',
        ivory: {
          DEFAULT: '#FBF6F0',
          dark: '#F3E8DC',
        },
        beige: '#F3E8DC',
        darkText: '#2A211C',
        mutedText: '#7A6A5E',
        roseAccent: '#B5465A',
        luxury: {
          bg: '#100C0A',
          bgSecondary: '#1A120E',
          espresso: '#2B1D14',
          gold: '#D9B46A',
          goldHighlight: '#F0D394',
          goldHover: '#B88A44',
          whiteText: '#F8F5F0',
          secondaryText: '#B8AEA8',
          borderGold: 'rgba(217, 180, 106, 0.35)',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widestLuxury: '0.25em',
        editorial: '0.15em',
      },
      boxShadow: {
        luxury: '0 20px 45px rgba(17, 13, 11, 0.08)',
        luxuryHover: '0 25px 50px rgba(17, 13, 11, 0.16)',
        darkGlow: '0 15px 35px rgba(0, 0, 0, 0.4)',
        goldGlow: '0 0 25px rgba(217, 180, 106, 0.18)',
      },
    },
  },
  plugins: [],
}
