import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CharacterList } from '../../Characters/CharacterList'

export const LocationDetail = () => {
	const { id } = useParams()
	const [info, setInfo] = useState([])
	const [results, setResults] = useState([])
	const { name, type, dimension } = info
	const api = `https://rickandmortyapi.com/api/location/${id}`
	useEffect(() => {
		;(async function () {
			const data = await fetch(api).then(res => res.json())
			setInfo(data)

			let locas = await Promise.all(
				data.residents.map(async loca => {
					const res = await fetch(loca)
					return await res.json()
				})
			)
			setResults(locas)
		})()
	}, [api])
	return (
		<div>
			<h1 className='title'>Location : "{name}"</h1>
			<h2 className='title'>Type : "{type}"</h2>
			<h2 className='title'>Dimension : "{dimension}"</h2>
			<div>
				<h2 className='title'>Residents : </h2>
				<CharacterList results={results} />
			</div>
		</div>
	)
}
