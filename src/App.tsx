import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Layout from './hoc/layout/Layout'
import Home from './containers/Home'
import Todos from './containers/Todos'

const App: FC = () => {
	return (
		<Layout>
			<Route exact path="/" component={Home} />
			<Route path="/todos" component={Todos} />
			<Redirect to="/" />
		</Layout>
	)
}

export default App
