import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LocationList } from '../components/Locations/LocationList'
import { Search } from '../components/Search'
import {
	getAllLocations,
	locationsInfinite,
} from '../store/reducers/ActionCreators'

export const Locations = () => {
	const [loading, setLoading] = useState(false)
	const [pageNumber, setPageNumber] = useState(1)
	const [fetchLocations, setFetchLocations] = useState([])
	const { info, results } = fetchLocations
	const [search, setSearch] = useState('')

	const { locations } = useSelector(state => state.locations)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllLocations({ search, pageNumber }))
		setLoading(true)
	}, [search, pageNumber])
	useEffect(() => {
		setFetchLocations(locations)
		// dispatch(locationsInfinite())
	})

	// const loadMore = () => {
	// 	setPageNumber(prevPage => prevPage + 1)
	// }

	// const pageEnd = useRef()
	// let num = 1
	// useEffect(() => {
	// 	if (loading) {
	// 		const observer = new IntersectionObserver(
	// 			entries => {
	// 				if (entries[0].isIntersecting) {
	// 					num++
	// 					loadMore()
	// 					if (num >= 5) {
	// 						observer.unobserve(pageEnd.current)
	// 					}
	// 				}
	// 			},
	// 			{ threshold: 1 }
	// 		)
	// 		observer.observe(pageEnd.current)
	// 	}
	// }, [loading, num])

	return (
		<div>
			<Search setSearch={setSearch} placeholder='Search location...' />
			{/* <button onClick={loadMore} ref={pageEnd}>
				Next
			</button> */}
			<LocationList results={results} />
		</div>
	)
}
