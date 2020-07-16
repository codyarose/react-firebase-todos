import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Layout from './hoc/layout/Layout'
import Home from './containers/Home'
import Todos from './containers/Todos'
import Login from './containers/Auth/Login/Login'

const App: FC = () => {
	return (
		<Layout>
			<Route exact path="/" component={Home} />
			<Route exact path="/todos" component={Todos} />
			<Route exact path="/login" component={Login} />
			<Redirect to="/" />
		</Layout>
	)
}

export default App
