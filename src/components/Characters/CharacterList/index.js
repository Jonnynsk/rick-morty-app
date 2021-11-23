import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

import { Character } from '../Character'

export const CharacterList = ({ results }) => {
	let display
	{
		results
			? (display = results.map(char => (
					<div key={char.id}>
						<NavLink className='link' to={`/characters/${char.id}`}>
							<Character {...char} />
						</NavLink>
					</div>
			  )))
			: (display =<div className='title'>
			<h2>No Characters Found</h2>
		</div>)
	}
	return <div className='characters'>{display}</div>
}
