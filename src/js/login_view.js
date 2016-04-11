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
				<h1>Which Tech?</h1>
        <h2>Login</h2>
				<img id="img-circuit" src="./images/electronics.png"/>
				<SSF onData={::this.dataHandler}>
					<div><input className="login-input" type="email" name="email" placeholder=" Enter Your Email Address"/></div>
					<div><input className="login-input" type="password" name="password" placeholder=" Enter Your Password"/></div>
					<button>Log In</button>
				</SSF>
					<button onClick={onLoginToSignup}>Wait, I need to Sign Up!</button>
			</div>
		);
	}
}