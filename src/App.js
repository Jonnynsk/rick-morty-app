import React from 'react'

import { Header } from './components/Header'
import { RoutesPath } from './routes'

import './App.scss'

export const App = () => {
	return (
		<div>
			<Header />
			<div className='app'>
				<RoutesPath />
			</div>
		</div>
	)
}
