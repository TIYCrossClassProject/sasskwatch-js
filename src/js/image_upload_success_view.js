import React, { Component, PropTypes } from 'react';

export default class ImageUploadSuccessView extends Component {

	static propTypes = {
		onAddAnotherImage = PropTypes.func.isRequired,
		onTakeMeHome = PropTypes.func.isRequired
	}

	render() {
		return (
			<div className="image-upload-success-view">
				<div>
					Your image was successfully uploaded!
				</div>
				<button onClick={onAddAnotherImage}>Add Another Image</button>
				<button onCLick={onTakeMeHome}>Back Home</button>
			</div>
		);
	}
}