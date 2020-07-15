import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
	colors: {
		main: '#003459',
		mainDark: '#00171f',
		mainLight: '#007EA7',
		mainLighter: '#00A8E8',
		textColor: '#333',
		white: '#fff',
		shadow: 'rgba(0,0,0,0.2',
	},
	mediaQueries: {
		xs: `only screen and (max-width: 25em)`,
		sm: `only screen and (max-width: 37.5em)`,
		md: `only screen and (max-width: 56em)`,
		lg: `only screen and (max-width: 80em)`,
		xl: `only screen and (max-width: 90em)`,
	},
}

export default theme
