import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Circle from "./Circle"; // Import Circle component
import "bootstrap/dist/css/bootstrap.min.css";

const DogCalibration = () => {
  const SERVER_MIDDLEWARE_URL = 'http://35.207.211.80:5001/rest/calibration/data/';
  const [startTime, setStartTime] = useState();
  const [frameCaptureInterval, setFrameCaptureInterval] = useState();
  const [frames, setFrames] = useState([]);
  const [isCircleVisible, setIsCircleVisible] = useState(true);
  const [currentCircleIndex, setCurrentCircleIndex] = useState(0);
  const [parentDimensions, setParentDimensions] = useState([0, 0]);
  const [videoResolution, setVideoResolution] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [clickTimes, setClickTimes] = useState([]);
  const parentRef = useRef(null);

  const navigate = useNavigate(); // Initialize navigate from useNavigate

  const circleCoordinates = [
    [window.innerWidth / 2, window.innerHeight / 2], // center
    [50, 50], // left top
    [50, window.innerHeight / 2], // left mid
    [50, window.innerHeight - 100], // left bottom
    [window.innerWidth - 100, 50], // right top
    [window.innerWidth - 100, window.innerHeight / 2], // right mid
    [window.innerWidth - 100, window.innerHeight - 100], // right bottom
    [window.innerWidth / 2, 50], // mid top
    [window.innerWidth / 2, window.innerHeight - 100] // mid bottom
  ];

  useEffect(() => {
    // Get the webcam stream and metadata on mount
    if (parentRef.current) {
      const { clientWidth, clientHeight } = parentRef.current;
      setParentDimensions([clientWidth, clientHeight]);
    }

    const startWebcam = async () => {
      if (!navigator.mediaDevices.getUserMedia) {
        console.error("getUserMedia not supported");
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;

        const handleMetadata = () => {
          const width = videoRef.current.videoWidth;
          const height = videoRef.current.videoHeight;
          setVideoResolution([width, height]);
        };

        videoRef.current.onloadedmetadata = handleMetadata;
      } catch (error) {
        console.error("Webcam start error:", error);
      }
    };

    startWebcam();
  }, []);

  const captureFrame = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      const frameData = canvas.toDataURL("image/jpeg");
      return frameData;
    } else {
      console.warn("Frame capture failed: canvasRef or videoRef is null");
    }
  };

  const handleCircleClick = async () => {
    const audio = new Audio("/dog_bark.mp3"); // Path to your audio file
    try {
      await audio.play(); // Play the audio
    } catch (error) {
      console.error("Audio play error:", error);
    }

    if (currentCircleIndex === 0) {
      setStartTime(Date.now());
      setClickTimes((clicktimes) => [...clicktimes, 0.0]);
      setFrameCaptureInterval(
        setInterval(() => {
          const frameData = captureFrame();
          setFrames((prevFrames) => [...prevFrames, frameData]);
        }, 1)
      );
      setCurrentCircleIndex(currentCircleIndex + 1);
    } else if (currentCircleIndex < circleCoordinates.length - 1) {
      setClickTimes((clicktimes) => [
        ...clicktimes,
        (Date.now() - startTime) / 1000
      ]);
      setCurrentCircleIndex(currentCircleIndex + 1);
    } else {
      setClickTimes((clicktimes) => [
        ...clicktimes,
        (Date.now() - startTime) / 1000
      ]);
      var finalClickTimes = clickTimes;
      finalClickTimes.push((Date.now() - startTime) / 1000);
      setIsCircleVisible(false);
      const calibrationData = {
        patient_uid: '65bbbb04-f29f-4d6b-b207-999e08bef384',
        dob: '20240601',
        sex: 1,
        camera_resolution: { width: videoResolution[0], height: videoResolution[1] },
        screen_resolution: { width: window.innerWidth, height: window.innerHeight },
        calibration_points: []
      };

      for (let i = 0; i < finalClickTimes.length; i++) {
        let currentClickFramesList = [];
        let frameRangeStartIndex = Math.floor(30 * finalClickTimes[i]);
        currentClickFramesList.push({
          timestamp: finalClickTimes[i],
          frame: frames[frameRangeStartIndex],
        });
        calibrationData.calibration_points.push({
          point: { x: circleCoordinates[i][0], y: circleCoordinates[i][1] },
          frames: currentClickFramesList,
        });
      }

      axios
        .post(SERVER_MIDDLEWARE_URL, JSON.stringify(calibrationData), {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          clearInterval(frameCaptureInterval);
          console.log(response);
        })
        .catch((error) => {
          clearInterval(frameCaptureInterval);
          console.error(error);
        });
    }
  };

  const handleNextButtonClick = () => {
    navigate("/video");  // Navigate to the video page
  };

  return (
    <div
      id="parent-container"
      ref={parentRef}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#8a00c2",
      }}
    >
      {isCircleVisible && parentDimensions[0] > 0 && parentDimensions[1] > 0 && (
        <Circle
          onClickHandler={handleCircleClick}
          x={circleCoordinates[currentCircleIndex][0]}
          y={circleCoordinates[currentCircleIndex][1]}
          radius={50}
          imageUrl="/dog_face.png"
        />
      )}

      {/* Display Next Button */}
      {!isCircleVisible && (
        <button
          className="mt-4"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(138, 0, 194, 0.6)", // Translucent background
            color: "white",
            padding: "12px 24px",
            borderRadius: "25px",
            border: "none",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onClick={handleNextButtonClick}  // Navigate to video page
        >
          Next
        </button>
      )}

      <div style={{ display: "none", flex: 1 }}>
        <video ref={videoRef} autoPlay playsInline></video>
      </div>
      <canvas ref={canvasRef} style={{ flex: 1, display: "none" }} />
    </div>
  );
};

export default DogCalibration;
