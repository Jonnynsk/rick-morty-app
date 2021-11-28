import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import './styles.scss'

import { CharacterList } from '../../Characters/CharacterList'
import { Loading } from './../../Loading/index'
import { getSingleLocation } from '../../../store/reducers/ActionCreators'

export const LocationDetail = () => {
	const { id } = useParams()
	const [info, setInfo] = useState([])
	const [results, setResults] = useState([])
	const { name, type, dimension, residents } = info
	// const { locations, isLoading, error } = useSelector(state => state.locations)
	// const dispatch = useDispatch()
	const api = `https://rickandmortyapi.com/api/location/${id}`

	useEffect(() => {
		;(async function () {
			const data = await fetch(api).then(res => res.json())
			setInfo(data)

			const locas = await Promise.all(
				data.residents.map(async loca => {
					const res = await fetch(loca)
					return await res.json()
				})
			)
			setResults(locas)
		})()
	}, [api])

	// useEffect(() => {
	// 	dispatch(getSingleLocation({ id }))
	// }, [])
	// useEffect(() => {
	// 	setInfo(locations)
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
			<h1 className='title'>Location : "{name}"</h1>
			<h2 className='title'>Type : "{type}"</h2>
			<h2 className='title'>
				Dimension : "{dimension === '' ? 'Unknown' : dimension}"
			</h2>
			<div>
				<h2 className='title'>
					{residents < 1
						? 'No residents on this location'
						: 'Residents on this location :'}
				</h2>
				{residents ? (
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
