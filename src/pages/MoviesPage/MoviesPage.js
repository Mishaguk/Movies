import React, { Component } from 'react';
import './Movies.css';
import * as apiService from '../../services/apiService';
import MoviesList from '../../components/MoviesList';
export default class MoviesPage extends Component {
	state = { query: '', items: [] };
	handleChange = e => {
		this.setState({ query: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();

		apiService
			.fetchMoviesWithSearch(this.state.query)
			.then(data => this.setState({ items: data.data.results }));

		this.setState({ query: '' });
	};

	render() {
		const { query, items } = this.state;
		return (
			<div>
				<header className='Searchbar'>
					<form onSubmit={this.handleSubmit} className='SearchForm'>
						<input
							value={query}
							onChange={this.handleChange}
							className='SearchForm-input'
							type='text'
							placeholder='Search images and photos'
						/>
						<button type='submit' className='SearchForm-button'>
							<span className='SearchForm-button-label'>Search</span>
						</button>
					</form>
				</header>
				<MoviesList items={items} />
			</div>
		);
	}
}
