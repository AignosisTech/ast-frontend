import React, { useEffect, useRef, useState } from "react";
import { encryptVideo } from "../EncryptionUtils";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import BeatLoader from "react-spinners/BeatLoader"; // Ensure you import the BeatLoader component

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
  const [isLoading, setIsLoading] = useState(false); // State for managing loading spinner
  
  const webcamRef = useRef(null);
  const calibrationVideoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const videoStreamRef = useRef(null);

  const { testData, setTestData } = useContext(AppContext);

  const SERVER_MIDDLEWARE_ENDPOINT = "https://35.207.211.80";

  useEffect(() => {





    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    }



    const params = new URLSearchParams(location.search);
    const patient_uid = params.get("patient_uid");
    const transaction_id = params.get("transaction_id");
    const encrypted_key = params.get("encrypted_key");
    const video_language = params.get("video_language");
    const patientDOB = params.get("patientDOB");
    const patientName = params.get("patientName");
  
    if (patient_uid && transaction_id && encrypted_key && video_language) {
      setTestData((prevData) => ({
        ...prevData,
        PATIENT_UID: patient_uid,
        TRANSACTION_ID: transaction_id,
        encrypted_key: encrypted_key,
        videolanguage: video_language,
        patientDOB: patientDOB,
        patientName: patientName,
      }));
    }


    window.history.pushState(null, null, window.location.href);

    const handleBackButton = () => {
      navigate("/calibrationpage");
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [location.search, setTestData, navigate]);

  useEffect(() => {
    if (isLoading) {
      console.log("Loader should be visible now!");
    }
    console.log("VIDEO PLAYBACK TEST DATA", testData);
  }, [isLoading]);

  const cleanupMediaStream = () => {
    if (webcamRef.current && webcamRef.current.srcObject) {
      const tracks = webcamRef.current.srcObject.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      webcamRef.current.srcObject = null;
    }

    if (videoStreamRef.current) {
      const tracks = videoStreamRef.current.getTracks();
      tracks.forEach((track) => {
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
    setIsLoading(true); // Show spinner

    try {
      setIsLoading(true); // Show spinner
      setIsUploading(true);

      const aesKey = Array.from(crypto.getRandomValues(new Uint8Array(32)))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      const encryptedBlob = await encryptVideo(blob, aesKey);

      const jwk = await fetch(
        SERVER_MIDDLEWARE_ENDPOINT + "/rest/return_rsa_public_key/"
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
        {
          name: "RSA-OAEP",
        },
        publicKey,
        new TextEncoder().encode(aesKey)
      );

      const formData = new FormData();
      formData.append("video", encryptedBlob, "encrypted-test.bin");
      formData.append(
        "encrypted_aes_key",
        new Blob([encryptedKey], { type: "application/octet-stream" }),
        "encrypted_aes_key.bin"
      );
      formData.append("patient_uid", testData.PATIENT_UID);
      formData.append("transaction_id", testData.TRANSACTION_ID);

      const response = await fetch(
        SERVER_MIDDLEWARE_ENDPOINT + "/rest/test/video_data/",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => {
          setIsLoading(false);
          if (!response.ok) { 
            throw new Error("Network response was not ok");
          } else {
            setIsLoading(false); // Show spinner
            navigate('/download');
          }
          return response.json();
        })
        .catch((err) => {
          throw new Error("Video save response was not ok" + err);
        });

      cleanupMediaStream();
      setIsUploading(false);
    } catch (error) {
      console.error("Error uploading video:", error);

      cleanupMediaStream();
      setIsUploading(false);
      setIsLoading(false); // Show spinner
      navigate("/Error");
    }
  };

  const pauseRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.pause();
      setIsRecording(false);
    }
  };

  const resumeRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "paused"
    ) {
      mediaRecorderRef.current.resume();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      (mediaRecorderRef.current.state === "recording" ||
        mediaRecorderRef.current.state === "paused")
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
        .then(() => {
          videoRef.current.requestFullscreen().catch((err) => {
            console.error("Failed to enter fullscreen mode:", err);
          });
        })
        .catch((err) => {
          console.error("Error playing video:", err);
        });
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

  const handleVideoEnd = async () => {
    setIsVideoEnded(true);
    stopRecording();
  };

  return (
    <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
      <video ref={webcamRef} autoPlay playsInline muted className="hidden" />
      <video
        ref={videoRef}
        src={
          testData.videolanguage === "English"
            ? "https://d228sadnexesrp.cloudfront.net/Test_Videos/Aignosis_Test_vid_Eng_V5.mp4"
            : testData.videolanguage === "Hindi"
            ? "https://d228sadnexesrp.cloudfront.net/Test_Videos/Aignosis_Test_vid_Hindi_V5.mp4"
            : "https://d228sadnexesrp.cloudfront.net/Test_Videos/Aignosis_Test_vid_Hindi_V5.mp4"
        }
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
        >

        </div>
        <span className="text-white text-sm">
          {isRecording ? "Recording" : "Not Recording"}
        </span>
      </div>
      {isLoading && (
        <div
          className="absolute inset-0 flex flex-col justify-center items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 50,
          }}
        >
          <BeatLoader color="#ffffff" size={15} />
          <p
            className="mt-4"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(138, 0, 194, 0.6)",
              color: "white",
              padding: "12px 24px",
              borderRadius: "25px",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            Loading
          </p>
        </div>
      )}

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
          <p className="text-white text-3xl">Please watch the video</p>
        )}
      </div>
    </div>
  );
};

export default VideoPlayback;
