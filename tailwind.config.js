/** @type {import('tailwindcss').Config} */
module.exports = {
  	content: [
  	  	"./src/**/*.{js,jsx,ts,tsx}"
  	],
  	theme: {
  	  	extend: {
			fontFamily:{
				body: ['Rubik']
			},
			fontWeight: {
				thin: '400',
				medium: '500',
				bold: '700'
			},
			colors:{
				grey: {
					light: 'hsl(0, 0%, 59%)',
					dark: 'hsl(0, 0%, 17%)'
				}
			}
  	  	},
  	},	
  	plugins: [],
}
