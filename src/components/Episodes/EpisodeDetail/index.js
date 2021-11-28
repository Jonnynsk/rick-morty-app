import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import './styles.scss'

import { CharacterList } from '../../Characters/CharacterList'
import { Loading } from '../../Loading'
import { getSingleEpisode } from '../../../store/reducers/ActionCreators'

export const EpisodeDetail = () => {
	const { id } = useParams()
	const [info, setInfo] = useState([])
	const [results, setResults] = useState([])
	const { name, air_date, episode, characters } = info
	const api = `https://rickandmortyapi.com/api/episode/${id}`
	// const { episodes, isLoading, error } = useSelector(state => state.episodes)
	// const dispatch = useDispatch()

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

	// Понял, как из стора доставить по id, но пока не пойму, как использовать тут Promise.all

	// useEffect(() => {
	// 	dispatch(getSingleEpisode({id}))
	// }, [])
	// useEffect(() => {
	// 	setInfo(episodes)
	// })

	// if (isLoading)
	// 	return (
	// 		<div className='load'>
	// 			<Loading />
	// 		</div>
	// 	)
	// if (error)
	// 	return (
	// 		<div className='title'>
	// 			<h2>{error}</h2>
	// 		</div>
	// 	)

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
