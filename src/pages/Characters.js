import React, { useEffect, useState } from 'react'
import { CharacterList } from '../components/Characters/CharacterList'

export const Characters = () => {
	const [pageNumber, setPageNumber] = useState(1)
	const [fetchCharacters, setFetchCharacters] = useState([])
	const { info, results } = fetchCharacters
	console.log(results)
	const [search, setSearch] = useState('')
	const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

	useEffect(() => {
		;(async function () {
			let data = await fetch(api).then(res => res.json())
			setFetchCharacters(data)
		})()
	}, [api])
	return (
		<div>
			<CharacterList results={results} />
		</div>
	)
}
