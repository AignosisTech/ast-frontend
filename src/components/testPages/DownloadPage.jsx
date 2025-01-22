// import React, { useContext } from "react";
// import StepProgress from './StepProgress';
// import { Link } from 'react-router-dom';
// import { AppContext } from "../../AppContext";

// const DownloadPage = () => {
//     const {testData, setTestData} = useContext(AppContext);
//     const { isaascore, mchatScore, carsscore } = testData || {};
//     console.log(testData);
//     console.log("MCHAT: "+testData.mchatScore);
//     console.log(isaascore);
//     const getSeverityLevel = (score, type) => {
//       if (type === 'isaa') {
//         if (score >= 90) return 'High';
//         if (score >= 60) return 'Moderate';
//         return 'Low';
//       } else if (type === 'mchat') {
//         if (score >= 8) return 'High';
//         if (score >= 3) return 'Moderate';
//         return 'Low';
//       } else if (type === 'cars') {
//         if (score >= 37) return 'High';
//         if (score >= 30) return 'Moderate';
//         return 'Low';
//       }
//       return 'Unknown';
//     };
//   return (
//     <div className="bg-[#1A0C25] flex flex-col justify-center items-center min-h-screen text-center">
//       {/* Step Progress Indicator */}
//       {/* <StepProgress /> */}

//       {/* Ai.gnosis Title with Glow Effect */}
//       <div className="relative ">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
//         <h1 className="relative text-5xl font-semibold text-[#E3E2E5] z-10 font-montserrat">
//           Ai.gnosis
//         </h1>
//       </div>

//       {/* Big Thank You Message */}
//       <div className="mt-4">
//         <h2 className="text-6xl font-bold text-[#FFFFFF] font-manrope">Thank you</h2>
//       </div>

//       {/* Thank You Paragraph */}
//       <div className="mt-6 max-w-2xl px-6 text-[#F6E8FB] font-raleway">
//         <p className="text-lg text-center">
//           Thank you for completing the assessment with Ai.gnosis! Your responses bring us one step
//           closer to understanding and supporting your child’s unique needs. Our advanced AI tools
//           are here to provide insights that can guide you toward the next steps with confidence. If
//           you have questions about the results or need further assistance, please feel free to reach
//           out to our team. We're committed to empowering you and your child on this journey!
//         </p>
//       </div>
//        {/* Scores and Severity Display */}
//       <div className="mt-10 text-[#F6E8FB] text-lg font-montserrat font-medium">
//         <div>
//           INCLEN Score: {testData.inclenFullScore || 'N/A'}
//         </div>
//         <div>
//           ISAA Score: {isaascore || 'N/A'}
//         </div>
//         <div>
//           M-CHAT Score: {mchatScore || 'N/A'}
//         </div>
//         <div>
//           CARS Score: {carsscore || 'N/A'}
//         </div>
//       </div>
//       {/* Download Button */}
//       {/* <div className="mt-10">
//         <a href='https://firebasestorage.googleapis.com/v0/b/wedmonkey-d6e0e.appspot.com/o/Reports.pdf?alt=media&token=4b491bc6-5c98-490c-bd2c-a5909ed69d04' target='_blank' className=" text-[#F6E8FB] text-lg font-montserrat font-medium py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 border border-[#9C00AD]">
//           Download your report
//         </a>
//       </div> */}
//     </div>
//   );
// };

// export default DownloadPage;

import React, { useContext, useEffect } from "react";
import StepProgress from "./StepProgress";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";

