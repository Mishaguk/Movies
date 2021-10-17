import React from 'react';
import './Movie.css';

const Movie = ({ title, overview, backdrop_path, release_date, onGoBack }) => (
	<article className='article-styles'>
		<button type='button' onClick={onGoBack}>
			Go back
		</button>
		<h2>
			{title} ({release_date})
		</h2>

		<img width='420' src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
		<h3>
			<b>Overview : </b>
		</h3>
		<span>{overview}</span>
	</article>
);

export default Movie;
