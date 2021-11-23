import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Episodes } from './../pages/Episodes'
import { EpisodeDetail } from '../components/Episodes/EpisodeDetail'
import { Locations } from './../pages/Locations'
import { LocationDetail } from '../components/Locations/LocationDetail'
import { Characters } from './../pages/Characters'
import { CharacterDetail } from '../components/Characters/CharacterDetail'

export const RoutesPath = () => {
	return (
		<Routes>
			<Route path='/' element={<Episodes />} />
			<Route path='/:id' element={<EpisodeDetail />} />

			
			<Route path='/locations' element={<Locations />} />
			<Route path='/locations/:id' element={<LocationDetail />} />


			<Route path='/characters' element={<Characters />} />
			<Route path='/characters/:id' element={<CharacterDetail />} />
		</Routes>
	)
}
