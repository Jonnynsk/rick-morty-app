import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getSingleCharacter } from '../../../store/reducers/ActionCreators'

import './styles.scss'

export const CharacterDetail = () => {
	const { id } = useParams()
	const [character, setCharacter] = useState([])
	const { name, image, gender, location, origin, species } = character
	const { characters } = useSelector(state => state.characters)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getSingleCharacter({ id }))
	}, [])
	useEffect(() => {
		setCharacter(characters)
	})

	return (
		<div className='detail'>
			<div className='info'>
				<h1>{name}</h1>
				<div className='imagec'>
					<img src={image} alt='character image' />
				</div>
				<div>Gender: {gender}</div>
				<div>Location: {location?.name}</div>
				<div>Origin: {origin?.name}</div>
				<div>Species: {species}</div>
			</div>
		</div>
	)
}
