// DogCalibration.jsx

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Circle from "./Circle"; // Import Circle component
import "bootstrap/dist/css/bootstrap.min.css";
import {
  encryptCalibrationData,
  encryptPassword,
} from "./components/utils/EncryptionUtils";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

const DogCalibration = () => {
  const SERVER_MIDDLEWARE_URL = "https://35.207.211.80/rest/calibration/data/";
  // const SERVER_MIDDLEWARE_URL = 'http://127.0.0.1:8000/rest/calibration/data/';

  const location = useLocation();

  const { PATIENT_UID, TRANSACTION_ID } = location.state || {};

  const [startTime, setStartTime] = useState();
  const [frameCaptureInterval, setFrameCaptureInterval] = useState();
  const [frames, setFrames] = useState([]);
  const [isCircleVisible, setIsCircleVisible] = useState(true);
  const [currentCircleIndex, setCurrentCircleIndex] = useState(0);
  const [parentDimensions, setParentDimensions] = useState([0, 0]);

  const [videoResolution, setVideoResolution] = useState([640, 480]); // Static resolution for sample images

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
    [window.innerWidth / 2, window.innerHeight - 100], // mid bottom
  ];

  useEffect(() => {
    // Get the webcam stream and metadata on mount
    window.history.pushState(null, null, window.location.href);
  
    const handleBackButton = () => {
      navigate("/calibrationpage"); // Redirect to calibration page
    };
  
    // Listen for the popstate event
    window.addEventListener("popstate", handleBackButton);
  
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
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
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
    return () => {
        window.removeEventListener("popstate", handleBackButton);
      };
  }, [navigate]);

  const handleNextButtonClick = () => {
    navigate("/test/fillup", {
      state: { PATIENT_UID, TRANSACTION_ID },
    }); // Navigate to the video page
  };

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
      // TODO: send back to take assignment page, with alert saying some error occurred
    }
  };

  const handleCircleClick = async () => {
    const audio = new Audio("/CatMeow.mp3"); // Path to your audio file
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
        }, 33) // Adjusted to 33ms for ~30 fps
      );
      setCurrentCircleIndex(currentCircleIndex + 1);
    } else if (
      currentCircleIndex < circleCoordinates.length - 1 &&
      currentCircleIndex > 0
    ) {
      setClickTimes((clicktimes) => [
        ...clicktimes,
        (Date.now() - startTime) / 1000,
      ]);
      setCurrentCircleIndex(currentCircleIndex + 1);
    } else {
      // function sleep(ms) {
      //   return new Promise((resolve) => setTimeout(resolve, ms));
      // }
      setClickTimes((clicktimes) => [
        ...clicktimes,
        (Date.now() - startTime) / 1000,
      ]);
      var finalClickTimes = [...clickTimes, (Date.now() - startTime) / 1000];
      setIsCircleVisible(false);

      const timeElapsed = (Date.now() - startTime) / 1000;
      let fps = parseInt(
        (frames.length / parseInt(timeElapsed.toString())).toString()
      );

      const calibrationData = {
        patient_uid: PATIENT_UID,
        transaction_id: TRANSACTION_ID,
        camera_resolution: {
          width: videoResolution[0],
          height: videoResolution[1],
        },
        screen_resolution: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        debug: true,
      };

      var calibration_points = [];
      for (let i = 0; i < finalClickTimes.length; i++) {
        let currentClickFramesList = [];
        let frameRangeStartIndex = Math.floor(fps * finalClickTimes[i]);
        currentClickFramesList.push({
          timestamp: finalClickTimes[i],
          frame: frames[frameRangeStartIndex],
        });
        currentClickFramesList.push({
          timestamp: finalClickTimes[i] + 1 / fps,
          frame: frames[frameRangeStartIndex + 1],
        });
        calibration_points.push({
          point: {
            x: circleCoordinates[i][0],
            y: circleCoordinates[i][1],
            final: i === finalClickTimes.length - 1,
          },
          frames: currentClickFramesList,
        });
      }

      console.log(
        `FINAL CALIBRATION DATA BEFORE ENCRYPTION: ${JSON.stringify(
          calibrationData
        )}`
      ); // Fixed template literal

      // ENCRYPTION STARTS HERE

      async function processAndSendData() {
        try {
          const aesKey = Array.from(crypto.getRandomValues(new Uint8Array(32)))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");

          const encryptedCalibrationPoints = await encryptCalibrationData(
            calibration_points,
            aesKey
          ).catch((error) => {
            console.error("Failed to encrypt calibration points:", error);
            throw error;
          });

          const encryptedKey = await encryptPassword(aesKey).catch((error) => {
            console.error("Failed to encrypt password:", error);
            throw error;
          });

          // Create final data object
          const finalCalibrationData = {
            ...calibrationData,
            encrypted_calibration_points: encryptedCalibrationPoints,
            encrypted_Key: encryptedKey,
          };

          // Convert to string and send
          const calibrationDataString = JSON.stringify(finalCalibrationData);
          console.log(`FINAL CALIBRATION DATA: ${calibrationDataString}`); // Fixed template literal

          return axios
            .request({
              method: "POST",
              url: SERVER_MIDDLEWARE_URL,
              data: calibrationDataString,
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((response) => console.log(response));
        } catch (error) {
          console.error("Processing error:", error);
          throw error;
        }
      }

      processAndSendData()
        .then((response) => {
          clearInterval(frameCaptureInterval);
          console.log("Frame capturing stopped");
          console.log(response);
        })
        .catch((err) => {
          clearInterval(frameCaptureInterval);
          console.log("Frame capturing stopped");
          console.log(err);
        });
    }
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
      {isCircleVisible &&
        parentDimensions[0] > 0 &&
        parentDimensions[1] > 0 && (
          <Circle
            onClickHandler={handleCircleClick}
            x={circleCoordinates[currentCircleIndex][0]}
            y={circleCoordinates[currentCircleIndex][1]}
            radius={50}
            imageUrl="/CatFace.png"
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
          onClick={handleNextButtonClick} // Navigate to video page
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
