import React, { useState } from 'react'
import StepProgress from './StepProgress'
import bluetick_img from  '../../assets/bluetick_img.png'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from 'react-icons/go'
import DownloadPage from './DownloadPage'
const CalibrationResult = () => {

    const [isDownloadVisible, setIsDownloadVisible] = useState(false);

    const handleNextClick = async () => {
        setIsDownloadVisible(true);
    };
  




  return (
    <div>
        {!isDownloadVisible?(
        
      <div className='bg-[#1A0C25] h-[110vh] flex flex-col justify-center items-center'>
      
          <div className="w-[900px] h-auto mt-[6px] bg-[#FDF9FF] rounded-3xl shadow-lg flex flex-col items-center p-8 space-y-6 relative border border-[#5F1B73]">
            {/* Ai.gnosis Branding */}
            <div className="text-4xl font-bold text-[#1A0C25] relative mb-2">
              <span className="z-10 font-montserrat">Ai.gnosis</span>
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="w-[150px] h-[100px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-70"></div>
              </div>
            </div>

            {/* Webcam & Microphone Test Section */}
            <h2 className="text-2xl font-semibold text-[#292738] font-manrope">Calibration Results</h2>
            <p className='font-raleway text-lg text-[#292738] text-center '>Here are your results below. If adjustments are needed, <br /> recalibrate; otherwise, proceed.</p>
            {/* Static Image Preview or Snapshot Display */}


            <div className='flex gap-5 '>

            <img src={bluetick_img} alt="" className='w-10 h-10' />
            <p  className='font-manrope text-3xl'>success</p>

            </div>
            

          <div className='flex gap-5'>
            <Link to="" className='w-[20%] sm:w-[12rem] cursor-pointer mt-[5rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B7407D] transition-colors duration-300'>
    <span className='text-[#292738] text-sm sm:text-base flex-grow text-center font-montserrat'>Recalibration</span>
    <div className='w-[2.5rem] h-[2.5rem] flex justify-center items-center text-white text-xl ml-2 group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1] mr-1'>
        <GoArrowUpRight />
    </div>
</Link>


<button  onClick={handleNextClick} className='w-[20%] sm:w-[12rem] cursor-pointer mt-[5rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B7407D] transition-colors duration-300'>
    <span className='text-[#292738] text-sm sm:text-base flex-grow text-center font-montserrat'>Proceed</span>
    <div className='w-[2.5rem] h-[2.5rem] flex justify-center items-center text-white text-xl ml-2 group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1] mr-1'>
        <GoArrowUpRight />
    </div>
</button>

</div>    

        
          </div>
        </div> ): ( <DownloadPage />  )
}
    </div>
        
  )
}

export default CalibrationResult
