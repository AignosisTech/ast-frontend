import React, { useState } from 'react';
import StepCount from "./StepCount";
import { Link } from 'react-router-dom';
import CalibrationPage from './CalibrationPage';


const Toddlers = () => {


  const [isCalVisible,setIsCalVisible]=useState(false);
  


  const handleNextClick = async () => {
    setIsCalVisible(true);
  };


    const [currentStep, setCurrentStep] = useState(3); // Example: Starting with step 3 highlighted

    return (

        <>
        {!isCalVisible?(
        <div className='bg-[#1A0C25] h-full w-full'>
            
            <div className='w-full h-[50vw] bg-[#1A0C25] px-[10vw]'>
                <div className="flex w-full gap-[5vw] h-full justify-center items-center ">
                    <div className="left w-[30%] relative -top-[2vw] flex justify-center flex-col items-center h-full">
                        <div className='absolute'>
                            <div className="relative ml-[40%] justify-center items-center inline-block">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
                                <Link to="/" className="relative text-3xl font-semibold tracking-wide text-white z-10">Ai.gnosis</Link>
                            </div>
                            <div className='px-[1vw] '>
                                <h1 className='text-white font-montserrat mt-[4vw]'>Patient History</h1>
                                <p className='text-white font-montserrat mt-[2vw]'>Our Patient History form gathers essential information to better understand each individual's unique background and health journey.</p>
                                <p className='text-white font-montserrat mt-[2vw]'>This information is critical for our AI-powered tools at Ai.gnosis to generate accurate insights and recommend personalized next steps for supporting your child. Rest assured, all data is handled with the utmost confidentiality and care, enabling us to create a comprehensive support plan tailored to your needs</p>
                            </div>
                        </div>
                    </div>
                    <div className="right flex-col w-[60%] max-m-[60vh] pb-[3vw] bg-[#564A5957] rounded-3xl">
                        <div className='w-full max-h-[2vw] flex justify-center items-center text-white'>
                            <h1 className='mt-[5vw] font-medium text-xl font-montserrat'>Modified checklist for toddlers (M - Chat)</h1>
                        </div>
                        <div className="w-full mt-[5vw] px-[5vw]">
                            <table className="w-full text-white font-montserrat text-left border-separate border-spacing-y-2">
                                <thead>
                                    <tr>
                                        <th className="p-2 border rounded-3xl px-[10px]  border-[#796B80]">Questions</th>
                                        <th className="p-2 border rounded-3xl px-[10px] border-[#796B80] text-center">Yes</th>
                                        <th className="p-2 border rounded-3xl px-[10px] border-[#796B80] text-center">No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        "Experienced and Licensed Specialists",
                                        "Weekday and Evening Appointments Available",
                                        "Resources Provided After Sessions",
                                        "Regular Progress Updates",
                                        "Group Art & Story Sessions for Skill Building",
                                        "Direct Messaging with Specialists",
                                        "Convenient Scheduling Through Our Portal",
                                        "Access to Tips and Activities on Our App",
                                        "No Travel or Waiting Time",
                                        "EMI Payment Options (for Indian Residents Only)*",
                                    ].map((question, index) => (
                                        <tr key={index}>
                                            <td className="p-2 border-b border-[#796B80]">{question}</td>
                                            <td className="p-2 text-center border-b border-l border-[#796B80]">
                                                <input type="radio" name={`question-${index}`} value="yes" className="cursor-pointer" />
                                            </td>
                                            <td className="p-2 text-center border-b border-l border-[#796B80]">
                                                <input type="radio" name={`question-${index}`} value="no" className="cursor-pointer" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full mt-[2vw] font-montserrat  text-white flex justify-center items-center h-[5vw]">
                            <button onClick={handleNextClick} className='px-[1vw] gap-[1vw] flex justify-center items-center w-[10vw] h-[3vw] py-3 border border-[#9C00AD] rounded-full'>continue <span className='w-[2vw] h-[2vw] rounded-full bg-[#9C00AD]'></span></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>):(<CalibrationPage  />)
}
        </>
    );
}

export default Toddlers;
