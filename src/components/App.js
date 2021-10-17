import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import Navigation from './Navigation/Navigation';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';

export default class App extends Component {
	state = {};
	render() {
		return (
			<div>
				<Navigation />
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/movies/:movieId' component={MovieDetailsPage} />
					<Route path='/movies' component={MoviesPage} />
					<Route component={HomePage} /> not found
				</Switch>
			</div>
		);
	}
}
