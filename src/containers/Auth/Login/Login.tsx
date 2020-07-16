import React, { FC } from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { Styled } from '../../../components/Form/Form.styled'
import Input from '../../../components/Form/Input'

const LoginSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string().required('Password is required'),
})

interface Props {}

const Login: FC<Props> = () => {
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={LoginSchema}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values)
			}}
		>
			{({ isSubmitting, isValid }) => (
				<Styled.FormWrapper>
					<Styled.SCForm>
						<Field type="email" name="email" placeholder="Email address" component={Input} />
						<ErrorMessage name="email" />
						<Field type="password" name="password" placeholder="Password" component={Input} />
						<ErrorMessage name="password" />
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Styled.SCForm>
				</Styled.FormWrapper>
			)}
		</Formik>
	)
}

export default Login
