import React from 'react'

import './styles.scss'

import { Location } from '../Location'

export const LocationList = ({ results }) => {
	let display
	{
		results
			? (display = results.map(loca => (
					<div key={loca.id}>
						<Location {...loca} />
					</div>
			  )))
			: (display = 'No Locations Found :/')
	}
	return <div className='locations'>{display}</div>
}
