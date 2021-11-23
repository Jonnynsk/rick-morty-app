import React, { useEffect, useState } from 'react'

import { EpisodeList } from '../components/Episodes/EpisodeList'
import { Search } from '../components/Search'

export const Episodes = () => {
	const [pageNumber, setPageNumber] = useState(1)
	const [fetchEpisodes, setFetchEpisodes] = useState([])
	const { info, results } = fetchEpisodes
	const [search, setSearch] = useState('')
	const api = `https://rickandmortyapi.com/api/episode/?page=${pageNumber}&name=${search}`

	useEffect(() => {
		;(async function () {
			let data = await fetch(api).then(res => res.json())
			setFetchEpisodes(data)
		})()
	}, [api])

	return (
		<div>
			<Search setSearch={setSearch} placeholder='Search episode...' />
			<EpisodeList results={results} />
		</div>
	)
}
