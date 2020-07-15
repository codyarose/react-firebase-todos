import React, { FC } from 'react'
import { Styled } from './Navbar.styled'

import Logo from '../Logo'

const Navbar: FC = () => {
	return (
		<Styled.Wrapper>
			<Logo title="Todo App" />
			<div>menu</div>
		</Styled.Wrapper>
	)
}

export default Navbar
