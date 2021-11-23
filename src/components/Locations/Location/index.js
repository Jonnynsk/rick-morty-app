import React from 'react'

import './styles.scss'

export const Location = ({ name, type, dimension }) => {
	return (
		<div className='location'>
			<h3>{name}</h3>
			<div>{type}</div>
			{dimension}
		</div>
	)
}
