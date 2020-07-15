import React, { FC } from 'react'
import { Styled } from './Navbar.styled'

import Logo from '../../Logo'
import Container from '../../../hoc/layout/elements/Container'
import NavItems from '../NavItems'

const Navbar: FC = () => {
	return (
		<Styled.Wrapper>
			<Container>
				<Styled.Content>
					<Logo title="Todo App" />
					<NavItems items="" />
				</Styled.Content>
			</Container>
		</Styled.Wrapper>
	)
}

export default Navbar
