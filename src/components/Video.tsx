import React from 'react';
import videoStyles from './video.module.scss';

interface VideoProps {
	videoSrcURL: string;
	videoTitle: string;
}

const Video: React.FC<VideoProps> = ({ videoSrcURL, videoTitle }) => (
	<div className={videoStyles.container}>
		<iframe
			className={videoStyles.video}
			src={videoSrcURL}
			title={videoTitle}
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			frameBorder="0"
			// webkitallowfullscreen="true"
			// mozallowfullscreen="true"
			allowFullScreen
		/>
	</div>
);
export default Video;
