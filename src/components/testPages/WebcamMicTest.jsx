import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import CalibrationPage from './CalibrationPage';

const WebcamMicTest = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState('');
  const [volume, setVolume] = useState(0);
  const [snapshotTaken, setSnapshotTaken] = useState(false); // Track if snapshot is taken
  const [snapshot, setSnapshot] = useState(null); // Store snapshot image data
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const [isCalVisible, setIsCalVisible] = useState(false);

  const navigate = useNavigate(); // Initialize navigate function

  // Handle the "Next" button click
  const handleNextClick = async () => {
    // Navigate to DogCalibration page
    navigate('/dogcalibration'); 
  };

  useEffect(() => {
    // Get camera resolution
    async function getCameraResolution() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const videoTrack = stream.getVideoTracks()[0];
      const settings = videoTrack.getSettings();
      console.log(`Resolution: ${settings.width}x${settings.height}`);
      stream.getTracks().forEach((track) => track.stop()); // Stop the stream
    }
    getCameraResolution();

    // Request access to webcam and microphone
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // Set video source
        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          // Check if video is already playing before calling play()
          if (videoRef.current.paused && !videoRef.current.ended) {
            videoRef.current.play().catch((error) => {
              console.error('Error while trying to play video:', error);
            });
          }
        }

        // Create audio context and analyser for audio input
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        const audioSource = audioContextRef.current.createMediaStreamSource(stream);
        analyserRef.current = audioContextRef.current.createAnalyser();
        audioSource.connect(analyserRef.current);

        analyserRef.current.fftSize = 256; // Controls frequency range
        const bufferLength = analyserRef.current.frequencyBinCount;
        dataArrayRef.current = new Uint8Array(bufferLength);

        const getVolume = () => {
          analyserRef.current.getByteFrequencyData(dataArrayRef.current);
          const average = dataArrayRef.current.reduce((sum, value) => sum + value, 0) / bufferLength;
          setVolume(average);
          if (!snapshotTaken) {
            requestAnimationFrame(getVolume);
          }
        };

        getVolume(); // Start monitoring volume
      })
      .catch((err) => {
        console.error('Error accessing webcam/microphone:', err);
        setError('Error: please allow access to your webcam and microphone');
      });
  }, [snapshotTaken]);

  const handleSnapshot = () => {
    if (videoRef.current && canvasRef.current) {
      // Pause video and audio
      videoRef.current.pause();
      if (audioContextRef.current) {
        audioContextRef.current.suspend();
      }

      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

      // Convert canvas to a data URL (base64 string)
      const imageData = canvasRef.current.toDataURL('image/png');
      setSnapshot(imageData); // Save snapshot data
      setSnapshotTaken(true); // Mark that the snapshot is taken
    }
  };

  return (
    <>
      {!isCalVisible ? (
        <div className='bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center'>
          <div className="w-[900px] max-sm:w-[90vw] h-[600px] mt-[6px] bg-[#FDF9FF] rounded-3xl shadow-lg flex flex-col items-center p-8 space-y-6 relative border border-[#5F1B73]">
            {/* Ai.gnosis Branding */}
            <div className="text-4xl font-bold text-[#1A0C25] relative mb-2">
              <span className="z-10 font-montserrat">Ai.gnosis</span>
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="w-[150px] h-[100px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-70"></div>
              </div>
            </div>

            {/* Webcam & Microphone Test Section */}
            <h2 className="text-2xl font-semibold text-[#292738] font-manrope max-sm:text-xl">Webcam & Microphone test</h2>

            {/* Webcam Preview or Snapshot Display */}
            <div className="w-[500px] max-sm:w-[85vw] h-[300px] bg-[#D9D9D9] rounded-lg flex items-center justify-center overflow-hidden">
              {snapshotTaken ? (
                <img src={snapshot} alt="Snapshot" className="w-full h-full object-cover" />
              ) : (
                <video ref={videoRef} className="w-full h-full object-cover" muted></video>
              )}
            </div>

            {/* Canvas for snapshot */}
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

            {/* Buttons */}
            {!snapshotTaken ? (
              <button
                onClick={handleSnapshot}
                className="mt-4 px-6 py-2 border-2 border-[#9C00AD] text-[#292738] rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors font-montserrat">
                Take snapshot
              </button>
            ) : (
              <button
                onClick={handleNextClick}
                className="mt-4 px-6 py-2 border-2 border-[#9C00AD] text-[#292738] rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors font-montserrat">
                Next
              </button>
            )}

            {/* Microphone Test Section */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-medium text-[#292738] font-montserrat">Microphone test</h3>
              <p className="text-[#292738] font-raleway">Speak into the microphone and volume level will be displayed below:</p>

              {/* Volume Level Indicator */}
              <div className="w-full h-4 bg-gray-300 rounded-full mt-2">
                <div
                  className="h-full bg-[#952981] rounded-full transition-all"
                  style={{ width: `${Math.min(volume, 100)}%` }}
                ></div>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-[#D0161F] font-raleway mt-2">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <CalibrationPage />
      )}
    </>
  );
};

export default WebcamMicTest;
