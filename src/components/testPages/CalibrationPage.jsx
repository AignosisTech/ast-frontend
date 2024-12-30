import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { encryptVideo } from '../EncryptionUtils';

const CalibrationPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
  const webcamRef = useRef(null);
  const calibrationVideoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const videoStreamRef = useRef(null);

  const cleanupMediaStream = () => {
    console.log('Starting cleanup');
    
    if (webcamRef.current && webcamRef.current.srcObject) {
      console.log('Cleaning up webcamRef tracks:', webcamRef.current.srcObject.getTracks().length);
      const tracks = webcamRef.current.srcObject.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
      webcamRef.current.srcObject = null;
    }
    
    if (videoStreamRef.current) {
      console.log('Cleaning up videoStreamRef tracks:', videoStreamRef.current.getTracks().length);
      const tracks = videoStreamRef.current.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
      videoStreamRef.current = null;
    }
    
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current = null;
    }
    
    if (recordedChunksRef.current) {
      recordedChunksRef.current = [];
    }
    
    console.log('Cleanup complete');
  };

  useEffect(() => {
    return () => {
      cleanupMediaStream();
    };
  }, []);

  const uploadRecording = async (blob) => {
    try {
      setIsUploading(true);
      
      // Encrypt the video before uploading
      const aesKey = Array.from(crypto.getRandomValues(new Uint8Array(32))).map(b => b.toString(16).padStart(2, '0')).join('');
      const encryptedBlob = await encryptVideo(blob, aesKey);
      
      // Make sure that we are getting the JWK format return in this fetch call
      const jwk = await fetch('/api/public-key').then(res => res.json());
    
      // Import the JWK key
      const publicKey = await window.crypto.subtle.importKey(
        'jwk',
        jwk,
        {
          name: 'RSA-OAEP',
          hash: 'SHA-256',
        },
        false,
        ['encrypt']
      );
      
      const encryptedKey = await window.crypto.subtle.encrypt(
        {
          name: 'RSA-OAEP'
        },
        publicKey,
        new TextEncoder().encode(aesKey)
      );

      const formData = new FormData();
      formData.append('video', encryptedBlob, 'encrypted-test.bin');
      formData.append('key', new Blob([encryptedKey]));
  
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Failed to upload video');
      }
  
      cleanupMediaStream();
      setIsUploading(false);
      window.location.replace('/download');
    } catch (error) {
      console.error('Error uploading video:', error);
      cleanupMediaStream();
      setIsUploading(false);
      alert('Failed to upload video. Please try again.');
    }
  };

  const startWebcamRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true,
        audio: false 
      });
      
      videoStreamRef.current = stream;
      webcamRef.current.srcObject = stream;

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp9'
      });

      mediaRecorderRef.current = mediaRecorder;
      recordedChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.start(1000);
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing webcam:', error);
      alert('Error accessing webcam. Please ensure you have granted camera permissions.');
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.pause();
      setIsRecording(false);
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
      mediaRecorderRef.current.resume();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && (mediaRecorderRef.current.state === 'recording' || mediaRecorderRef.current.state === 'paused')) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, {
          type: 'video/webm'
        });
        uploadRecording(blob);
      };
    }
  };

  const handleNextClick = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    stopRecording();
  };

  const handleVideoPause = () => {
    pauseRecording();
  };

  const handleVideoPlay = () => {
    if (!hasStartedOnce) {
      startWebcamRecording();
      setHasStartedOnce(true);
    } else if (mediaRecorderRef.current) {
      resumeRecording();
    }
  };

  return (
    <>
      {!isVideoPlaying ? (
        <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
          <div className="w-[900px] max-sm:w-[45vh] h-[550px] bg-[#FDF9FF] rounded-3xl flex flex-col items-center p-8 space-y-8">
            <div className="relative text-4xl font-bold text-[#1A0C25] mb-4">
              <span className="relative z-10 font-montserrat">Ai.gnosis</span>
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="w-[150px] h-[100px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-70"></div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold font-manrope">Calibration</h2>
            <p className="text-center text-[#292738] font-raleway font-normal mb-6">
              Please complete the task in sequence before proceeding to the next step
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-[#292738] font-medium max-sm:text-sm font-raleway">Ensure the webcam is connected properly</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-[#292738] font-medium max-sm:text-sm font-raleway">Adjust lighting to avoid glare</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-[#292738] font-medium max-sm:text-sm font-raleway">Position yourself comfortably in front of the camera</span>
              </div>
            </div>

            <div className="flex max-sm:flex-col max-sm:space-y-3 md:space-x-8 mt-[40px]">
              <Link 
                onClick={handleNextClick} 
                className="flex items-center justify-center w-[200px] h-[50px] border border-[#9C00AD] text-[#292738] font-montserrat rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors"
              >
                Start calibration
              </Link>
              <Link 
                className="flex items-center justify-center w-[200px] h-[50px] bg-[#FDF9FF] border border-[#9C00AD] text-[#292738] font-montserrat rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors"
              >
                Stop calibration
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center relative">
          {/* Hidden webcam video element */}
          <video
            ref={webcamRef}
            autoPlay
            playsInline
            muted
            className="hidden"
          />
          
          {/* Calibration video */}
          <video
            ref={calibrationVideoRef}
            src='https://firebasestorage.googleapis.com/v0/b/wedmonkey-d6e0e.appspot.com/o/Aignosis_Test_Vid_2.mp4?alt=media&token=d1444252-00c9-463a-a5f8-ee4129f2b211'
            autoPlay={false}
            controls 
            onEnded={handleVideoEnd}
            onPause={handleVideoPause}
            onPlay={handleVideoPlay}
            className="w-full h-full object-cover"
            style={{ position: "fixed", top: 0, left: 0, zIndex: 10 }}
          />

          {/* Recording status indicator */}
          <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-black bg-opacity-50 px-4 py-2 rounded-full">
            <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-red-500' : 'bg-gray-500'}`}></div>
            <span className="text-white text-sm">
              {isRecording ? 'Recording' : isUploading ? 'Uploading...' : 'Paused'}
            </span>
          </div>

          {!hasStartedOnce && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-75 px-6 py-4 rounded-lg text-white text-center">
              Press play to start the calibration and recording
            </div>
          )}

          {isVideoEnded && !isUploading && (
            <button 
              onClick={()=>{
                window.location.replace('/download');
              }} 
              className="absolute bottom-10 px-6 py-3 bg-[#9C00AD] text-white rounded-full font-semibold hover:bg-[#F0A1FF] transition-colors z-20"
            >
              Next
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default CalibrationPage;