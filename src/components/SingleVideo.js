import React from 'react';

class SingleVideo extends React.Component {
	render() {
		return (
			<div>
				<center><br /> <br /><i><strong>{this.props.details.name}</strong></i> by {this.props.details.artist.name} | Runtime: {this.props.details.duration} <br /></center>
				<video width="1080" height="720" controls>
  					<source src={this.props.details.mp4_url} type="video/mp4" />
				</video>
			</div>
		);
	}
}

export default SingleVideo;