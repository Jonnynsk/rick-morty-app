import React from 'react'

import './styles.scss'

import { Episode } from '../Episode'

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
