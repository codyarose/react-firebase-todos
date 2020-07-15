import React, { FC } from 'react'
import { Styled } from './Logo.styled'

interface Props {
	title: string
}

const Logo: FC<Props> = ({ title }) => {
	return <Styled.Wrapper>{title}</Styled.Wrapper>
}

export default Logo
