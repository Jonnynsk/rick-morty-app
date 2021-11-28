import { createSlice } from '@reduxjs/toolkit'

import { getAllLocations, getSingleLocation } from './ActionCreators'

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
			// state.locations = state.locations.concat(action.payload)
		},
		[getAllLocations.pending.type]: state => {
			state.isLoading = true
		},
		[getAllLocations.rejected.type]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		[getSingleLocation.fulfilled.type]: (state, action) => {
			state.isLoading = false
			state.error = ''
			state.locations = action.payload
		},
		[getSingleLocation.pending.type]: state => {
			state.isLoading = true
		},
		[getSingleLocation.rejected.type]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default locationsSlice.reducer
