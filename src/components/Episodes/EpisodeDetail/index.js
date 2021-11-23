import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import './styles.scss'

import { CharacterList } from '../../Characters/CharacterList'

export const EpisodeDetail = () => {
	const {id} = useParams()
	const [info, setInfo] = useState([])
	const [results, setResults] = useState([])
	const { name, air_date, episode } = info
	const api = `https://rickandmortyapi.com/api/episode/${id}`
	useEffect(() => {
		;(async function () {
			const data = await fetch(api).then(res => res.json())
			setInfo(data)

			let chars = await Promise.all(
				data.characters.map(async (char) => {
					const res = await fetch(char)
					return await res.json()
				})
			)
			setResults(chars)
		})()
	}, [api])
	return (
		<div>
			{name}
			<CharacterList results={results} />
		</div>
	)
}
