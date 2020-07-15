import 'styled-components'

import theme from './src/utils/Theme'

declare module 'styled-components' {
	type Theme = typeof theme
	export interface DefaultTheme extends Theme {}
}
