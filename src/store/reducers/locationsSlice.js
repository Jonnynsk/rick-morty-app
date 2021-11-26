import { createSlice } from '@reduxjs/toolkit'

import { getAllLocations } from './ActionCreators'

const initialState = {
	locations: [],
	isLoading: false,
	error: '',
}

export const locationsSlice = createSlice({
	name: 'locations',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllLocations.fulfilled.type]: (state, action) => {
			state.isLoading = false
			state.error = ''
			state.locations = action.payload
		},
		[getAllLocations.pending.type]: state => {
			state.isLoading = true
		},
		[getAllLocations.rejected.type]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default locationsSlice.reducer
