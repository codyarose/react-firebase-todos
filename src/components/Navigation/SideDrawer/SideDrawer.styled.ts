import styled from 'styled-components'

const Wrapper = styled.header`
	position: relative;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.main};
	padding: 0.5rem 2rem;
	color: ${({ theme }) => theme.colors.white};
	display: none;
	z-index: 1;
	@media ${({ theme }) => theme.mediaQueries.sm} {
		display: flex;
	}
`

const Content = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`

interface PanelProps {
	opened: boolean
}
const Panel = styled.div<PanelProps>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(100vh - 83px);
	background-color: ${({ theme }) => theme.colors.mainDark};
	opacity: ${({ opened }) => (opened ? '1' : '0')};
	transform: translateX(${({ opened }) => (opened ? '0' : '100%')});
	transition: opacity 0.15s ease-out, transform 0.15s ease-out;
	z-index: -1;
`

export const Styled = {
	Wrapper,
	Content,
	Panel,
}
