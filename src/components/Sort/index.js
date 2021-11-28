import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortCharacters } from '../../store/reducers/ActionCreators'

export const FilterGender = () => {
	const { characters } = useSelector(state => state.characters)
	const dispatch = useDispatch()
	const [chars, setChars] = useState([])
	const genders = ['female', 'male', 'genderless', 'unknown']
	const [gender, updateGender] = useState('')

	useEffect(() => {
		dispatch(sortCharacters({ gender }))
	}, [gender])
	useEffect(() => {
		setChars(characters)
	})

	return (
		<select>
			{genders.map((item, index) => {
				return (
					<option key={index} onChange={e => updateGender(e.target.value)}>
						{item}
					</option>
				)
			})}
		</select>
	)
}
