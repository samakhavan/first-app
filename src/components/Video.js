import React from 'react';
import $ from 'jquery';
import SingleVideo from './SingleVideo';

class Video extends React.Component {
	render() {
		return (
			<div>
				<ul className="video-list">
					{this.props.details.map(video => <SingleVideo details={video} />)}
				</ul>
			</div>
		);
	}
}

export default Video;