import ReactDOM from 'react-dom'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import theme from './utils/Theme'
import GlobalStyles from './utils/Global'

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<>
				<App />
				<GlobalStyles />
			</>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
)
