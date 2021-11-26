import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getAllEpisodes = createAsyncThunk(
	'episode/getAllEpisodes',
	async ({ pageNumber, search }, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`https://rickandmortyapi.com/api/episode/?page=${pageNumber}&name=${search}`
			)
			return response.data
		} catch (e) {
			return rejectWithValue('Failed to load episodes')
		}
	}
)
export const getAllLocations = createAsyncThunk(
	'location/getAllLocations',
	async ({ pageNumber, search }, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`https://rickandmortyapi.com/api/location/?page=${pageNumber}&name=${search}`
			)
			return response.data
		} catch (e) {
			return rejectWithValue('Failed to load locations')
		}
	}
)
export const getAllCharacters = createAsyncThunk(
	'character/getAllCharacters',
	async ({ pageNumber, search }, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
			)
			return response.data
		} catch (e) {
			return rejectWithValue('Failed to load characters')
		}
	}
)
