import React, { Component } from 'react';
import * as apiService from '../../services/apiService';
import { Route } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';

export default class CastPage extends Component {
	state = { cast: null };

	componentDidMount() {
		console.log(this.props.match);
		apiService.fetchCast(this.props.match.params.movieId).then(console.log);
	}
	render() {
		return (
			<div>
				<Route path='/movies/:movieId/cast' component={Cast} />
			</div>
		);
	}
}
