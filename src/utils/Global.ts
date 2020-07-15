import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
	*,
	&::before,
	&::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	html {
		box-sizing: border-box;
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		font-weight: 400;
		line-height: 1.6;
	}

	a,
	input,
	textarea,
	button {
		outline: none;
		font-family: inherit;
		text-decoration: none;
	}
`
