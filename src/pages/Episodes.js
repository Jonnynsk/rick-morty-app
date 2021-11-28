import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { EpisodeList } from '../components/Episodes/EpisodeList'
import { Search } from '../components/Search'
import { getAllEpisodes } from '../store/reducers/ActionCreators'

export const Episodes = () => {
	const [pageNumber, setPageNumber] = useState(1)
	const [fetchEpisodes, setFetchEpisodes] = useState([])
	const [search, setSearch] = useState('')
	const { info, results } = fetchEpisodes

	const { episodes, isLoading, error } = useSelector(state => state.episodes)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllEpisodes({ search, pageNumber }))
	}, [search])
	useEffect(() => {
		setFetchEpisodes(episodes)
	})

	// если поставить isLoading, то поиск сходит с ума (перезагружает страницу после каждого символа)
	// а если поставить error, то поиск совсем исчезает, после несовпадения

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
			<Search setSearch={setSearch} placeholder='Search episode...' />
			<EpisodeList results={results} />
		</div>
	)
}
