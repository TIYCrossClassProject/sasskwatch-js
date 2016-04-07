import React, { Component, PropTypes } form 'react';
import NavBar from './nav_bar';

export default class GameOverView extends Component {

	static propTypes = {
		onPlayAgain = PropTypes.func.isRequired
	}

	render() {
		let { onPlayAgain } = this.props;
		return (
			<div className="game-over-view">
				<NavBar />
				<p>
					You guessed right XX out of YY times!
				</p>
				<button onClick={onPlayAgain}>
					Play Again?
				</button>
			</div>
		);
	}
}



// index.js

<NavBar onNavOptionSelect={} />