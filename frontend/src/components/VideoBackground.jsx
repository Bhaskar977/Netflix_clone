import React from "react";

const VideoBackground = () => {
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/vBQcU00U9O0?si=-nlTU8VuVa-BqEjR&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
