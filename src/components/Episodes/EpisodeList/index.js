import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

import { Episode } from '../Episode'

export const EpisodeList = ({ results }) => {
	let display
	{
		results
			? (display = results.map(epi => (
					<div key={epi.id}>
						<NavLink className='epilink' to={`/${epi.id}`}>
							<Episode {...epi} />
						</NavLink>
					</div>
			  )))
			: (display = (
					<div className='title'>
						<h2>No Episodes Found</h2>
					</div>
			  ))
	}
	return <div className='episodes'>{display}</div>
}
