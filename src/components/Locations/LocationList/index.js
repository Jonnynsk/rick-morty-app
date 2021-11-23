import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

import { Location } from '../Location'

export const LocationList = ({ results }) => {
	let display
	{
		results
			? (display = results.map((loca, index) => (
					<div key={index}>
						<NavLink className='localink' to={`/locations/${loca.id}`}>
							<Location {...loca} />
						</NavLink>
					</div>
			  )))
			: (display = <div className='title'>
			<h2>No Locations Found</h2>
		</div>)
	}
	return <div className='locations'>{display}</div>
}
