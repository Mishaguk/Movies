import React, { Component } from 'react';
import * as apiService from '../services/apiService';
import MoviesList from '../components/MoviesList';
import { Route } from 'react-router-dom';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
export default class HomePage extends Component {
	state = { items: [] };
	componentDidMount() {
		apiService
			.fetchTrendingMovies()
			.then(items => this.setState({ items: items.results }));
	}

	render() {
		const { items } = this.state;
		return (
			<div>
				<MoviesList items={items} />
			</div>
		);
	}
}