const DownloadPage = () => {
  const { testData, setTestData } = useContext(AppContext);
  const { isaascore, mchatScore, carsscore } = testData || {};
  console.log(testData);
  console.log("MCHAT: " + testData.mchatScore);
  console.log(isaascore);
  const getSeverityLevel = (score, type) => {
    if (type === "isaa") {
      if (score >= 90) return "High";
      if (score >= 60) return "Moderate";
      return "Low";
    } else if (type === "mchat") {
      if (score >= 8) return "High";
      if (score >= 3) return "Moderate";
      return "Low";
    } else if (type === "cars") {
      if (score >= 37) return "High";
      if (score >= 30) return "Moderate";
      return "Low";
    }
    return "Unknown";
  };

  useEffect(() => {
    const {
      PATIENT_UID,
      TRANSACTION_ID,
      patientName,
      patientDOB,
      hasSubmitted,
    } = testData;
    if (hasSubmitted === "true") return;
    // Validate and sanitize the data
    if (typeof PATIENT_UID !== "string" || PATIENT_UID.trim() === "") {
      alert("Invalid PATIENT_UID. Please enter a valid string.");
      return;
    }
    if (typeof TRANSACTION_ID !== "string" || TRANSACTION_ID.trim() === "") {
      alert("Invalid TRANSACTION_ID. Please enter a valid string.");
      return;
    }
    if (typeof patientName !== "string" || patientName.trim() === "") {
      alert("Invalid patientName. Please enter a valid string.");
      return;
    }

    // Prepare sanitized data
    const patientuid = PATIENT_UID.trim();
    const transactionid = TRANSACTION_ID.trim();
    const patientname = patientName.trim();
    let patientdob = new Date(patientDOB); // Create a date object
    const day = patientdob.getDate().toString().padStart(2, "0"); // Get the day with leading zero
    const month = (patientdob.getMonth() + 1).toString().padStart(2, "0"); // Get the month with leading zero (Months are 0-indexed)
    const year = patientdob.getFullYear(); // Get the year
    const formattedDate = `${year}${month}${day}`; // Format as DD-MM-YYYY
    patientdob = formattedDate;
    console.log(patientdob);
    console.log(formattedDate);
    patientdob.toString();
    console.log("Sanitized Data:", {
      patientuid,
      transactionid,
      patientname,
      patientdob,
    });

    // Submit the sanitized data
    fetch(
      "https://script.google.com/macros/s/AKfycbxcFg05bQic8Gvz6N0VBmnjKScSqmDw5AsXUeQh79TxZQC8lT56aRqcjnuyD_RAAEZ5/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientuid,
          transactionid,
          patientname,
          patientdob,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          // throw new Error('Failed to submit data.');
          console.log(response);
        }
        // alert('Data submitted successfully!');
        console.log("Data Submitted");
        setTestData({
          ...testData,
        });
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });
  }, []);

  return (
    <div className="bg-[#1A0C25] flex flex-col justify-center items-center min-h-screen text-center">
      {/* Step Progress Indicator */}
      {/* <StepProgress /> */}

      {/* Ai.gnosis Title with Glow Effect */}
      <div className="relative ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
        <h1 className="relative text-5xl font-semibold text-[#E3E2E5] z-10 font-montserrat">
          Ai.gnosis
        </h1>
      </div>

      {/* Big Thank You Message */}
      <div className="mt-4">
        <h2 className="text-6xl font-bold text-[#FFFFFF] font-manrope">
          Thank you
        </h2>
      </div>

      {/* Thank You Paragraph */}
      <div className="mt-6 max-w-2xl px-6 text-[#F6E8FB] font-raleway">
        <p className="text-lg text-center">
          Thank you for completing the assessment with Ai.gnosis! Your responses
          bring us one step closer to understanding and supporting your child’s
          unique needs. Our advanced AI tools are here to provide insights that
          can guide you toward the next steps with confidence. If you have
          questions about the results or need further assistance, please feel
          free to reach out to our team. We're committed to empowering you and
          your child on this journey!
        </p>
      </div>
      {/* Scores and Severity Display */}
      <div className="mt-10 text-[#F6E8FB] text-lg font-montserrat font-medium">
        <div>INCLEN Score: {testData.inclenFullScore || "N/A"}</div>
        <div>ISAA Score: {isaascore || "N/A"}</div>
        <div>M-CHAT Score: {mchatScore || "N/A"}</div>
        <div>CARS Score: {carsscore || "N/A"}</div>
      </div>
      {/* Download Button */}
      {/* <div className="mt-10">
        <a href='https://firebasestorage.googleapis.com/v0/b/wedmonkey-d6e0e.appspot.com/o/Reports.pdf?alt=media&token=4b491bc6-5c98-490c-bd2c-a5909ed69d04' target='_blank' className=" text-[#F6E8FB] text-lg font-montserrat font-medium py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 border border-[#9C00AD]">
          Download your report
        </a>
      </div> */}
      <div className="mt-10 text-[#F6E8FB] text-lg font-montserrat font-medium">
        <h1>Download Page</h1>
        {/* Add your existing DownloadPage content here */}
      </div>
    </div>
  );
};

export default DownloadPage;
