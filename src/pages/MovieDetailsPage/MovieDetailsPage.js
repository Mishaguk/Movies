import React, { Component } from 'react';
import * as apiService from '../../services/apiService';
import Movie from '../../components/Movie/Movie';
import { Route, NavLink } from 'react-router-dom';
import CastPage from '../CastPage/CastPage';
import ReviewsPage from '../ReviewsPage/ReviewsPage';
import './MovieDetailsPage.css';

const getIdFromProps = props => props.match.params.movieId;

export default class MovieDetailsPage extends Component {
	state = { movie: null };

	componentDidMount() {
		const movie_id = getIdFromProps(this.props);
		apiService
			.fetchMovieWithId(movie_id)
			.then(movie => this.setState({ movie }));
	}

	handleGoBack = () => {
		this.props.history.goBack();
	};

	render() {
		const movie_id = getIdFromProps(this.props);
		const { movie } = this.state;

		return (
			<div>
				{movie === null && <h1>This film is not found , try any film</h1>}
				{movie && <Movie {...movie} onGoBack={this.handleGoBack} />}

				<NavLink className='cast-button-styles' to={`/movies/${movie_id}/cast`}>
					Cast
				</NavLink>
				<NavLink
					className='reviews-button-styles'
					to={`/movies/${movie_id}/reviews`}
				>
					Reviews{' '}
				</NavLink>
				<Route path='/movies/:movieId/reviews' component={ReviewsPage} />
				<Route path='/movies/:movieId/cast' component={CastPage} />
			</div>
		);
	}
}
