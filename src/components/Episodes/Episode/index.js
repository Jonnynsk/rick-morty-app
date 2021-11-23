import React from 'react'

import './styles.scss'

export const Episode = ({ name, air_date, episode }) => {
	return (
		<div className='episode'>
			<h3>{name}</h3>
			<div>{air_date}</div>
			{episode}
		</div>
	)
}
