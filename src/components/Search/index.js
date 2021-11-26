import React from 'react'

import './styles.scss'

export const Search = ({ setSearch, placeholder }) => {
	return (
		<div className='form'>
			<input
				onChange={(e) => setSearch(e.target.value)}
				placeholder={placeholder}
				type='text'
			/>
		</div>
	)
}
