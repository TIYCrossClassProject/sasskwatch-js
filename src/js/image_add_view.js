import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';

export default class ImageAddView extends Component {
	constructor(props) {
		super(props);
			this.state = {
				preview: '../images/drop-here.png'
		}
	}

	static propTypes = {
		onImageSubmit: PropTypes.func.isRequired,
		onGameImageAdd: PropTypes.func.isRequired,
		children: PropTypes.element.isRequired
	}

	dropHandler([file]) {
		this.setState({preview: file.preview})
		this.file = file;
		console.log(this.file);
	};

	dataHandler(data) {
		data.file = this.file;
		this.props.onGameImageAdd(data);
		console.log(this.file);
	};

	render() {
		let { preview } = this.state;
		let { onGameImageAdd } = this.props;
		return (
			<div className="image-add-view">
				<div>{this.props.children}</div>
				<SSF onData={::this.dataHandler}>
						<div className="image-add-form">
						<Dropzone className="dropzone" onDrop={::this.dropHandler}>
							<img id="logo-add-placeholder" 
									 src={preview} 
									 alt="Drop Your Photo Here"/>
						</Dropzone>
						<div id="answer-box"><input type="text" name="answer" placeholder="Logo Name Here"/></div>
						<button>Add Photo</button>
					</div>
				</SSF>
			</div>
		);
	}

}