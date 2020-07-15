import styled from 'styled-components'

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.main};
	padding: 0.5rem 2rem;
`

export const Styled = {
	Wrapper,
}
