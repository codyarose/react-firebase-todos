import ReactDOM from "react-dom"
import React from "react"
import { ThemeProvider } from "styled-components"

import App from "./App"
import theme from "./utils/Theme"
import GlobalStyles from "./utils/Global"

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<>
			<App />
			<GlobalStyles />
		</>
	</ThemeProvider>,
	document.getElementById("root")
)
