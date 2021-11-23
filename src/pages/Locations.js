import React, { useEffect, useState } from 'react'

import { LocationList } from '../components/Locations/LocationList'
import { Search } from '../components/Search'

export const Locations = () => {
	const [pageNumber, setPageNumber] = useState(1)
	const [fetchLocations, setFetchLocations] = useState([])
	const { info, results } = fetchLocations
	const [search, setSearch] = useState('')
	const api = `https://rickandmortyapi.com/api/location/?page=${pageNumber}&name=${search}`

	useEffect(() => {
		;(async function () {
			const data = await fetch(api).then(res => res.json())
			setFetchLocations(data)
		})()
	}, [api])
	return (
		<div>
			<Search setSearch={setSearch} placeholder='Search location...' />
			<LocationList results={results} />
		</div>
	)
}
