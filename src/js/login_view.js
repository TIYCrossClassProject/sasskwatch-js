import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';


export default class LoginView extends Component {

	static propTypes = {
		onLoginToSignup: PropTypes.func.isRequired,
		onLoginSubmit: PropTypes.func.isRequired
	}


	dataHandler() {

	}

	render() {
		return (
			<div className="login-view">
				<SSF onData={::this.dataHandler}>
					<div><input type="text" name="username" placeholder=" Enter Your Username"/></div>
					<div><input type="password" name="password" placeholder=" Enter Your Password"/></div>
					<button>Log In</button>
				</SSF>
			</div>
		);
	}
}