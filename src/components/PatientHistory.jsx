import React, { useState } from 'react';
import PatientHistoryForm1 from './patient-history-form/PatientHistoryForm1'; // Import your forms
import PatientHistoryForm2 from './patient-history-form/PatientHistoryForm2';
import PatientHistoryForm3 from './patient-history-form/PatientHistoryForm3';
import PatientHistoryForm4 from './patient-history-form/PatientHistoryForm4';

const PatientHistory = () => {
  const [currentForm, setCurrentForm] = useState(0);

  const handleNext = () => {
    setCurrentForm((prev) => Math.min(prev + 1, 3)); // Ensure it doesn't exceed the number of forms
  };

  const handleBack = () => {
    setCurrentForm((prev) => Math.max(prev - 1, 0)); // Ensure it doesn't go below zero
  };

  const renderForm = () => {
    switch (currentForm) {
      case 0:
        return <PatientHistoryForm1 onNext={handleNext} />;
      case 1:
        return <PatientHistoryForm2 onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <PatientHistoryForm3 onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <PatientHistoryForm4 onBack={handleBack} />;
      default:
        return <PatientHistoryForm1 onNext={handleNext} />;
    }
  };

  return (
    <div>
      {renderForm()}
    </div>
  );
};

export default PatientHistory;
