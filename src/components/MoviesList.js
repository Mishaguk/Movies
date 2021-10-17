import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ items = [] }) => (
	<ul>
		{items.map(item => (
			<li key={item.id}>
				<Link to={`/movies/${item.id}`}>
					{item.title} {item.name}
				</Link>
			</li>
		))}
	</ul>
);

export default MoviesList;
