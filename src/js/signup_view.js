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
		onAvatarAdd: PropTypes.func.isRequired
	}

	dropHandler([file]) {
	
		this.setState({preview: file.preview})
		this.file = file;
		console.log(file);
	}

	dataHandler(data) {
		data.file = this.file;
		this.props.onAvatarAdd(data);
	}

	render() {
		let { preview } = this.state;
		return (
			<div className="signup-view">
				<div><h2>Sign Up to Play Now!</h2></div>
				<SSF onData={::this.dataHandler}>
					<div><input type="text" name="firstName" placeholder=" First Name"/></div>
					<div><input type="text" name="lastName" placeholder=" Last Name"/></div>
					<div><input type="text" name="username" placeholder=" Username"/></div>
					<div><input type="text" name="email" placeholder=" Email Address"/></div>
					<div><input type="password" name="password" placeholder=" Create Password"/></div>
					
						<Dropzone className="dropzone" onDrop={::this.dropHandler}>
							<img id="signup-placeholder" height="200" width="200" src={preview} alt="Drop Image Here"/>
						</Dropzone>
					
					<button>Submit</button>
				</SSF>
			</div>
		);
	}
}

// <div id="signup-drop">
// </div>




