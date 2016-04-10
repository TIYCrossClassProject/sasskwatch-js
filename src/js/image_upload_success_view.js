import React, { Component, PropTypes } from 'react';

export default class ImageUploadSuccessView extends Component {

	static propTypes = {
		onAddAnotherImage: PropTypes.func.isRequired,
		onTakeMeHome: PropTypes.func.isRequired,
		children: PropTypes.element.isRequired
	}



	render() {
		let { onAddAnotherImage, onTakeMeHome } = this.props;
		return (
			<div className="image-upload-success-view">
				<div>{this.props.children}</div>
				<div>
					Your image was successfully uploaded!
				</div>
				<button onClick={onAddAnotherImage}>Add Another Image</button>
				<button onClick={onTakeMeHome}>Back Home</button>
			</div>
		);
	}
}