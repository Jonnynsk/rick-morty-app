import React from 'react'
import { NavLink } from 'react-router-dom'
import { Episode } from '../Episode'

import './styles.scss'

export const EpisodeList = ({ results }) => {
	let display
	{
		results
			? (display = results.map(epi => (
					<div key={epi.id}>
						<Episode {...epi} />
					</div>
			  )))
			: (display = 'No Episodes Found :/')
	}
	return <div className='episodes'>{display}</div>
}
