import React from 'react';
import { FaUser, FaCreditCard, FaCheckCircle, FaCcVisa, FaCcMastercard, FaCcApplePay, FaCcPaypal, FaGooglePay } from 'react-icons/fa';
import logo1 from "../../assets/images/payment/1.png";
import logo2 from "../../assets/images/payment/2.png";
import logo3 from "../../assets/images/payment/3.png";
import snip1 from "../../assets/images/payment/logo1.png";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';

const PaymentScreen1 = ({ onNext, onBack }) => {
  const handleNext = (e) => {
    e.preventDefault();

    try {
      onNext();
    } catch (error) {
      console.error('Error during navigation:', error);
    }
  };

  const location = useLocation();
  const { selectedPrice } = location.state || { selectedPrice: 0 };



  return (
    <div className="w-full px-[5vw] text-white font-montserrat min-h-screen bg-[#1A0C25] max-sm:px-[3vw] max-sm:pt-[5vw]">

      <div className="navsection pt-[6vw] w-full h-[15vw] px-[5vw] gap-[15vw] flex justify-center items-center py-[1vw] max-sm:gap-[5vw] max-sm:flex-row  ">
        <div className='flex flex-col justify-center items-center'>
          <div className="w-[8vw] h-[8vw] relative  bg-[#B7407D] text-white border-transparent flex justify-center items-center rounded-2xl max-sm:w-[15vw] max-sm:h-[15vw]">
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
          <div className="w-[8vw] h-[8vw] relative text-[#B7407DB2] border border-[#B7407D80] flex justify-center items-center rounded-2xl max-sm:w-[15vw] max-sm:h-[15vw]">
            <h1 className='font-montserrat top-[1vw] left-[1.2vw] font-bold text-6xl absolute max-sm:text-4xl'>3</h1>
            <img className='absolute scale-[.7] left-[2vw] bottom-0 max-sm:scale-[0.5]' src={logo3} alt="" loading="lazy" />
          </div>
          <h1 className='w-full text-center md:mt-[1vw] max-sm:mb-[4vw] text-white font-montserrat max-sm:text-sm'>Confirmation</h1>
        </div>
      </div>

      
      <div className="w-full text-base text-[#F6E8FB] mt-[5vw] max-sm:mt-[12vw] max-sm:text-sm">Home - Assessment / therapy - <span className='underline text-[#FB7CE4]'>Payment</span> </div>
      <div className="w-full mt-[5vw] min-h-[38vw] flex max-sm:flex-col justify-center gap-[5vw] max-sm:gap-[3vw]">
        <div className="left w-[30%] h-full max-sm:w-full">
          <h1 className='font-medium max-sm:text-sm'>Order Summary</h1>
          <div className="flex mt-[2vw] justify-end"><RiDeleteBin5Line /></div>
          <div className='flex  flex-col justify-start mt-[1vw] bg-[#564A5957] border border-[#9C00AD63] rounded-xl   gap-[1vw] pl-2 max-sm:pl-5'>
            <div className='flex flex-row'>
            <img src={snip1} alt="" loading="lazy" />
            <div className='flex w-full justify-between items-center max-sm:text-sm'>
              <h1 className='m-auto'>behavioral therapy</h1>
              <h1 className='m-auto'>₹{selectedPrice}</h1>
            </div>
            </div>
            <span className="flex font-raleway text-sm ">6-Month Validity </span>
            <span className="flex font-raleway text-sm">30 Sessions at ₹600/session </span>
            <span className="flex font-raleway text-sm">Save ₹8000 overall!</span>
          </div>

          <div className="mt-[4vw] text-base pl-10 max-sm:pl-5 max-sm:text-sm">
            <h1>Gift Card / Discount code</h1>
            <div className="flex justify-between gap-5 mt-2">
              <textarea className='rounded-xl bg-[#9C00AD63] w-[70%] max-sm:w-full' name="" id=""></textarea>
              <button className='px-5 py-2 max-sm:px-3 max-sm:py-1 border border-[#B740A1] rounded-xl'>Apply</button>
            </div>
            <div className="flex mt-6 justify-between items-center gap-5 border-b border-[#763e6c] pb-2 max-sm:text-sm">
              <h1>Subtotal:</h1>
              <h1>₹{selectedPrice}</h1>
            </div>
            <div className="flex mt-6 justify-between items-center gap-5 border-b border-[#763e6c] pb-2 max-sm:text-sm">
              <h1>Sales tax (6.5%):</h1>
              <h1>₹200</h1>
            </div>
            <div className="flex mt-6 justify-between items-center gap-5 pb-2 max-sm:text-sm">
              <h1>Total due:</h1>
              <h1 className='font-semibold text-[#B740A1]'>₹{selectedPrice+200}</h1>
            </div>
          </div>
        </div>
        <div className="right w-[60%] h-full bg-[#564A5957] rounded-2xl p-[5vw] max-sm:w-full max-sm:p-[4vw]">
          <h1 className='text-xl font-semibold max-sm:text-lg'>Complete registration payment</h1>
          <h1 className='mt-3 font-semibold max-sm:text-sm'>Personal details</h1>
          <input className='bg-transparent mt-5 border border-[#9C00AD75] text-sm p-[.8vw] w-full max-sm:p-2' type="text" placeholder='Your Name' />
          <input className='bg-transparent mt-5 border border-[#9C00AD75] text-sm p-[.8vw] w-full max-sm:p-2' type="text" placeholder='Your Email' />
          <input className='bg-transparent mt-5 border border-[#9C00AD75] text-sm p-[.8vw] w-full max-sm:p-2' type="text" placeholder='Phone Number' />
          <div className="flex gap-[2vw] max-sm:flex-col">
            <select
              className="bg-transparent pr-[2vw] mt-5 border border-[#9C00AD75] text-sm p-[.8vw] w-full max-sm:p-2"
              defaultValue=""
            >
              <option className='text-black bg-[#564A5957]' value="" disabled>Select State</option>
              <option className='text-black bg-[#564A5957]' value="maharashtra">Maharashtra</option>
              <option className='text-black bg-[#564A5957]' value="karnataka">Karnataka</option>
              <option className='text-black bg-[#564A5957]' value="gujarat">Gujarat</option>
            </select>
            <select
              className="bg-transparent mt-5 border border-[#9C00AD75] text-sm p-[.8vw] w-full max-sm:p-2"
              defaultValue=""
            >
              <option className='text-black bg-[#564A5957]' value="" disabled>Select Area/City</option>
              <option className='text-black bg-[#564A5957]' value="mumbai">Mumbai</option>
              <option className='text-black bg-[#564A5957]' value="pune">Pune</option>
              <option className='text-black bg-[#564A5957]' value="ahmedabad">Ahmedabad</option>
            </select>
          </div>
          <div className="w-full mt-[3vw] flex gap-[5vw] justify-center items-center">
      <Link to='/prices'>    <button onClick={onBack} className='py-3 px-7 border rounded-3xl border-[#9C00AD]'>Back</button></Link>
            <button onClick={handleNext} className='py-3 px-7 border rounded-3xl border-[#9C00AD]'>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen1;
