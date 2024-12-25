import React, { useState } from 'react'
import valid_img from  '../../assets/valid_img.png'
import StepProgress from './StepProgress'
import CalibrationResult from './CalibrationResult';

const CalibrationValidation = () => {
  
    const [isResultVisible, setIsResultVisible] = useState(false);

    const handleNextClick = async () => {
        setIsResultVisible(true);
    };
  

  return (
    <div>
        {
            !isResultVisible?(
      <div className='bg-[rgb(26,12,37)] h-[120vh] flex flex-col justify-center items-center'>
        
          <div className="w-[900px] h-auto mt-[6px] bg-[#FDF9FF] rounded-3xl shadow-lg flex flex-col items-center p-8 space-y-6 relative border border-[#5F1B73]">
            {/* Ai.gnosis Branding */}
            <div className="text-4xl font-bold text-[#1A0C25] relative mb-2">
              <span className="z-10 font-montserrat">Ai.gnosis</span>
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="w-[150px] h-[100px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-70"></div>
              </div>
            </div>

            {/* Webcam & Microphone Test Section */}
            <h2 className="text-2xl font-semibold text-[#292738] font-manrope">Calibration validation</h2>
            <p className='font-raleway text-lg text-[#292738] text-center'>Watch the validation video to confirm proper calibration. This step ensures that the system is prepared for data collection.</p>
            {/* Static Image Preview or Snapshot Display */}
            <div className="w-[500px] h-[300px] bg-[#D9D9D9] rounded-lg flex items-center justify-center overflow-hidden">
              
                <video src="https://drive.google.com/file/d/1dqAIy4Ok5cK1F8iNdLUoM5T4-iObpB-H/view" autoPlay muted    />
            
            </div>

        
              <button onClick={handleNextClick}
                
                className="mt-4 px-6 py-2 border-2 border-[#9C00AD] text-[#292738] rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors font-montserrat"
              >
                Continue
              </button>
            

        
          </div>
        </div>):( < CalibrationResult /> )
}
    </div>
  )
}

export default CalibrationValidation
