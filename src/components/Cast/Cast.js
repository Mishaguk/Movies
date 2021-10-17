import React, { Component } from 'react';

const Cast = ({ items = [] }) => (
	<ul>
		{items.map(item => {
			<li key={item.id}>
				{item.name} {console.log(item.name)}
			</li>;
		})}
	</ul>
);

export default Cast;
