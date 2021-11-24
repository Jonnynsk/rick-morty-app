import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAllEpisodes = createAsyncThunk(
	'user/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('https://rickandmortyapi.com/api/episode')
			return response.data.results
		} catch (e) {
			return thunkAPI.rejectWithValue('Не удалось загрузить эпизоды')
		}
	}
)

// export const searchEpisodes = createAsyncThunk(
// 	'user/search',
// 	async (_, thunkAPI) => {
// 		try {
// 			const response = await axios.get(`https://rickandmortyapi.com/api/episode/?name=${search}`)
// 			return response.data.results
// 		} catch (e) {
// 			return thunkAPI.rejectWithValue('Не удалось загрузить эпизоды')
// 		}
// 	}
// )

