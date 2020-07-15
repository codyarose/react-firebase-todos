import React, { FC } from 'react'

import { Styled } from './NavItem.styled'

interface Props {
	link: string
}

const NavItem: FC<Props> = ({ link, children }) => {
	return (
		<Styled.Item>
			<Styled.Anchor to={link}>{children}</Styled.Anchor>
		</Styled.Item>
	)
}

export default NavItem
