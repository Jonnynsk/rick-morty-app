import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import './styles.scss'

export const EpisodeDetail = () => {
	const { id } = useParams()
	const [info, setInfo] = useState([])
	const { name, air_date, episode, characters } = info
	const api = `https://rickandmortyapi.com/api/episode/${id}`
	useEffect(() => {
		;(async function () {
			const data = await fetch(api).then(res => res.json())
			setInfo(data)
		})()
	}, [api])
	return <div>{name}</div>
}
