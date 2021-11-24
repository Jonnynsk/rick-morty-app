import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { EpisodeList } from '../components/Episodes/EpisodeList'
import { Search } from '../components/Search'
import { fetchAllEpisodes } from '../store/reducers/ActionCreators'
import { Loading } from './../components/Loading/index'

export const Episodes = () => {
	const [pageNumber, setPageNumber] = useState(1)
	const [fetchEpisodes, setFetchEpisodes] = useState([])
	const [search, setSearch] = useState('')
	const { info, results } = fetchEpisodes
	const api = `https://rickandmortyapi.com/api/episode/?page=${pageNumber}&name=${search}`

	useEffect(() => {
		;(async function () {
			const data = await fetch(api).then(res => res.json())
			setFetchEpisodes(data)
		})()
	}, [api])
	// const { episodes, isLoading, error } = useSelector(state => state.episodes)
	// const dispatch = useDispatch()
	// useEffect(() => {
	// 	dispatch(fetchAllEpisodes())
	// 	// setFetchEpisodes(episodes)
	// }, [])
	// useEffect(() => {
	// 	setFetchEpisodes(episodes)
	// })
	// if (isLoading)
	// 	return (
	// 		<div className='load'>
	// 			<Loading />
	// 		</div>
	// 	)
	// 	if(error)
	// 	return (
	// 		<div className='title'><h2>{error}</h2></div>
	// 	)
	return (
		<div>
			<Search setSearch={setSearch} placeholder='Search episode...' />
			<EpisodeList results={results} />
		</div>
	)
}
