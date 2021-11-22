import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Episodes } from './../pages/Episodes'
import { Locations } from './../pages/Locations'
import { Characters } from './../pages/Characters'

export const RoutesPath = () => {
	return (
		<Routes>
			<Route path='/' element={<Episodes />} />
			<Route path='/locations' element={<Locations />} />
			<Route path='/characters' element={<Characters />} />
		</Routes>
	)
}
