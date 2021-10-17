import React, { Component } from 'react';
import * as apiService from '../../services/apiService';
import { Route } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';

export default class CastPage extends Component {
	state = { cast: [] };

	componentDidMount() {
		apiService
			.fetchCast(this.props.match.params.movieId)
			.then(cast => this.setState({ cast: cast.cast }));
	}
	render() {
		const { cast } = this.state;
		return (
			<div>
				<Cast items={cast} />
			</div>
		);
	}
}
