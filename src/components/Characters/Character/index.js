import React from 'react'

import './styles.scss'

export const Character = ({ name, status, species, image, location }) => {
	return (
		<div className='character'>
			<div>
				<img src={image} alt='' className='image' />
			</div>
			<h3>{name}</h3>
			<div>{status}</div>
			{species}
			<div>{location.name}</div>
		</div>
	)
}
