import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaSpinner  , FaCcApplePay, FaCcPaypal, FaGooglePay } from 'react-icons/fa';
import { RiDeleteBin5Line } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import logo1 from "../../assets/images/payment/1.png";
import logo2 from "../../assets/images/payment/2.png";
import logo3 from "../../assets/images/payment/3.png";
import snip1 from "../../assets/images/payment/logo1.png";
import { Link } from 'react-router-dom';

const PaymentScreen3 = ({ onNext, onBack }) => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    // Add any validation or data processing here
    try {
      // Navigate to PatientHistoryForm2 
      onNext(); // Call the parent function to move to the next form
    } catch (error) {
      console.error('Error during navigation:', error); // Log the error
      // Optionally, display an error message to the user
    }
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="w-full px-[5vw] pb-[2vw] text-white font-montserrat min-h-screen bg-[#1A0C25]">
      
      <div className="navsection pt-[2vw] max-sm:pt-[15vw] w-full h-[15vw] px-[5vw] gap-[15vw] flex justify-center items-center py-[1vw] max-sm:flex-row max-sm:gap-[3vw] ">
        <div className='flex flex-col justify-center items-center'>
          <div className="w-[8vw] h-[8vw] relative text-[#B7407DB2] border border-[#B7407D80] flex justify-center items-center rounded-2xl max-sm:w-[15vw] max-sm:h-[15vw]">
            <h1 className='font-montserrat top-[1vw] left-[1.2vw] font-bold text-6xl absolute max-sm:text-4xl'>1</h1>
            <img className='absolute scale-[.7] left-[2vw] bottom-0 max-sm:scale-[0.5]' src={logo1} alt="" loading="lazy" />
          </div>
          <h1 className='w-full text-center mt-[1vw] text-white font-montserrat max-sm:text-sm'>Fill personal details</h1>
        </div>
        <span className="mx-[2vw]">
  <svg className="w-6 h-6 text-[#B7407DB2] max-sm:w-4 max-sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</span>
        <div className='flex flex-col justify-center items-center'>
          <div className="w-[7vw] h-[7vw] relative text-[#B7407DB2] border border-[#B7407D80] flex justify-center items-center rounded-2xl max-sm:w-[15vw] max-sm:h-[15vw]">
            <h1 className='font-montserrat top-[1vw] left-[1.2vw] font-bold text-6xl absolute max-sm:text-4xl'>2</h1>
            <img className='absolute scale-[.7] left-[2vw] bottom-0 max-sm:scale-[0.5]' src={logo2} alt="" loading="lazy" />
          </div>
          <h1 className='w-full text-center mt-[1vw] text-white font-montserrat max-sm:text-sm'>Payment details</h1>
        </div>
        <span className="mx-[2vw]">
  <svg className="w-6 h-6 text-[#B7407DB2] max-sm:w-4 max-sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</span>
        <div className='flex flex-col justify-center items-center'>
          <div className="w-[8vw] h-[8vw] relative bg-[#B7407D] text-white border-transparent flex justify-center items-center rounded-2xl max-sm:w-[15vw] max-sm:h-[15vw]">
            <h1 className='font-montserrat top-[1vw] left-[1.2vw] font-bold text-6xl absolute max-sm:text-4xl'>3</h1>
            <img className='absolute scale-[.7] left-[2vw] bottom-0 max-sm:scale-[0.5]' src={logo3} alt="" loading="lazy" />
          </div>
          <h1 className='w-full text-center md:mt-[1vw] max-sm:mb-[4vw] text-white font-montserrat max-sm:text-sm'>Confirmation</h1>
        </div>
      </div>
      {/* Loading Spinner for Payment Confirmation */}

      <div className='max-sm:mt-[20vw]'>
      <div className='' style={{
        width: '90%', // Make it responsive
        maxWidth: '600px', // Limit max width
        backgroundColor: '#564A5957',
        padding: '40px',
        borderRadius: '10px',
        height: '500px',
        margin: '0 auto', // Center align
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1vw',
        
      }}>
        <FaSpinner style={{
          fontSize: '48px',
          color: '#ff79c6',
          animation: 'spin 2s linear infinite',
        }} />
      </div>

      {/* CSS for Spinner Animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
      {/* Next Button */}
      <div className="w-full mt-[3vw] flex gap-[5vw] justify-center items-center">
            <button onClick={onBack} className='py-3 px-7 border rounded-3xl border-[#9C00AD]'>Back</button>
            <Link to="/test/fillup" className='py-3 px-7 border rounded-3xl border-[#9C00AD] bg-[#9C00AD]'>Next</Link>
          </div>
    </div>
  );
};

export default PaymentScreen3;
