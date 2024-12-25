import React, { useState } from 'react';
import PaymentScreen1 from './PaymentScreens/PaymentScreen1';
import PaymentScreen2 from './PaymentScreens/PaymentScreen2';
import PaymentScreen3 from './PaymentScreens/PaymentScreen3';
import PaymentScreen4 from './PaymentScreens/PaymentScreen4';

const PaymentScreensMain = () => {
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
        return <PaymentScreen1 onNext={handleNext} />;
      case 1:
        return <PaymentScreen2 onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <PaymentScreen3 onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <PaymentScreen4 onBack={handleBack} />;
      default:
        return <PaymentScreen1 onNext={handleNext} />;
    }
  };

  return (
    <div>
      {renderForm()}
    </div>
  );
};

export default PaymentScreensMain;