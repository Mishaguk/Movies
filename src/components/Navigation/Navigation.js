import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
const activeStyle = {
	color: 'red',
};

const Navigation = () => (
	<div className='div-styles'>
		<NavLink to='/ ' className='Home-styles' activeStyle={activeStyle}>
			Home
		</NavLink>
		<NavLink to='/movies' className='Movies-styles' activeStyle={activeStyle}>
			Movies
		</NavLink>
	</div>
);

export default Navigation;
