import React, { useState, useEffect, useRef } from 'react';
import bg from '../assets/images/bg3.png';
import UnderstandingNumber from './InnerPages/UnderstandingNumber';

const Screen3 = () => {
  const Divider = ({ title }) => (
    <div className="flex flex-row justify-center items-center space-x-4 mb-8 mt-10">
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background:
            "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
        }}
      ></span>
      <h1 className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-sm">
        {title}
      </h1>
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background:
            "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
        }}
      ></span>
    </div>
  );
  return (
    <div

      className='h-screen max-sm:h-[100vh] max-sm:mt-[40vw] w-full   flex justify-center items-center bg-[#1A0C25]'

    >
      <div className="w-full md:w-[200vw] flex h-auto justify-center items-center flex-col ">
        {/* Section Heading */}
        <div className='w-full flex-col h-[25vw]  justify-center flex items-center snap-center'>
          <Divider title="Understanding the Numbers" />
          <div className="">
            <h1 className='text-2xl 2xl:text-5xl w-full text-center md:text-3xl tracking-tight font-semibold leading-[3rem] text-[#F6E8FB] max-sm:text-center'>Understanding the Numbers</h1>
            <h1 className='text-center 2xl:text-5xl text-2xl md:text-4xl italic tracking-tight font-semibold mt-5 max-sm:mt-0 max-sm:mr-[20px] md:leading-[.1rem] 2xl:leading-[3rem] text-[#F6E8FB]'>Developmental Delays & Autism</h1>
          </div>
          <div className='px-[16rem] mt-[2rem] mb-3 max-sm:px-[30px] max-sm:mt-2 flex flex-wrap max-sm:mb-[250px] '>
            <p className='text-center text-[#ECECEC] text-sm 2xl:text-xl md:text-base'>
              Gain insight into the prevalence of developmental challenges and autism among children.
              Each data point highlights the urgency of early detection, supporting parents with reliable information to act quickly.
              Learn more about the numbers that drive our mission.
            </p>
          </div>
        </div>

        {/* Pass down the ref to UnderstandingNumber */}
        <UnderstandingNumber />


      </div>
    </div>
  );
};

export default Screen3;
