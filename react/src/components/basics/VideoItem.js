import React from 'react';

const VideoItem = ({ video: { snippet } }) => (
    <li>
        <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
        <p>{snippet.title}</p>
        <p>{snippet.channelTitle}</p>
    </li>
);

export default VideoItem;
