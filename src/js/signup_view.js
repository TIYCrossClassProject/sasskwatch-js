import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-sropzone';

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
		onAdd: PropTypes.func.isRequired
	}

	dropHandler([file]) {
		this.setState({preview: file.preview})
		this.file = file;
	}

	dataHandler(data) {
		data.file = this.file;
		this.props.onAdd(data);
	}

	render() {
		let { preview } = this.state;
		return (
			<div className="signup-view">
				<SSF onData={::this.dataHandler}>
					<input type="text" name="firstName" placeholder=" First Name"></input>
					<input type="text" name="lastName" placeholder=" Last Name"></input>
					<input type="text" name="username" placeholder=" Username"></input>
					<input type="text" name="email" placeholder=" Email Address"></input>
					<input type="password" name="password" placeholder=" Create Password"></input>
					<Dropzone onDrop={dropHandler}>
						<img src={preview} alt="Drop Image Here" />
					</Dropzone>
					<button>Submit</button>
				</SSF>
			</div>
		);
	}
}