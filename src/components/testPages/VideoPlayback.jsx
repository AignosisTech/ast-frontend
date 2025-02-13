import React, { useEffect, useRef, useState } from "react";
import { encryptVideo } from "../EncryptionUtils";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { useContext } from "react";

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
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const videoStreamRef = useRef(null);
  const [fps, setFps] = useState(0);
  const frameTimes = useRef([]);
  const { testData, setTestData } = useContext(AppContext);
  const SERVER_MIDDLEWARE_ENDPOINT = "http://localhost:8000";

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);

    console.log("testData is", testData);

    const handleBackButton = () => {
      navigate("/calibrationpage");
    };

    window.addEventListener("popstate", handleBackButton);
    return () => window.removeEventListener("popstate", handleBackButton);
  }, [navigate]);

  const cleanupMediaStream = () => {
    if (webcamRef.current?.srcObject) {
      webcamRef.current.srcObject.getTracks().forEach((track) => track.stop());
      webcamRef.current.srcObject = null;
    }

    if (videoStreamRef.current) {
      videoStreamRef.current.getTracks().forEach((track) => track.stop());
      videoStreamRef.current = null;
    }

    mediaRecorderRef.current = null;
    recordedChunksRef.current = [];
  };
  const calculateFps = () => {
    const now = performance.now();
    frameTimes.current.push(now);
  
    if (frameTimes.current.length > 10) {
      frameTimes.current.shift();
    }
  
    if (frameTimes.current.length > 1) {
      const first = frameTimes.current[0];
      const last = frameTimes.current[frameTimes.current.length - 1];
      const fpsValue = (frameTimes.current.length - 1) / ((last - first) / 1000);
      setFps(Math.round(fpsValue));
    }
  
    requestAnimationFrame(calculateFps);
  };
  const startWebcamRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
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
    } catch (error) {
      console.error("Error accessing webcam:", error);
      alert(
        "Error accessing webcam. Please ensure you have granted camera permissions."
      );
    }
  };

  const uploadRecording = async (blob) => {
    try {
      setIsUploading(true);

      const aesKey = Array.from(crypto.getRandomValues(new Uint8Array(32)))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      const encryptedBlob = await encryptVideo(blob, aesKey);
      const jwk = await fetch(
        `${SERVER_MIDDLEWARE_ENDPOINT}/rest/return_rsa_public_key/`
      ).then((res) => res.json());

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
        { name: "RSA-OAEP" },
        publicKey,
        new TextEncoder().encode(aesKey)
      );

      const formData = new FormData();
      formData.append("video", encryptedBlob, "encrypted-test.bin");
      formData.append(
        "video_encrypted_key",
        new Blob([encryptedKey], { type: "application/octet-stream" }),
        "encrypted_aes_key.bin"
      );
      formData.append("patient_uid", testData.PATIENT_UID);
      formData.append("transaction_id", testData.TRANSACTION_ID);
      formData.append(
        "calibration_config_data",
        JSON.stringify(testData.calibration_data)
      );
      formData.append(
        "encrypted_calibration_points",
        testData.encrypted_calibration_points
      );
      formData.append(
        "calibration_encrypted_key",
        testData.calibration_encrypted_key
      );
      formData.append("fps",fps);

      const response = await fetch(
        `${SERVER_MIDDLEWARE_ENDPOINT}/rest/test/video_data/`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 200) {
        navigate("/test/fillup");
      } else {
        navigate("/Error");
      }

      cleanupMediaStream();
      setIsUploading(false);
    } catch (error) {
      console.error("Error uploading video:", error);
      cleanupMediaStream();
      setIsUploading(false);
      window.location.replace("/test/fillup");
      alert("Failed to upload video. Please try again.");
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.pause();
      setIsRecording(false);
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current?.state === "paused") {
      mediaRecorderRef.current.resume();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current?.state === "recording" ||
      mediaRecorderRef.current?.state === "paused"
    ) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, {
          type: "video/webm",
        });
        uploadRecording(blob);
      };
    }
  };

  const handleVideoLoadedData = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => videoRef.current.requestFullscreen())
        .catch((err) => console.error("Video playback error:", err));
    }
  };

  const handleVideoPlay = () => {
    if (!isVideoLoaded) {
      videoRef.current?.pause();
      alert("Please wait for the video to load completely before starting.");
      return;
    }
    if (!hasStartedOnce) {
      startWebcamRecording();
      setHasStartedOnce(true);
    } else if (mediaRecorderRef.current) {
      resumeRecording();
    }
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    pauseRecording();
    setIsVideoPlaying(false);
  };

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    stopRecording();
    navigate("/test/fillup");
  };

  const getVideoSource = () => {
    const baseUrl = "https://d228sadnexesrp.cloudfront.net/Test_Videos/";
    const version = "V5";
    return testData.videolanguage === "English"
      ? `${baseUrl}Aignosis_Test_vid_Eng_${version}.mp4`
      : `${baseUrl}Aignosis_Test_vid_Hindi_${version}.mp4`;
  };

  return (
    <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
      <video ref={webcamRef} autoPlay playsInline muted className="hidden" />
      <video
        ref={videoRef}
        src={getVideoSource()}
        controls
        autoPlay={false}
        className="w-full h-full object-cover"
        onLoadedData={handleVideoLoadedData}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        onEnded={handleVideoEnd}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 10 }}
      />

      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-black bg-opacity-50 px-4 py-2 rounded-full">
        <div
          className={`w-3 h-3 rounded-full ${
            isRecording ? "bg-red-500" : "bg-gray-500"
          }`}
        />
        <span className="text-white text-sm">
          {isRecording ? "Recording" : "Not Recording"}
        </span>
      </div>

      <div className="absolute bottom-10">
        {isVideoEnded ? (
          <button
            onClick={() => window.location.replace("/download")}
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
