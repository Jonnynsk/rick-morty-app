import { createSlice } from '@reduxjs/toolkit'

import { getAllCharacters } from './ActionCreators'

const initialState = {
	characters: [],
	isLoading: false,
	error: '',
}

export const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllCharacters.fulfilled.type]: (state, action) => {
			state.isLoading = false
			state.error = ''
			state.characters = action.payload
		},
		[getAllCharacters.pending.type]: state => {
			state.isLoading = true
		},
		[getAllCharacters.rejected.type]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default charactersSlice.reducer
