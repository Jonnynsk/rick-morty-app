import axios from 'axios'

export const instance = axios.create({
	baseURL: 'https://rickandmortyapi.com/api/',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	}
})