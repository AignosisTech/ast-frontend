<<<<<<< Updated upstream
import React, { useRef, useState } from "react";
import { encryptVideo } from "../EncryptionUtils";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
=======
import React, { useRef, useState } from 'react';
import { encryptVideo } from '../EncryptionUtils';
import { Link, useNavigate  } from 'react-router-dom';
>>>>>>> Stashed changes

const VideoPlayback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const webcamRef = useRef(null);
  const calibrationVideoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const videoStreamRef = useRef(null);

<<<<<<< Updated upstream
  const { PATIENT_UID, TRANSACTION_ID } = location.state || {};
  // const SERVER_MIDDLEWARE_ENDPOINT = "http://localhost:8000";
  const SERVER_MIDDLEWARE_ENDPOINT = "https://35.207.211.80";


  if (!PATIENT_UID || !TRANSACTION_ID) {
    console.error("Missing state in location!");
    return <p>Error: Missing patient or transaction data.</p>;
  }

  const cleanupMediaStream = () => {
    console.log("Starting cleanup");

    if (webcamRef.current && webcamRef.current.srcObject) {
      console.log(
        "Cleaning up webcamRef tracks:",
        webcamRef.current.srcObject.getTracks().length
      );
      const tracks = webcamRef.current.srcObject.getTracks();
      tracks.forEach((track) => {
=======
  const patientIUID = 'jdifjio2u4u248tu9q8ghg98439'
  const LOCAL_MIDDLEWARE_ENDPOINT = 'http://localhost:8000/rest/';
  const SERVER_MIDDLEWARE_ENDPOINT = 'http://35.207.211.80:5001/rest/';
  const IN_USE_URL = SERVER_MIDDLEWARE_ENDPOINT + 'test/video_data';



  const cleanupMediaStream = () => {
    console.log('Starting cleanup');
    
    if (webcamRef.current && webcamRef.current.srcObject) {
      console.log('Cleaning up webcamRef tracks:', webcamRef.current.srcObject.getTracks().length);
      const tracks = webcamRef.current.srcObject.getTracks();
      tracks.forEach(track => {
>>>>>>> Stashed changes
        track.stop();
      });
      webcamRef.current.srcObject = null;
    }
<<<<<<< Updated upstream

    if (videoStreamRef.current) {
      console.log(
        "Cleaning up videoStreamRef tracks:",
        videoStreamRef.current.getTracks().length
      );
      const tracks = videoStreamRef.current.getTracks();
      tracks.forEach((track) => {
=======
    
    if (videoStreamRef.current) {
      console.log('Cleaning up videoStreamRef tracks:', videoStreamRef.current.getTracks().length);
      const tracks = videoStreamRef.current.getTracks();
      tracks.forEach(track => {
>>>>>>> Stashed changes
        track.stop();
      });
      videoStreamRef.current = null;
    }
<<<<<<< Updated upstream

    if (mediaRecorderRef.current) {
      mediaRecorderRef.current = null;
    }

    if (recordedChunksRef.current) {
      recordedChunksRef.current = [];
    }

    console.log("Cleanup complete");
  };

  const startWebcamRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });

      videoStreamRef.current = stream;
      webcamRef.current.srcObject = stream;

      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorderRef.current = mediaRecorder;
      recordedChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.start(1000);
      setIsRecording(true);
      console.log("Webcam Recording");
    } catch (error) {
      console.error('Error accessing webcam:', error);
      alert('Error accessing webcam. Please ensure you have granted camera permissions.');

      //TODO: redirect to "take assessment page"
    }
  };

  const uploadRecording = async (blob) => {
    try {
      setIsUploading(true);

      // Encrypt the video before uploading
      const aesKey = Array.from(crypto.getRandomValues(new Uint8Array(32)))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      const encryptedBlob = await encryptVideo(blob, aesKey);

      // Make sure that we are getting the JWK format return in this fetch call
      const jwk = await fetch(
        SERVER_MIDDLEWARE_ENDPOINT + "/rest/return_rsa_public_key/"
      ).then((res) => res.json());

      // Import the JWK key
      const publicKey = await window.crypto.subtle.importKey(
        "jwk",
        jwk,
        {
          name: "RSA-OAEP",
          hash: "SHA-256",
        },
        false,
        ["encrypt"]
      );

      const encryptedKey = await window.crypto.subtle.encrypt(
        {
          name: "RSA-OAEP",
=======
    
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current = null;
    }
    
    if (recordedChunksRef.current) {
      recordedChunksRef.current = [];
    }
    
    console.log('Cleanup complete');
  };



  // const startWebcamRecording = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ 
  //       video: true,
  //       audio: false 
  //     });
      
  //     videoStreamRef.current = stream;
  //     webcamRef.current.srcObject = stream;

  //     const mediaRecorder = new MediaRecorder(stream);

  //     mediaRecorderRef.current = mediaRecorder;
  //     recordedChunksRef.current = [];

  //     mediaRecorder.ondataavailable = (event) => {
  //       if (event.data.size > 0) {
  //         recordedChunksRef.current.push(event.data);
  //       }
  //     };

  //     mediaRecorder.start(1000);
  //     setIsRecording(true);
  //     console.log("Webcam Recording");
  //   } catch (error) {
  //     console.error('Error accessing webcam:', error);
  //     alert('Error accessing webcam. Please ensure you have granted camera permissions.');
  //   }
  // };


  const uploadRecording = async (blob) => {
    
    
    try {
      setIsUploading(true);
      
      // Encrypt the video before uploading
      const aesKey = Array.from(crypto.getRandomValues(new Uint8Array(32))).map(b => b.toString(16).padStart(2, '0')).join('');
      const encryptedBlob = await encryptVideo(blob, aesKey);
      
      // Make sure that we are getting the JWK format return in this fetch call
      const jwk = await fetch(LOCAL_MIDDLEWARE_ENDPOINT + 'return_rsa_public_key/').then(res => res.json());
    
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
>>>>>>> Stashed changes
        },
        publicKey,
        new TextEncoder().encode(aesKey)
      );

      const formData = new FormData();
<<<<<<< Updated upstream
      formData.append("video", encryptedBlob, "encrypted-test.bin");
      formData.append("encrypted_aes_key", new Blob([encryptedKey], { type: 'application/octet-stream' }));
      formData.append("patient_uid", PATIENT_UID);
      formData.append("transaction_id", TRANSACTION_ID);

      const formDataString = Array.from(formData.entries())
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

      console.log('form data string is', formDataString);

      const response = await fetch(
        SERVER_MIDDLEWARE_ENDPOINT + "/rest/test/video_data/",
        {
          method: "POST",
          body: formData,
        }
      ).catch((err) => {
        console.log("Failed to upload video: " + err);
        // TODO: redirect to take assessment page
      });

      if (!response.ok) {
        throw new Error("Failed to upload video");
        // TODO: redirect to take assessment page
      }

      cleanupMediaStream();
      setIsUploading(false);

      // window.location.replace('/test/fillup');
      // navigate("/test/fillup");
    } catch (error) {
      console.error("Error uploading video:", error);
      cleanupMediaStream();
      setIsUploading(false);
      window.location.replace("/test/fillup");
      alert("Failed to upload video. Please try again.");
=======
      formData.append('video', encryptedBlob, 'encrypted-test.bin');
      formData.append('encrypted_aes_key', new Blob([encryptedKey]));
      formData.append('patient_uid', patientIUID)
  
      const response = await fetch(IN_USE_URL, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Failed to upload video');
        
      }
  
      cleanupMediaStream();
      setIsUploading(false);
      
      window.location.replace('/catcalibration');
    } catch (error) {
      console.error('Error uploading video:', error);
      cleanupMediaStream();
      setIsUploading(false);
      window.location.replace('/catcalibration');
      alert('Failed to upload video. Please try again.');
>>>>>>> Stashed changes

      console.log("Failed to Upload Video");
    }
  };

  const pauseRecording = () => {
<<<<<<< Updated upstream
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
=======
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
>>>>>>> Stashed changes
      mediaRecorderRef.current.pause();
      setIsRecording(false);
    }
  };

  const resumeRecording = () => {
<<<<<<< Updated upstream
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "paused"
    ) {
=======
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
>>>>>>> Stashed changes
      mediaRecorderRef.current.resume();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
<<<<<<< Updated upstream
    if (
      mediaRecorderRef.current &&
      (mediaRecorderRef.current.state === "recording" ||
        mediaRecorderRef.current.state === "paused")
    ) {
=======
    
    if (mediaRecorderRef.current && (mediaRecorderRef.current.state === 'recording' || mediaRecorderRef.current.state === 'paused')) {
>>>>>>> Stashed changes
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, {
<<<<<<< Updated upstream
          type: "video/webm",
        });

        console.log("Uploading Video");
=======
          type: 'video/webm'
        });
>>>>>>> Stashed changes
        uploadRecording(blob);
      };
    }
  };
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

  const handleVideoLoadedData = () => {
    setIsVideoLoaded(true);
    console.log("Video loaded successfully.");
  };

  const handleVideoPlay = () => {
    if (!isVideoLoaded) {
      videoRef.current?.pause();
      alert("Please wait for the video to load completely before starting.");
      return;
    }
    if (!hasStartedOnce) {
<<<<<<< Updated upstream
      startWebcamRecording();
=======
      // startWebcamRecording();
>>>>>>> Stashed changes
      setHasStartedOnce(true);
    } else if (mediaRecorderRef.current) {
      resumeRecording();
    }
    setIsVideoPlaying(true);
    console.log("Video is playing.");
  };

  const handleVideoPause = () => {
    pauseRecording();
    setIsVideoPlaying(false);
    console.log("Video is paused.");
  };

  const handleVideoEnd = async () => {
    setIsVideoEnded(true);
    stopRecording();
<<<<<<< Updated upstream
=======
    const sampleVideo = await fetch('/DancingDog.mp4'); // Fetch the video file
    const blob = await sampleVideo.blob(); // Convert sampleVideo to a Blob
    console.log("Uploading Video");
    uploadRecording(blob);
    console.log('Video ended.');
>>>>>>> Stashed changes
  };

  return (
    <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
      {/* Hidden webcam video element */}
<<<<<<< Updated upstream
      <video ref={webcamRef} autoPlay playsInline muted className="hidden" />
=======
      <video
        ref={webcamRef}
        autoPlay
        playsInline
        muted
        className="hidden"
      />
>>>>>>> Stashed changes
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
        style={{ position: "fixed", top: 0, left: 0, zIndex: 10 }}
      />
<<<<<<< Updated upstream

=======
  
>>>>>>> Stashed changes
      {/* Recording indicator */}
      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-black bg-opacity-50 px-4 py-2 rounded-full">
        <div
          className={`w-3 h-3 rounded-full ${
            isRecording ? "bg-red-500" : "bg-gray-500"
          }`}
        ></div>
        <span className="text-white text-sm">
          {isRecording ? "Recording" : "Not Recording"}
        </span>
      </div>
<<<<<<< Updated upstream

=======
  
>>>>>>> Stashed changes
      <div className="absolute bottom-10">
        {isVideoEnded ? (
          <button
            onClick={() => {
              window.location.replace("/download");
            }}
            className="px-6 py-3 bg-[#9C00AD] text-white rounded-full font-semibold hover:bg-[#F0A1FF] transition-colors"
          >
            Next
          </button>
        ) : (
          <p className="text-white">
            {isVideoPlaying
              ? "Playing..."
              : isVideoLoaded
              ? "Paused"
              : "Loading video..."}
          </p>
        )}
      </div>
    </div>
  );
  
};

