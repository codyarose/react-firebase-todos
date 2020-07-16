import React, { FC } from 'react'

import { Styled } from './Hamburger.styled'

interface Props {
	opened: boolean
	toggle: () => void
}

const Hamburger: FC<Props> = ({ opened, toggle }) => {
	return (
		<Styled.Hamburger onClick={toggle}>
			<Styled.Content>
				<Styled.Bar opened={opened} />
			</Styled.Content>
		</Styled.Hamburger>
	)
}

export default Hamburger
