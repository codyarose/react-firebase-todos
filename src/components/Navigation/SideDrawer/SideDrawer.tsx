import React, { FC, useState } from 'react'

import { Styled } from './SideDrawer.styled'
import Logo from '../../Logo'
// import NavItems from '../NavItems'
import Hamburger from './Hamburger'

const SideDrawer: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<Styled.Wrapper>
				<Styled.Content>
					<Logo title="Todo App" />
					<Hamburger opened={isOpen} toggle={() => setIsOpen(!isOpen)} />
				</Styled.Content>
			</Styled.Wrapper>
			<Styled.Panel opened={isOpen} />
		</>
	)
}

export default SideDrawer
