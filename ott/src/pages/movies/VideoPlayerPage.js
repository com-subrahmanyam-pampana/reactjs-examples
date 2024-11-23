import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

function VideoPlayerPage() {
  const location = useLocation();
  const { url } = location.state || {};

  if (!url) {
    return <p>No video URL provided!</p>;
  }

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default VideoPlayerPage;
