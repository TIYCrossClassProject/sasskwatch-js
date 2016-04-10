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
	};

	render() {
		let { preview } = this.state;
		let { onGameImageAdd } = this.props;
		return (
			<div className="image-add-view">
				<SSF onData={::this.dataHandler}>
					<div>{this.props.children}</div>
					<Dropzone className="dropzone" onDrop={::this.dropHandler}>
						<img id="logo-add-placeholder" height="200" width="200" src={preview} alt="Drop Your Photo Here" />
					</Dropzone>
					<div><input type="text" name="answer" placeholder="Whose Logo Is This?"/></div>
					<button>Add Photo</button>
				</SSF>
			</div>
		);
	}

}