import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';

export default class SignupView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			preview: '../images/drop-here.png'
		}
	}

	static propTypes = {
		onSwitchToLogin: PropTypes.func.isRequired,
		onSignupSubmit: PropTypes.func.isRequired,
	}

	dropHandler([avatar]) {
	
		this.setState({preview: avatar.preview})
		this.avatar = avatar;
		console.log(avatar);
	}

	dataHandler(data) {
		data.avatar = this.avatar;
		this.props.onSignupSubmit(data);
	
	}

	render() {
		let { preview } = this.state;
		let { onSignupSubmit, onSwitchToLogin } = this.props;
		return (
			<div className="signup-view">
				<div><h2>Sign Up to Play Now!</h2></div>
				<SSF onData={::this.dataHandler}>
					<div><input className="signup-input" type="text" name="first" placeholder=" First Name"/></div>
					<div><input className="signup-input" type="text" name="last" placeholder=" Last Name"/></div>
					<div><input className="signup-input" type="text" name="alias" placeholder=" Username"/></div>
					<div><input className="signup-input" type="text" name="email" placeholder=" Email Address"/></div>
					<div><input className="signup-input" type="password" name="password" placeholder=" Create Password"/></div>
					
						<Dropzone className="dropzone" onDrop={::this.dropHandler}>
							<img id="signup-placeholder" height="200" width="200" src={preview} alt="Drop Image Here"/>
						</Dropzone>
					
					<button>Submit</button>
				</SSF>
					<button onClick={onSwitchToLogin}>I Already Have An Account</button>
			</div>
		);
	}
}








