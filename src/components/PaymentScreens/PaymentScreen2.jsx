import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcApplePay, FaCcPaypal, FaGooglePay } from 'react-icons/fa';
import { RiDeleteBin5Line } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import logo1 from "../../assets/images/payment/1.png";
import logo2 from "../../assets/images/payment/2.png";
import logo3 from "../../assets/images/payment/3.png";
import snip1 from "../../assets/images/payment/logo1.png";

const PaymentScreen2 = ({ onNext, onBack }) => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (selectedMethod) {
      onNext();
    } else {
      alert("Please select a payment method.");
    }
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="w-full px-[5vw] text-white font-montserrat min-h-screen bg-[#1A0C25] max-sm:px-[3vw] max-sm:py-[3vw]">

      
      <div className="navsection pt-[6vw] w-full h-[15vw] px-[5vw] gap-[15vw] flex justify-center items-center py-[1vw] max-sm:flex-row max-sm:gap-[3vw]">
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
          <div className="w-[7vw] h-[7vw] relative  bg-[#B7407D] text-white border-transparent flex justify-center items-center rounded-2xl max-sm:w-[15vw] max-sm:h-[15vw]">
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
          <div className="w-[8vw] h-[8vw] relative text-[#B7407DB2] border border-[#B7407D80] flex justify-center items-center rounded-2xl max-sm:w-[15vw] max-sm:h-[15vw]">
            <h1 className='font-montserrat top-[1vw] left-[1.2vw] font-bold text-6xl absolute max-sm:text-4xl'>3</h1>
            <img className='absolute scale-[.7] left-[2vw] bottom-0 max-sm:scale-[0.5]' src={logo3} alt="" loading="lazy" />
          </div>
          <h1 className='w-full text-center md:mt-[1vw] max-sm:mb-[4vw] text-white font-montserrat max-sm:text-sm'>Confirmation</h1>
        </div>
      </div>
      
      <div className="w-full text-base text-[#F6E8FB] mt-[5vw] max-sm:mt-[12vw] max-sm:text-sm">
        Home - Assessment / therapy - <span className='underline text-[#FB7CE4]'>Payment</span>
      </div>
      
      <div className="w-full mt-[5vw] min-h-[38vw] flex max-sm:flex-col justify-center gap-[5vw]">
        <div className="left w-[30%] h-full max-sm:w-full">
          <h1 className='font-medium max-sm:text-base'>Order Summary</h1>
          <div className="flex mt-[2vw] justify-end"><RiDeleteBin5Line /></div>
          <div className='flex justify-center mt-[1vw] items-center gap-[1vw] pl-10 max-sm:pl-0'>
            <img src={snip1} alt="" className="max-sm:w-[15vw]" loading="lazy" />
            <div className='flex w-full justify-between items-center'>
              <h1>behavioral therapy</h1>
              <h1>₹46000</h1>
            </div>
          </div>
          <div className="mt-[4vw] text-base pl-10 max-sm:pl-0 max-sm:text-sm">
            <h1>Gift Card / Discount code</h1>
            <div className="flex justify-between gap-5 mt-2 max-sm:flex-col">
              <textarea className='rounded-xl bg-[#9C00AD63] max-sm:w-full' name="" id=""></textarea>
              <button className='px-10 py-3 border border-[#B740A1] rounded-xl max-sm:w-full'>Apply</button>
            </div>
            <div className="flex mt-6 justify-between items-center gap-5 border-b border-[#763e6c] pb-2 max-sm:text-sm">
              <h1>Subtotal:</h1>
              <h1>₹46000</h1>
            </div>
            <div className="flex mt-6 justify-between items-center gap-5 border-b border-[#763e6c] pb-2 max-sm:text-sm">
              <h1>Sales tax (6.5%):</h1>
              <h1>₹200</h1>
            </div>
            <div className="flex mt-6 justify-between items-center gap-5 pb-2 max-sm:text-sm">
              <h1>Total due:</h1>
              <h1 className='font-semibold text-[#B740A1]'>₹46200</h1>
            </div>
          </div>
        </div>
        
        <div className="right w-[60%] h-full bg-[#564A5957] rounded-2xl p-[5vw] max-sm:w-full max-sm:p-[3vw]">
          <h1 className='text-xl font-semibold max-sm:text-lg'>Payment Methods</h1>
          <div className='mt-5 pl-[3vw] max-sm:pl-0'>
            <div className='flex mt-2 gap-5 '>
              <input 
                type="radio" 
                value="creditDebitCard" 
                checked={selectedMethod === "creditDebitCard"} 
                onChange={() => handlePaymentMethodChange("creditDebitCard")} 
              />
              <div className="w-full h-[3vw] flex justify-between items-center max-sm:h-auto max-sm:text-sm">
                <div>
                  <h1>Credit/Debit Cards</h1>
                  <h1 className='text-xs max-sm:text-[0.75rem]'>Pay with your Credit / Debit Card</h1>
                </div>
                <div className='text-3xl flex gap-[1vw] max-sm:text-xl'>
                  <FaCcVisa />
                  <FaCcMastercard />
                  <SiAmericanexpress />
                </div>
              </div>
            </div>
            <div className='flex mt-2 gap-5 '>
              <input 
                type="radio" 
                value="bankTransfer" 
                checked={selectedMethod === "bankTransfer"} 
                onChange={() => handlePaymentMethodChange("bankTransfer")} 
              />
              <div className="max-sm:text-sm">
                <h1>Direct Bank Transfer</h1>
                <h1 className='text-xs max-sm:text-[0.75rem]'>Make payment directly through bank account.</h1>
              </div>
            </div>
            <div className='flex mt-2 gap-5 '>
              <input 
                type="radio" 
                value="otherMethods" 
                checked={selectedMethod === "otherMethods"} 
                onChange={() => handlePaymentMethodChange("otherMethods")} 
              />
              <div className="w-full h-[3vw] flex justify-between items-center max-sm:h-auto max-sm:text-sm">
                <div>
                  <h1>Other Payment Methods</h1>
                  <h1 className='text-xs max-sm:text-[0.75rem]'>Pay with Apple Pay, Paypal or Google Pay.</h1>
                </div>
                <div className='text-3xl flex gap-[1vw] max-sm:text-xl'>
                  <FaCcApplePay />
                  <FaCcPaypal />
                  <FaGooglePay />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-[3vw] flex gap-[5vw] justify-center items-center">
            <button onClick={onBack} className='py-3 px-7 border rounded-3xl border-[#9C00AD]'>Back</button>
            <button onClick={handleNext} className='py-3 px-7 border rounded-3xl border-[#9C00AD] bg-[#9C00AD]'>Next</button>
          </div>


        </div>
      </div>

      
    </div>
  );
}

export default PaymentScreen2;
