import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Item = styled.li`
	display: flex;
`

const Anchor = styled(NavLink)`
	display: flex;
	align-items: center;
	border-bottom: 2px solid transparent;
	color: inherit;
	font-size: 1rem;
	padding: 1rem;
	text-transform: uppercase;
	transition: border-color 0.2s ease-in-out;
	&:hover {
		border-color: ${({ theme }) => theme.colors.white};
	}
`

export const Styled = {
	Item,
	Anchor,
}
