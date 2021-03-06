import { createSlice } from '@reduxjs/toolkit'

import { getAllEpisodes, getSingleEpisode } from './ActionCreators'

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
		[getAllEpisodes.fulfilled.type]: (state, action) => {
			state.isLoading = false
			state.error = ''
			state.episodes = action.payload
		},
		[getAllEpisodes.pending.type]: state => {
			state.isLoading = true
		},
		[getAllEpisodes.rejected.type]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		[getSingleEpisode.fulfilled.type]: (state, action) => {
			state.isLoading = false
			state.error = ''
			state.episodes = action.payload
		},
		[getSingleEpisode.pending.type]: state => {
			state.isLoading = true
		},
		[getSingleEpisode.rejected.type]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default episodesSlice.reducer
