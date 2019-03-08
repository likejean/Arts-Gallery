import React, { Component } from 'react';
import Gallery from './GalleryComponent';
import { PICTURES } from '../shared/best';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
		pictures: PICTURES
	};
}

  render() { 
		return (
			<Gallery pictures={this.state.pictures} />
		);
	}
}
  
export default Main;