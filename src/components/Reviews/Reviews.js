import React from 'react';

const Reviews = ({ items }) =>
	items.length > 0 ? (
		<ul>
			{items.map(item => (
				<li key={item.id}>{item.content}</li>
			))}
		</ul>
	) : (
		<h2>We don`t have any reviews for this movie.</h2>
	);

export default Reviews;
