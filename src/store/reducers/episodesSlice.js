import { createSlice } from '@reduxjs/toolkit'

import { fetchAllEpisodes } from './ActionCreators'

const initialState = {
	episodes: [],
	isLoading: false,
	error: '',
}

export const episodesSlice = createSlice({
	name: 'episodes',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAllEpisodes.fulfilled.type]: (state, action) => {
			state.isLoading = false
			state.error = ''
			state.episodes = action.payload
		},
		[fetchAllEpisodes.pending.type]: state => {
			state.isLoading = true
		},
		[fetchAllEpisodes.rejected.type]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default episodesSlice.reducer
