import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

import { Location } from '../Location'

export const LocationList = ({ results }) => {
	let display
	{
		results
			? (display = results.map(loca => (
					<div key={loca.id}>
						<NavLink className='localink' to={`/locations/${loca.id}`}>
							<Location {...loca} />
						</NavLink>
					</div>
			  )))
			: (display = 'No Locations Found :/')
	}
	return <div className='locations'>{display}</div>
}
