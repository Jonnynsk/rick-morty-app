import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

import { Location } from '../Location'
import { Loading } from './../../Loading/index';

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
			<h2><Loading /></h2>
		</div>)
	}
	return <div className='locations'>{display}</div>
}
