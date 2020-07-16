import styled from 'styled-components'
import { Form } from 'formik'

const FormWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 46rem;
	padding: 2rem;
	border-radius: 4px;
	border: 1px solid lightgray;
`

const SCForm = styled(Form)`
	display: flex;
	flex-flow: column;
`

const Field = styled.input`
	padding: 0.5rem 1rem;
	background-color: ${({ theme }) => theme.colors.white};
	border: none;
	border-bottom: 1px solid gray;
	margin-bottom: 1rem;
`

export const Styled = {
	FormWrapper,
	SCForm,
	Field,
}
