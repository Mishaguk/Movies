import React, { Component } from 'react';
import * as apiService from '../../services/apiService';
import Reviews from '../../components/Reviews/Reviews';

export default class ReviewsPage extends Component {
	state = { reviews: [] };
	componentDidMount() {
		apiService
			.fetchReviews(this.props.match.params.movieId)
			.then(reviews => this.setState({ reviews: reviews.results }));
	}
	render() {
		const { reviews } = this.state;
		return (
			<div>
				<Reviews items={reviews} />
			</div>
		);
	}
}
