import React, { Component, PropTypes } from 'react';

export default class LoginView extends Component {

	static propTypes = {
		onLoginToSignup: PropTypes.func.isRequired,
		onLoginSubmit: PropTypes.func.isRequired
	}

	render() {
		return (
			<div className="login-view">
				<SSF onData={dataHandler}>
					<input type="text" name="username" placeholder=" Enter Your Username"></input>
					<input type="password" name="password" placeholder=" Enter Your Password"></input>
					<button>Log In</button>
				</SSF>
			</div>
		);
	}
}