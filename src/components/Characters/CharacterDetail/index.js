import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import './styles.scss'

export const CharacterDetail = () => {
    const { id } = useParams()
	const [character, setCharacter] = useState([])
	const api = `https://rickandmortyapi.com/api/character/${id}`
	const { name, image, gender, location, origin, species } = character
	useEffect(() => {
		;(async function () {
			const data = await fetch(api).then(res => res.json())
			setCharacter(data)
		})()
	}, [api])
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
