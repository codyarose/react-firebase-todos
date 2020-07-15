import React, { FC } from 'react'
import styled from 'styled-components'

import Navbar from '../../components/Navigation/Navbar'

const Layout: FC = ({ children }) => (
	<>
		<Navbar />
		<MainWrapper>{children}</MainWrapper>
	</>
)

export default Layout

const MainWrapper = styled.div`
	width: 100%;
`
