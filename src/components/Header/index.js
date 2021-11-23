import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

export const Header = () => {
	return (
		<header>
			<NavLink to='/'>Episodes</NavLink>
			<NavLink to='/locations'>Locations</NavLink>
			<NavLink to='/characters'>Characters</NavLink>
		</header>
	)
}
