import axios from 'axios';

const API_KEY = 'd05f5f872f0f74667bcdb4179984cab2';

export const fetchTrendingMovies = () => {
	return axios
		.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
		.then(response => response.data);
};

export const fetchMovieWithId = movie_id => {
	return axios
		.get(
			`https://api.themoviedb.org/3/movie/${movie_id}?api_key=d05f5f872f0f74667bcdb4179984cab2`
		)
		.then(response => response.data);
};

export const fetchMoviesWithSearch = query => {
	return axios.get(
		`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
	);
};

export const fetchCast = movie_id => {
	return axios
		.get(
			`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`
		)
		.then(response => response.data);
};

export const fetchReviews = movie_id => {
	return axios
		.get(
			`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}`
		)
		.then(response => response.data);
};
