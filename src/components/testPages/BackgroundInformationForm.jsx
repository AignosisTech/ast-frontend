import React, { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import StepProgress from './StepProgress';
import Toddlers from './Toddlers';





function BackgroundInformationForm() {

    const [isTodolersVisible,setisTodolersVisible] = useState(false);





    const handleNextClick = async () => {
        setisTodolersVisible(true);
      };


  return (
    <>
    
   {!isTodolersVisible?( <div className="h-auto flex flex-col justify-center  bg-[#1A0C25]" >

      <div className='h-auto flex  justify-center '>
         {/* Left side content */}
         <div className="flex flex-col items-start space-y-[80px] px-8 mt-[200px]">
              {/* Logo with Gradient Background */}
              <div className="relative inline-block ml-[60px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
                <span className="relative text-4xl font-semibold tracking-wide text-white z-10">
                  Ai.gnosis
                </span>
              </div>

              {/* Assessment Text */}
              <div className="flex flex-col space-y-4 max-w-sm mr-[100px]">
                <p className="text-white font-manrope text-2xl ">
                Patient History 
                </p>
                <p className="text-[#FFFFFF] font-raleway text-sm py-2 text-left ">
                Our Patient History form gathers essential information to better understand each individual's unique background and health journey. <br /> <br />

This information is critical for our AI-powered tools at Ai.gnosis to generate accurate insights and recommend personalized next steps for supporting your child. Rest assured, all data is handled with the utmost confidentiality and care, enabling us to create a comprehensive support plan tailored to your needs
                </p>
              </div>
            </div>








      <div className="bg-[#564A5957] text-white p-8 mt-5 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-semibold mb-4 font-manrope text-center ">Provide Additional Background Information</h2>
        <p className="mb-6 font-raleway text-xl text-center">Help us understand the patient’s history better. The information you provide here will support a more thorough assessment.</p>
        
        <div className="mb-4">
          <label className="block mb-2">Choose language</label>
          <input type="text" className="w-full p-2 bg-[#2521270F] rounded-md border border-[#B7407D4D] focus:outline-none" />
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {['School & class of the child', 'Mother name', 'Father name', "Mother's occupation", "Father's occupation"].map((placeholder, index) => (
            <input
              key={index}
              type="text"
              placeholder={placeholder}
              className="w-full p-2 bg-[#2521270F] rounded-md border border-[#B7407D4D] focus:outline-none"
            />
          ))}
        </div>
        
        <div className="mt-6">
          <p className="font-semibold font-raleway text-[#F6E8FB]">1. Cried at time of birth?</p>
          {['Yes', 'May be', 'No'].map((option, index) => (
            <label key={index} className="inline-flex items-center mr-4">
              <input type="radio" name="criedAtBirth" className="form-radio text-[#F6E8FB] font-raleway border border-[#9C00AD]" />
              <span className="ml-2 ">{option}</span>
            </label>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-semibold font-raleway text-[#F6E8FB]">2. NICU care?</p>
          {['Yes', 'May be', 'No'].map((option, index) => (
            <label key={index} className="inline-flex items-center mr-4">
              <input type="radio" name="nicuCare" className="form-radio text-purple-600" />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-semibold font-raleway text-[#F6E8FB]">3. Hospitalized anytime in the past?</p>
          {['Yes', 'May be', 'No'].map((option, index) => (
            <label key={index} className="inline-flex items-center mr-4">
              <input type="radio" name="hospitalizedPast" className="form-radio text-purple-600" />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-semibold font-raleway text-[#F6E8FB]">4. Patient complaints</p>
          {[
            'Speech delay', 'Delayed development', 'Seizures', 'Neurological complaints',
            'School performance', 'Genetic disorder', 'Anxiety disorder', 'Physical disorder', 'other'
          ].map((complaint, index) => (
            <label key={index} className="block mt-1">
              <input type="checkbox" className="form-checkbox text-purple-600 mr-2" />
              <span>{complaint}</span>
            </label>
          ))}
          <input type="text" placeholder="If any other specify" className="w-full p-2 mt-2 bg-[#2521270F] rounded-md border border-[#B7407D4D] focus:outline-none" />
        </div>

        <div className="mt-4">
          <p className="font-semibold font-raleway text-[#F6E8FB]">5. Birth order</p>
          {[
            'Birth order only child', 'Birth order first born', 'Birth order second born',
            'Birth order third born', ' Birth order Other'
          ].map((birthOrder, index) => (
            <label key={index} className="block mt-1">
              <input type="radio" name="birthOrder" className="form-radio text-purple-600 mr-2" />
              <span>{birthOrder}</span>
            </label>
          ))}
        </div>

     {/* 6. Birth term */}
     <div className="mt-4">
          <p className="font-semibold font-raleway text-[#F6E8FB]">6. Birth term</p>
          {['Full term', 'Preterm'].map((term, index) => (
            <label key={index} className="inline-flex items-center mr-4">
              <input type="radio" name="birthTerm" className="form-radio text-purple-600" />
              <span className="ml-2">{term}</span>
            </label>
          ))}
        </div>

        {/* 7. Same gotra */}
        <div className="mt-4">
          <p className="font-semibold font-raleway text-[#F6E8FB]">7. Same gotra</p>
          {['Yes', 'No'].map((option, index) => (
            <label key={index} className="inline-flex items-center mr-4">
              <input type="radio" name="sameGotra" className="form-radio text-purple-600" />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>

        {/* 8. Relation */}
        <div className="mt-4">
          <label className="block font-semibold mb-2 font-raleway text-[#F6E8FB]">8. Relation</label>
          <input type="text" placeholder="Specify relationship" className="w-full p-2 bg-[#2521270F] rounded-md border border-[#B7407D4D] focus:outline-none" />
        </div>

        {/* 9. Family type */}
        <div className="mt-4">
          <label className="block font-semibold mb-2 font-raleway text-[#F6E8FB]">9. Family type</label>
          <input type="text" className="w-full p-2 bg-[#2521270F] rounded-md border border-[#B7407D4D] focus:outline-none" />
        </div>

        {/* 10. Language spoken at home */}
        <div className="mt-4">
          <p className="font-semibold font-raleway text-[#F6E8FB]">10. Which language is spoken at home</p>
          {['English', 'Hindi', 'Other (specify)'].map((lang, index) => (
            <label key={index} className="block mt-1">
              <input type="radio" name="homeLanguage" className="form-radio text-purple-600 mr-2" />
              <span>{lang}</span>
            </label>
          ))}
          <input type="text" placeholder="Specify if other" className="w-full p-2 mt-2 bg-[#2521270F] rounded-md border border-[#B7407D4D] focus:outline-none" />
        </div>

        {/* 11. Family medical history */}
        <div className="mt-4">
          <p className="font-semibold font-raleway text-[#F6E8FB]">11. Family medical history</p>
          {[
            'History of convulsions', 'Neuro muscular disorder', 'Mental illness',
            'Loss of understanding', "Mother's antenatal weight / BMI"
          ].map((history, index) => (
            <label key={index} className="block mt-1">
              <input type="checkbox" className="form-checkbox text-purple-600 mr-2" />
              <span>{history}</span>
            </label>
          ))}
          <label className="block mt-1">
            <input type="checkbox" className="form-checkbox text-purple-600 mr-2" />
            <span>If other (Specify condition & family member)</span>
          </label>
          <input type="text" placeholder="Specify if any other medical history" className="w-full p-2 mt-2 bg-[#2521270F] rounded-md border border-[#B7407D4D] focus:outline-none" />
          <input type="text" placeholder="Specify to which family member" className="w-full p-2 mt-2 bg-[#2521270F] rounded-md border border-[#B7407D4D] focus:outline-none" />
        </div>

        {/* Submit button */}
        <div className="mt-6 flex justify-center items-center">
          
        <button  onClick={handleNextClick} className='w-[20%] sm:w-[12rem] cursor-pointer mt-[5rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B7407D] transition-colors duration-300'>
    <span className='text-white text-sm sm:text-base flex-grow text-center'>Next</span>
    <div className='w-[2.5rem] h-[2.5rem] flex justify-center items-center text-white text-xl ml-2 group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1] mr-1'>
        <GoArrowUpRight />
    </div>
</button>



        </div>




        </div>
      </div>
    </div>):(<Toddlers /> )}
    </>
  );
}

export default BackgroundInformationForm;
