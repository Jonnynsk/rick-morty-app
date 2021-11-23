import React from 'react'

import './styles.scss'

import { Character } from '../Character'

export const CharacterList = ({ results }) => {
	let display
	{
		results
			? (display = results.map(char => (
					<div key={char.id}>
						<Character {...char} />
					</div>
			  )))
			: (display = 'No Characters Found :/')
	}
	return <div className='characters'>{display}</div>
}
