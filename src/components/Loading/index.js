import React from 'react'

import './styles.scss'

import loading from '../../assets/images/loading.svg'

export const Loading = () => {
	return <img className='loading' src={loading} alt='loading...' />
}
