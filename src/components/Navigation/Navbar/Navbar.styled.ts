import styled from 'styled-components'

const Wrapper = styled.header`
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.main};
	padding: 0.5rem 2rem;
	color: ${({ theme }) => theme.colors.white};
`

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Styled = {
	Wrapper,
	Content,
}
