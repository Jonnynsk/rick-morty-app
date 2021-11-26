import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LocationList } from '../components/Locations/LocationList'
import { Search } from '../components/Search'
import { getAllLocations } from '../store/reducers/ActionCreators'

export const Locations = () => {
	const [pageNumber, setPageNumber] = useState(1)
	const [fetchLocations, setFetchLocations] = useState([])
	const { info, results } = fetchLocations
	const [search, setSearch] = useState('')

	const { locations } = useSelector(state => state.locations)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllLocations({ search, pageNumber }))
	}, [search])
	useEffect(() => {
		setFetchLocations(locations)
	})
	return (
		<div>
			<Search setSearch={setSearch} placeholder='Search location...' />
			<LocationList results={results} />
		</div>
	)
}
