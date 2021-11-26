import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CharacterList } from '../components/Characters/CharacterList'
import { Search } from '../components/Search'
import { getAllCharacters } from '../store/reducers/ActionCreators'

export const Characters = () => {
	const [pageNumber, setPageNumber] = useState(1)
	const [fetchCharacters, setFetchCharacters] = useState([])
	const { info, results } = fetchCharacters
	const [search, setSearch] = useState('')

	const { characters } = useSelector(state => state.characters)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllCharacters({ search, pageNumber }))
	}, [search])
	useEffect(() => {
		setFetchCharacters(characters)
	})
	return (
		<div>
			<Search setSearch={setSearch} placeholder='Search character...' />
			<CharacterList results={results} />
		</div>
	)
}
