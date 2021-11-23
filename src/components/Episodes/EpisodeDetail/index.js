import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import './styles.scss'

import { CharacterList } from '../../Characters/CharacterList'
import { Loading } from '../../Loading'

export const EpisodeDetail = () => {
	const { id } = useParams()
	const [info, setInfo] = useState([])
	const [results, setResults] = useState([])
	const { name, air_date, episode, characters } = info
	const api = `https://rickandmortyapi.com/api/episode/${id}`
	useEffect(() => {
		;(async function () {
			const data = await fetch(api).then(res => res.json())
			setInfo(data)

			const chars = await Promise.all(
				data.characters.map(async char => {
					const res = await fetch(char)
					return await res.json()
				})
			)
			setResults(chars)
		})()
	}, [api])
	return (
		<div>
			<div>
				<h1 className='title'>
					Episode {episode} : "{name}"
				</h1>
				<h2 className='title'>Original air date : {air_date}</h2>
			</div>
			<div>
				<h2 className='title'>Characters in this episode : </h2>
				{characters ? (
					<CharacterList results={results} />
				) : (
					<div className='load'>
						<Loading />
					</div>
				)}
			</div>
		</div>
	)
}
