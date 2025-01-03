import React, { useRef, useState } from 'react';

const VideoPlayback = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleVideoLoadedData = () => {
    setIsVideoLoaded(true);
    console.log('Video loaded successfully.');
  };

  const handleVideoPlay = () => {
    if (!isVideoLoaded) {
      videoRef.current?.pause();
      alert('Please wait for the video to load completely before starting.');
      return;
    }
    setIsVideoPlaying(true);
    console.log('Video is playing.');
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    console.log('Video is paused.');
  };

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    console.log('Video ended.');
  };

  // Handle video errors or interruptions
  const handleError = () => {
    console.error('An error occurred during video playback.');
  };

  return (
    <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
      <video
        ref={videoRef}
        src="https://firebasestorage.googleapis.com/v0/b/wedmonkey-d6e0e.appspot.com/o/Aignosis_Test_Vid_2.mp4?alt=media&token=d1444252-00c9-463a-a5f8-ee4129f2b211"
        controls
        autoPlay={false}
        className="w-full h-full object-cover"
        onLoadedData={handleVideoLoadedData}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        onEnded={handleVideoEnd}
        onError={handleError}
      />
      <div className="absolute bottom-10">
        {isVideoEnded ? (
          <button
            onClick={() => {
              window.location.replace('/download');
            }}
            className="px-6 py-3 bg-[#9C00AD] text-white rounded-full font-semibold hover:bg-[#F0A1FF] transition-colors"
          >
            Next
          </button>
        ) : (
          <p className="text-white">{isVideoPlaying ? 'Playing...' : isVideoLoaded ? 'Paused' : 'Loading video...'}</p>
        )}
      </div>
    </div>
  );
};

export default VideoPlayback;
