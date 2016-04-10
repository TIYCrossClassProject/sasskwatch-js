import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';


export default class LoginView extends Component {

	static propTypes = {
		onLoginToSignup: PropTypes.func.isRequired,
		onLoginSubmit: PropTypes.func.isRequired
	}


	dataHandler(data) {
		this.props.onLoginSubmit(data);
	}

	render() {
		let { onLoginToSignup } = this.props;
		return (
			<div className="login-view">
				<SSF onData={::this.dataHandler}>
					<div><input type="email" name="email" placeholder=" Enter Your Email Address"/></div>
					<div><input type="password" name="password" placeholder=" Enter Your Password"/></div>
					<button>Log In</button>
				</SSF>
					<button onClick={onLoginToSignup}>Wait, I need to Sign Up!</button>
			</div>
		);
	}
}