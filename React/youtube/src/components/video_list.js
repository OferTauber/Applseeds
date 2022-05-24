import React from 'react';
import VideoItem from './video_item';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderdList = videos.map((video, index) => {
    return (
      <VideoItem key={index} video={video} onVideoSelect={onVideoSelect} />
    );
  });
  return <div className="ui relaxed divided list">{renderdList}</div>;
};

export default VideoList;
