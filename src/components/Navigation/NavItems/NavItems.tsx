import React, { FC } from 'react'

import { Styled } from './NavItems.styled'
import NavItem from './NavItem'

interface Props {
	items?: unknown
}

const NavItems: FC<Props> = () => {
	return (
		<Styled.Nav>
			<Styled.List>
				<NavItem link="/">Home</NavItem>
				<NavItem link="todos">Todos</NavItem>
			</Styled.List>
		</Styled.Nav>
	)
}

export default NavItems
