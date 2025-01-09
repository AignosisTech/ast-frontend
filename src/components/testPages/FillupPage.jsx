import React, { useContext, useEffect, useState } from "react";
import StepProgress from "./StepProgress";
import { Link } from "react-router-dom";
import CalibrationPage from "./CalibrationPage";
import WebcamMicTest from "./WebcamMicTest";
import BackgroundInformationForm from "./BackgroundInformationForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { differenceInYears, differenceInMonths } from "date-fns";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../../AppContext";

export const FillupPage = () => {
  const [isBackInfoVisible, setIsBackInfoVisible] = useState(false);
  const [dob, setDob] = useState(null);
  const [, setAgeYears] = useState("");
  const [, setAgeMonths] = useState("");
  const [, setAgeFullYear] = useState("");
  const [dataCollectionMode, setDataCollectionMode] = useState([]); // New state for selected options
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const { testData, setTestData } = useContext(AppContext);

  useEffect(() => {
    if (testData.PATIENT_UID === "" || testData.TRANSACTION_ID == "") {
      navigate("/");
    }

    console.log("FILLUP UP TEST DATA", testData);

    document.getElementById("patient-uid-input").value = testData.PATIENT_UID;
  }, []);

  useEffect(() => {
    // Push initial state to prevent default navigation
    window.history.pushState(null, null, window.location.href);
  
    const handleBackButton = () => {
      navigate("/calibrationpage"); // Redirect to CalibrationPage on back press
    };
  
    // Listen for the popstate event
    window.addEventListener("popstate", handleBackButton);
  
    // Cleanup the listener on unmount
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate]);
  

  const handleNextClick = async () => {
    try {
      // Request permission for webcam and microphone
      // await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      // If permission is granted, show the CalibrationPage
      // setIsBackInfoVisible(true);
      //if permission go to download report page
      // navigate("/patienthistory");

      if (document.getElementById("patient-name-input").value == "") {
        alert("Please enter all fields");
      } else {
        setTestData({
          ...testData,
          patientName: document.getElementById("patient-name-input").value,
        });

        console.log("going to  data collection", testData.dataCollectionMode);
        navigate("/dataCollection");
      }
    } catch (error) {
      console.error("Permission denied for webcam and microphone:", error);
      alert("Please allow webcam and microphone access to proceed.");
    }
  };

  // Function to calculate age based on DOB
  const handleDateChange = (date) => {
    setDob(date);

    const years = differenceInYears(new Date(), date);
    const months = differenceInMonths(new Date(), date) % 12;
    const fullYear = date.getFullYear();

    setAgeYears(years);
    setAgeMonths(months);
    setAgeFullYear(fullYear);
  };

  // // Function to handle checkbox change
  // const handleCheckboxChange = (event) => {
  //   const { value, checked } = event.target;
  //   setDataCollectionMode((prev) => {
  //     const updatedData = checked
  //       ? [...prev, value]
  //       : prev.filter((item) => item !== value);

  //     setTestData((prevTestData) => ({
  //       ...prevTestData,
  //       dataCollectionMode: updatedData, // Use the updated state here
  //     }));

  //     console.log(updatedData);
  //     return updatedData;
  //   });
  // };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
  
    setTestData((prevTestData) => {
      const updatedDataCollectionMode = checked
        ? [...prevTestData.dataCollectionMode, value] // Add value if checked
        : prevTestData.dataCollectionMode.filter((item) => item !== value); // Remove value if unchecked
  
      return {
        ...prevTestData,
        dataCollectionMode: updatedDataCollectionMode,
      };
    });
  };
  
  return (
    <>
      <div className="bg-[#1A0C25] flex flex-col justify-center items-center min-h-screen">
        {/* <StepProgress /> */}
        {!isBackInfoVisible ? (
          <div className="flex flex-row  max-sm:flex-col max-sm:justify-center items-center justify-between mt-[10px] max-sm:mt-0 max-sm:mb-[50px]">
            {/* Left side content */}
            <div className="flex flex-col items-start space-y-[80px] px-8  max-sm:mt-[50px]">
              {/* Logo with Gradient Background */}
              <div className="relative inline-block m-[auto]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
                <span className="relative text-4xl font-semibold tracking-wide text-white z-10">
                  Ai.gnosis
                </span>
              </div>

              {/* Assessment Text */}
              <div className="flex flex-col space-y-4 max-w-sm ">
                <p className="text-white font-manrope text-center text-2xl">
                  Please take the assessment to{" "}
                  <span className="text-left ">begin with diagnosis</span>
                </p>
                <p className="text-[#FFFFFF] font-raleway text-sm px-4 py-2 text-center ">
                  Assessment duration: 5 mins
                </p>
              </div>
            </div>

            {/* Right side form */}
            <div className="bg-[#564A5957] p-10 rounded-2xl shadow-lg w-[50vw] max-sm:w-auto mx-8">
              <h2 className="text-white text-2xl font-semibold mb-4 font-manrope text-center">
                Welcome to Ai.gnosis early detection screener
              </h2>
              <p className="text-gray-400 text-sm mb-8 font-raleway text-center">
                Ai.gnosis is an online platform that helps you detect early
                signs of <br /> developmental disorder in children.
              </p>

              <form className="space-y-4">
                <select className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option className="bg-[#1A0C25]">Choose Language</option>
                  <option className="bg-[#1A0C25]" value="en">
                    English
                  </option>
                  <option className="bg-[#1A0C25]" value="es">
                    Spanish
                  </option>
                  <option className="bg-[#1A0C25]" value="fr">
                    French
                  </option>
                  <option className="bg-[#1A0C25]" value="de">
                    German
                  </option>
                </select>

                <input
                  id="patient-name-input"
                  type="text"
                  placeholder="Patient Name"
                  className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                  // onChange={(e) => {
                  //   setPName(e.target.value);
                  // }}
                />

                <input
                  id="patient-uid-input"
                  type="text"
                  placeholder="Patient ID"
                  className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                />

                {/* Date Picker for DOB */}
                <DatePicker
                  selected={dob}
                  onChange={handleDateChange}
                  placeholderText="Patient DOB"
                  showYearDropdown
                  className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                />

                {/* Automatically populated fields for age */}
                {/* <input
                  type="text"
                  placeholder="Patient Age (Years)"
                  value={ageYears}
                  readOnly
                  className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                />

                <input
                  type="text"
                  placeholder="Patient Age (Months)"
                  value={ageMonths}
                  readOnly
                  className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                />

                <input
                  type="text"
                  placeholder="Patient Year"
                  value={ageFullYear}
                  readOnly
                  className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                /> */}

                {/* Data Collection Mode Section */}
                <div className="text-white">
                  <h3 className="font-semibold mb-2 text-sm">
                    Data Collection Mode
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="INCLEN"
                        onChange={handleCheckboxChange}
                        className="accent-pink-500"
                      />
                      <span>INCLEN</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="ISAA"
                        onChange={handleCheckboxChange}
                        className="accent-pink-500"
                      />
                      <span>ISAA</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="CARS"
                        onChange={handleCheckboxChange}
                        className="accent-pink-500"
                      />
                      <span>CARS</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2 max-sm:flex-col">
                  <Link
                    to="/prices"
                    className="text-white border border-[#9C00AD] px-6 py-3 rounded-full font-semibold mt-4 w-[150px] flex justify-center items-center
             transition-all duration-300 ease-in-out hover:bg-[#9C00AD] hover:border-transparent hover:shadow-md"
                  >
                    Back
                  </Link>

                  <button
                    type="button"
                    onClick={handleNextClick}
                    className="hover:bg-pink-700 text-white border border-[#9C00AD] px-6 py-3 rounded-full font-semibold mt-4 w-[150px] flex justify-center items-center"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <CalibrationPage />
        )}
      </div>
    </>
  );
};

export default FillupPage;
