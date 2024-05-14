/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './safelist.txt'],
	theme: {
		screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    fontFamily: {
      sans: ["Space Grotesk","sans-serif"],
    },
    filter: {
      none: "none",
      grayscale: "grayscale(1)",
    },
		extend: {
      colors: {
        'offwhite': {
          DEFAULT: '#F8F7F4'
        },
        'grey': {
          '100': '#EDEBEE',
					'300': '#B5B5B5',
					'500': '#A3A3A3',
					'700': '#7A7A7A',
					'900': '#2D2C40',
        }
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        128: "32rem",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      borderRadius: {
        DEFAULT: '5px',
				"xl": '20px',
				"2xl": '30px',
      },
      boxShadow: {
        lg: '0 1px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      },
      inset: (theme, { negative }) => ({
        full: "100%",
        "1/2": "50%",
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
        25: "25vh",
        50: "50vh",
        75: "75vh",
      }),
      screens: {
        'landscape': {'raw': '(orientation: landscape)'},
      },
    },
	},
	variants: {
    backgroundColor: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
    padding: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
  },
	plugins: [],
	corePlugins: {
    container: false,
  },
}