import React from "react";
import bgVideo from "../assets/video/Untitled design (1).mp4"; // put your video inside src/assets

const Background = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Optional overlay to darken the video for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};

export default Background;
