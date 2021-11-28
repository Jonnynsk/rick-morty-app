import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import './styles.scss'

import { getSingleCharacter } from '../../../store/reducers/ActionCreators'
import { Loading } from '../../Loading'

export const CharacterDetail = () => {
	const { id } = useParams()
	const [character, setCharacter] = useState([])
	const { name, image, gender, location, origin, species } = character
	const { characters, isLoading, error } = useSelector(state => state.characters)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getSingleCharacter({ id }))
	}, [])
	useEffect(() => {
		setCharacter(characters)
	})

	if (isLoading)
		return (
			<div className='load'>
				<Loading />
			</div>
		)
	if (error)
		return (
			<div className='title'>
				<h2>{error}</h2>
			</div>
		)

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
