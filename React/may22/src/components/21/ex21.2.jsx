import React, { useState } from 'react';

const EX21_1 = () => {
  const [playMode, setPlayMode] = useState(false);

  const onBtnClick = () => {
    if (!playMode) {
      videoEl.current.play();
    } else {
      videoEl.current.pause();
    }

    setPlayMode((prev) => !prev);
  };

  const videoEl = React.createRef();

  return (
    <div>
      <video controls name="media" ref={videoEl}>
        <source
          src="https://media.istockphoto.com/videos/big-sunrise-over-desert-with-silhouette-of-cactus-video-id899956114"
          type="video/mp4"
        />
      </video>
      <br />
      <button onClick={onBtnClick}>{playMode ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default EX21_1;
