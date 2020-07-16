import styled from 'styled-components'

interface HamburgerProps {
	onClick: () => void
}
const Hamburger = styled.div<HamburgerProps>`
	display: inline-block;
	overflow: visible;
	padding: 15px;
	cursor: pointer;
	transition-timing-function: linear;
	transition-duration: 0.15s;
	transition-property: opacity, filter;
	text-transform: none;
	color: inherit;
	&:hover {
		opacity: 0.7;
	}
`

const Content = styled.div`
	position: relative;
	display: inline-block;
	width: 30px;
	height: 24px;
`

interface BarProps {
	opened: boolean
}
const Bar = styled.div<BarProps>`
	position: absolute;
	top: 50%;
	display: block;
	width: 100%;
	height: 4px;
	border-radius: 4px;
	transition-timing-function: ease;
	transition-duration: 0.15s;
	transition-property: transform;
	background-color: currentColor;

	&::before,
	&::after {
		display: block;
		position: absolute;
		content: '';
		left: 0;
		width: 100%;
		height: 4px;
		border-radius: 4px;
		background-color: currentColor;
		transition: bottom 0.08s ease-out 0s, top 0.08s ease-out 0s, opacity 0s linear;
	}
	&::before {
		top: ${({ opened }) => (opened ? '0' : '-10px')};
	}
	&::after {
		bottom: ${({ opened }) => (opened ? '0' : '-10px')};
	}
`

export const Styled = {
	Hamburger,
	Content,
	Bar,
}
