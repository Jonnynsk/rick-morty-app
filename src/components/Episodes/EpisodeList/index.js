import React from 'react'
import { NavLink } from 'react-router-dom'
import { Episode } from '../Episode'

import './styles.scss'

export const EpisodeList = ({ results }) => {
	let display
	{
		results ? (display = results.map(x => <Episode {...x} />)) : 'NOOO'
	}
	return <>{display}</>
}
