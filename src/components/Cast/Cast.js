import React, { Component } from 'react';
import './Cast.css';

const Cast = ({ items = [] }) => (
	<ul className='cast-ul'>
		{items.map(item => (
			<li key={item.id}>
				{item.name}
				<p>
					<span className='character-style'>Character : {item.character}</span>
				</p>
				<img
					width='80'
					height='100'
					src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
				/>
			</li>
		))}
	</ul>
);

export default Cast;
