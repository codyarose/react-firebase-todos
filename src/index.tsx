import ReactDOM from 'react-dom'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import App from './App'
import theme from './utils/Theme'
import GlobalStyles from './utils/Global'
import store, { rrfProps } from './store'

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<>
						<App />
						<GlobalStyles />
					</>
				</ThemeProvider>
			</BrowserRouter>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root')
)
