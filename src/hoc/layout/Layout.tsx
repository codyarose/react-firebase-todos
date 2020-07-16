import React, { FC } from 'react'
import styled from 'styled-components'

import Navbar from '../../components/Navigation/Navbar'
// import SideDrawer from '../../components/Navigation/SideDrawer'

const Layout: FC = ({ children }) => (
	<>
		<Navbar />
		{/* <SideDrawer /> */}
		<MainWrapper>{children}</MainWrapper>
	</>
)

export default Layout

const MainWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 2rem 0;
`
