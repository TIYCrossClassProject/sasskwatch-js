import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';

export default class ImageAddView extends Component {
	constructor(props) {
		super(props);
			state = {
				preview: '../images/drop-here.png'
		}
	}

	static propTypes = {
		onImageSubmit: PropTypes.func.isRequired,
		onGameImageAdd: PropTypes.func.isRequired
	}

	dropHandler([file]) {
		this.setState({preview: file.preview})
		this.file = file
	};

	dataHandler(data) {
		data.file = this.file;
		this.props.onGameImageAdd(data);
	};

	render() {
		let { preview } = this.state;
		return (
			<div className="image-add-view">
				<SSF onData={::this.dataHandler}>
					<Dropzone onDrop={dropHandler}>
						<img src={preview} alt="Drop Your Photo Here" />
					</Dropzone>
					<button>Add Photo</button>
				</SSF>
			</div>
		);
	}

}