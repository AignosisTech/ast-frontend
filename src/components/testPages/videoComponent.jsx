import React, { useRef } from "react";

const VideoComponent = () => {
  const videoRef = useRef(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <video
        ref={videoRef}
        src="https://d228sadnexesrp.cloudfront.net/Test_Videos/Aignosis_Test_vid_Eng_V5.mp4"
        controls
        autoPlay
        className="w-full h-auto max-h-[100vh]"
      />
    </div>
  );
};

export default VideoComponent;