export default VideoPlayback;

<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
// import React, { useRef, useState } from 'react';

// const VideoPlayback = () => {
//   const videoRef = useRef(null);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const [isVideoEnded, setIsVideoEnded] = useState(false);

//   const handleVideoLoadedData = () => {
//     setIsVideoLoaded(true);
//     console.log('Video loaded successfully.');
//   };

//   const handleVideoPlay = () => {
//     if (!isVideoLoaded) {
//       videoRef.current?.pause();
//       alert('Please wait for the video to load completely before starting.');
//       return;
//     }
//     setIsVideoPlaying(true);
//     console.log('Video is playing.');
//   };

//   const handleVideoPause = () => {
//     setIsVideoPlaying(false);
//     console.log('Video is paused.');
//   };

//   const handleVideoEnd = () => {
//     setIsVideoEnded(true);
//     console.log('Video ended.');
//   };

//   // Handle video errors or interruptions
//   const handleError = () => {
//     console.error('An error occurred during video playback.');
//   };

//   return (
//     <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
//       <video
//         ref={videoRef}
//         src="https://firebasestorage.googleapis.com/v0/b/wedmonkey-d6e0e.appspot.com/o/Aignosis_Test_Vid_2.mp4?alt=media&token=d1444252-00c9-463a-a5f8-ee4129f2b211"
//         controls
//         autoPlay={false}
//         className="w-full h-full object-cover"
//         onLoadedData={handleVideoLoadedData}
//         onPlay={handleVideoPlay}
//         onPause={handleVideoPause}
//         onEnded={handleVideoEnd}
//         onError={handleError}
//       />
//       <div className="absolute bottom-10">
//         {isVideoEnded ? (
//           <button
//             onClick={() => {
<<<<<<< Updated upstream
//               window.location.replace('/test/fillup');
=======
//               window.location.replace('/catcalibration');
>>>>>>> Stashed changes
//             }}
//             className="px-6 py-3 bg-[#9C00AD] text-white rounded-full font-semibold hover:bg-[#F0A1FF] transition-colors"
//           >
//             Next
//           </button>
//         ) : (
//           <p className="text-white">{isVideoPlaying ? 'Playing...' : isVideoLoaded ? 'Paused' : 'Loading video...'}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoPlayback;
