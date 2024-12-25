import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DownloadPage from './DownloadPage';

const CalibrationPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isDownloadPageVisible, setIsDownloadPageVisible] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleNextClick = () => {
    setIsVideoPlaying(true); // Start video playback
  };

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  const goToDownloadPage = () => {
    setIsDownloadPageVisible(true);
  };

  if (isDownloadPageVisible) {
    return <DownloadPage />;
  }

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
              
                className="flex items-center justify-center w-[200px] h-[50px] bg-[#FDF9FF] border border-[#9C00AD] text-[#292738] font-montserrat rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors "
              >
                Stop calibration
                </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center relative">
          <video
  src='https://firebasestorage.googleapis.com/v0/b/wedmonkey-d6e0e.appspot.com/o/Aignosis_Test_Vid_2.mp4?alt=media&token=d1444252-00c9-463a-a5f8-ee4129f2b211'

  autoPlay
  controls 
  onEnded={handleVideoEnd}
  className="w-full h-full object-cover"
  style={{ position: "fixed", top: 0, left: 0, zIndex: 10 }}
/>

          {isVideoEnded && (
            <button 
              onClick={goToDownloadPage} 
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
