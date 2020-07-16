import React, { FC } from 'react'

import { Styled } from './Form.styled'

interface Props {
	field: unknown
	form: {
		touched: unknown
		errors: unknown
	}
}

const Input: FC<Props> = ({ field, form: { touched, errors }, ...props }) => {
	return <Styled.Field {...field} {...props} />
}

export default Input
