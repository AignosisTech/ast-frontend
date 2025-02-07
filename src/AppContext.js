import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  // Define the shared state
  const [testData, setTestData] = useState({
    PATIENT_UID: '',
    TRANSACTION_ID: '',
    patientName: '',
    patienDOB: '',
    videolanguage:'',
    mchatscore:'',
    carsscore:'',
    isaascore:'',
    inclenscore:'',
    calibration_data: '',
    encrypted_calibration_points: '',
    calibration_encrypted_key: '',
  });

  // Pass the state and updater function to the provider
  return (
    <AppContext.Provider value={{ testData, setTestData }}>
      {children}
    </AppContext.Provider>
  );
};