import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api'

// Episodes

// get episodes
export const getAllEpisodes = createAsyncThunk(
	'episode/getAllEpisodes',
	async ({ pageNumber, search }, { rejectWithValue }) => {
		try {
			const response = await instance.get(
				`episode/?page=${pageNumber}&name=${search}`
			)
			return response.data
		} catch (e) {
			return rejectWithValue('Failed to load episodes')
		}
	}
)
// get single episode
export const getSingleEpisode = createAsyncThunk(
	'episode/getSingleEpisode',
	async ({ id }, { rejectWithValue }) => {
		try {
			const response = await instance.get(`episode/${id}`)
			return response.data
		} catch (e) {
			return rejectWithValue('Failed to load episode')
		}
	}
)
// sort episodes
export const sortEpisodes = createAsyncThunk(
	'episode/sortEpisodes',
	async ({ name }, { rejectWithValue }) => {
		try {
			const response = await instance.get(`episode/?name=${name}`)
			return response.data
		} catch (e) {
			return rejectWithValue('Failed to sort episodes')
		}
	}
)

// Locations

// get locations
export const getAllLocations = createAsyncThunk(
	'location/getAllLocations',
	async ({ pageNumber, search }, { rejectWithValue }) => {
		try {
			const response = await instance.get(
				`location/?page=${pageNumber}&name=${search}`
			)
			return response.data
		} catch (e) {
			return rejectWithValue('Failed to load locations')
		}
	}
)
// get single location
export const getSingleLocation = createAsyncThunk(
	'location/getSingleLocation',
	async ({ id }, { rejectWithValue }) => {
		try {
			const response = await instance.get(`location/${id}`)
			return response.data
		} catch (e) {
			return rejectWithValue('Failed to load location')
		}
	}
)

// Characters

// get characters
export const getAllCharacters = createAsyncThunk(
	'character/getAllCharacters',
	async ({ pageNumber, search }, { rejectWithValue }) => {
		try {
			const response = await instance.get(
				`character/?page=${pageNumber}&name=${search}`
			)
			return response.data
		} catch (e) {
			return rejectWithValue('Failed to load characters')
		}
	}
)
// get single character
export const getSingleCharacter = createAsyncThunk(
	'character/getSingleCharacter',
	async ({ id }, { rejectWithValue }) => {
		try {
			const response = await instance.get(`character/${id}`)
			return response.data
		} catch (e) {
			return rejectWithValue('Failed to load character')
		}
	}
)