import React, { useState , useContext} from 'react';
import { Link } from 'react-router-dom';
import WebcamMicTest from './WebcamMicTest';
import { AppContext } from "../../AppContext";


const CalibrationPage = () => {
  const [showWebcamMicTest, setShowWebcamMicTest] = useState(false);
  const [checks, setChecks] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setChecks((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  const {testData, setTestData} = useContext(AppContext);
  const allChecked = Object.values(checks).every((value) => value);

  const handleNextClick = () => {
    console.log('Testdata:', selectedLanguage);
    
      
      setTestData({
        ...testData,
        videolanguage: selectedLanguage,
        calibrationCompleted: true,
      });
      
      // Set the selected language in the testdata
      // const testdata = {
      //   language: selectedLanguage,
        
      // };
      
      

      setShowWebcamMicTest(true);
  };

  return (
    <>
      {!showWebcamMicTest ? (
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

            {/* <div className="space-y-3"> */}
              {/* <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="checkbox1"
                  className="w-5 h-5"
                  checked={checks.checkbox1}
                  onChange={handleCheckboxChange}
                />
                <span className="text-[#292738] font-medium max-sm:text-sm font-raleway">
                  Ensure the webcam is connected properly
                </span>
              </div> */}
              {/* <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="checkbox2"
                  className="w-5 h-5"
                  checked={checks.checkbox2}
                  onChange={handleCheckboxChange}
                />
                <span className="text-[#292738] font-medium max-sm:text-sm font-raleway">
                  Adjust lighting to avoid glare
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="checkbox3"
                  className="w-5 h-5"
                  checked={checks.checkbox3}
                  onChange={handleCheckboxChange}
                />
                <span className="text-[#292738] font-medium max-sm:text-sm font-raleway">
                  Position yourself comfortably in front of the camera
                </span>
              </div> */}
            {/* </div> */}

            <div className="space-y-3">
              <label className="text-[#292738] font-medium font-raleway">
                Select Video Calibration Language: &nbsp;&nbsp;
              </label>
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="border border-gray-300 rounded-md px-4 py-2"
              >
                <option value="">Choose language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>

            <div className="flex max-sm:flex-col max-sm:space-y-3 md:space-x-8 mt-[40px]">
              <Link
                onClick={handleNextClick}
                className={`flex items-center justify-center w-[200px] h-[50px] border ${
                selectedLanguage
                    ? 'border-[#9C00AD] text-[#292738] hover:bg-[#1a0c25] hover:text-white'
                    : 'border-gray-300 text-gray-400 cursor-not-allowed'
                } font-montserrat rounded-full font-semibold transition-colors`}
                style={{ pointerEvents:selectedLanguage ? 'auto' : 'none' }}
              >
                Start calibration
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <WebcamMicTest />
      )}
    </>
  );
};

export default CalibrationPage;