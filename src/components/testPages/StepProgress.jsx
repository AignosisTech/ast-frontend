import React from 'react';

const StepProgress = ({ currentStep }) => {
  const steps = [
    { id: 1, label: "Assessment Type Selection" },
    { id: 2, label: "Patient History" },
    { id: 3, label: "Assessments" },
    { id: 4, label: "Calibration" },
    { id: 5, label: "Results" },
  ];

  return (
    <div className="flex  justify-between h-[20%] bg-[#1A0C25] mb-[0px] py-[4vh]">
      {steps.map((step, index) => (
        <div key={step.id} className={`flex items-center relative ${
            index === steps.length - 1 ? 'mr-[40px]' : 'ml-[50px]'
          }`}
        >
          <span className={`absolute -top-6 text-6xl font-manrope font-bold ${index === 1 ? '-left-2' : 'left-2'} ${
            currentStep === step.id ? 'text-[#e286b5]' : 'text-[#B7407D]'
          }`}>
            {step.id}
          </span>
          
          {/* Step Number and Square with Hover Effect */}
          <div className="flex flex-col items-center space-y-2">
            <div 
              className={`w-16 h-16 ${currentStep === step.id ? 'bg-[#B7407D]' : 'bg-[#D9D9D9]'} 
                          hover:bg-[#B7407D] cursor-pointer hover:scale-105 
                          transition-all duration-300 ease-in-out rounded-lg 
                          flex items-center justify-center shadow-md`}
            >
              <span className="text-white font-bold">{step.id}</span>
            </div>
            <span className="text-[#FFFFFF] font-manrope text-center">{step.label}</span>
          </div>

          {/* Arrow Icon */}
          {index < steps.length - 1 && (
            <div className="flex items-center">
              <span className="text-gray-400 text-xl ml-[200px]">...</span>
              <span className="text-gray-400 mt-3 text-xl">&gt;</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepProgress;
