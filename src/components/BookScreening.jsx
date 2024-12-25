import React from 'react';
import family from '../assets/family.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import mind_img2 from '../assets/mind_img2.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import { useNavigate, Link } from "react-router-dom";
import { GoArrowUpRight } from 'react-icons/go';

// Reusable ServiceCard Component
const ServiceCard = ({ image, title, description, onClick }) => (
  <div
    className="bg-custom-gradient p-6 rounded-xl flex items-center shadow-3xl hover:shadow-2xl transition-shadow cursor-pointer"
    onClick={onClick}
  >
    {/* Image Section */}
    <div className="w-16 max-sm:h-[50px] h-16 bg-purple-950 rounded-full flex items-center justify-center">
      <img src={image} alt="Service Icon" className="w-12 h-12" loading="lazy" />
    </div>

    {/* Text Section */}
    <div className="ml-4 flex-grow">
      <h3 className="2xl:text-lg md:text-base font-semibold text-[#F6E8FB]">{title}</h3>
      <p className="2xl:text-sm md:text-xs text-[#F6E8FB] mt-1">{description}</p>
    </div>

    {/* Arrow Icon */}
    <div className="ml-4">
      <button className="bg-[#B7408069] w-8 h-8 flex items-center justify-center rounded-full hover:bg-pink-600 transition-colors">
        <AiOutlineArrowRight className="text-white text-xl" />
      </button>
    </div>
  </div>
);

// Main Component
const BookScreening = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (

    <div className='flex items-center justify-center 2xl:px-[10rem] 2xl:py-[6rem] md:px-[5rem] md:py-[5rem] m-2 max-sm:mt-[10vw] ' style={{ background: 'rgba(26, 12, 37, 1)' }}>

      <div
        className="min-h-screen bg-gradient-to-b py-[5rem] md:px-[5rem] border rounded-[6rem] border-[#B740A16B] w-[95vw] from-purple-900 to-purple-800 text-white p-10 flex flex-col items-center"
        style={{ background: 'rgba(26, 12, 37, 1)' }}
      >
        {/* Top Navigation */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          <span
            className="h-[10px] w-[118px] max-sm:w-[60px] rounded-full"
            style={{
              background:
                'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
            }}
          ></span>
          <p
            className="2xl:text-xl md:text-sm font-medium"
            style={{ color: '#F1C6FE' }}
          >
            For Parents
          </p>
          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background:
                "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>
        </div>

        {/* Title Section */}
        <div className="text-center max-w-2xl">
          <h1 className="md:text-3xl 2xl:text-5xl font-semibold mb-2">
            Book a Screening:
          </h1>
          <p className="text-2xl  italic font-light">
            Take the First Step Towards Early Intervention
          </p>
        </div>

        <div className="flex justify-between   mt-[2rem]">
          <div className="flex flex-col">
            {/* Why Screening Matters Section */}
            <div className="mt-12 md:pr-[5rem] 2xl:pr-[15rem] max-w-3xl">
              <h2 className="text-2xl max-sm:text-xl font-semibold mb-4">
                Why Early Screening Matters
              </h2>
              <p className="text-md max-sm:text-sm leading-relaxed">
                Our screening process provides parents with vital insights for
                early autism detection, helping you take proactive steps in
                supporting your child’s development. Easily book an appointment
                through our form to connect with experts for personalized
                guidance.
              </p>
            </div>

            {/* How It Helps You Section */}
            <div className="mt-10 md:pr-[5rem] 2xl:pr-[15rem] max-w-3xl">
              <h2 className="text-2xl max-sm:text-xl font-semibold mb-4">How it Helps You:</h2>
              <p className="text-md max-sm:text-sm leading-relaxed">
                Screening identifies early signs of autism, empowering parents
                with knowledge to make informed decisions. Scheduling today helps
                create a foundation of support for your child’s growth.
              </p>
            </div>

            {/* Proceed Button */}


            <div className='mt-7 '>
              <button className="px-2 w-auto md:h-[2.5rem] py-4 max-sm:px-1 max-sm:py-0 rounded-full text-lg max-sm:text-sm  font-semibold flex items-center space-x-2 hover:bg-[#B7407D] transition-colors border border-[#9C00AD]">
                <span>Click to proceed</span>
                <div className="w-[2rem] text-white group-hover:text-black text-lg flex justify-center items-center h-[2rem] rounded-full bg-[#B740A1] group-hover:bg-white  ">
                  <GoArrowUpRight />
                </div>
              </button>
            </div>


          </div>

          {/* Image Section */}
          <div className="relative mt-[3rem] md:pr-[6rem]">
            <div className="absolute inset-0 bg-[#B740A1] opacity-65 blur-[200px] rounded-lg "></div>
            <img src={family} alt="Family Illustration" className="relative z-10 md:w-72 2xl:w-64 h-auto max-sm:w-[400px]" loading="lazy" />
          </div>
        </div>

        <div className="flex justify-between max-sm:flex-col">
          <div className="flex flex-col md:mt-20">

            <div className="relative mt-[10rem] sm:ml-[8rem]">
              <div className="absolute inset-0 bg-[#B740A1] opacity-65 blur-[130px] rounded-lg "></div>
              <img src={mind_img2} alt="Family Illustration" className="relative  w-64 h-auto max-sm:w-[400px]"  loading="lazy" />
            </div>



            {/* Our Services Heading */}
            <h2 className="2xl:text-2xl md:text-lg md:ml-[8rem] font-semibold text-[#FFFFFF] font-manrope text-center">
              Our Services:
            </h2>

            {/* Subtext */}
            <p className="2xl:text-lg md:text-sm md:ml-[7rem] text-[#FFFFFF] text-center font-raleway">
              Comprehensive Support for Your Child’s <br /> Growth
            </p>
          </div>

          <div className="2xl:ml-[200px] flex flex-col gap-10">
            {/* Render Service Cards with Individual Margins */}
            <div className="ml-0">
              <ServiceCard
                image={pic1}
                title="Assessments & Evaluation"
                description="Educational, Psychological & Social Skills Assessment"
                onClick={() => handleNavigation("/servicepage1")}

              />
            </div>

            <div className="sm:ml-20">
              <ServiceCard
                image={pic2}
                title="Speech & Language"
                description="Support for Speech Delays & Communication Needs"
                onClick={() => handleNavigation("/servicepage1")}

              />
            </div>

            <div className="sm:ml-[150px]">
              <ServiceCard
                image={pic3}
                title="Behaviour Therapy"
                description="Guidance for Anxiety & Behavioral Health"
                onClick={() => handleNavigation("/servicepage1")}

              />
            </div>

            <div className="sm:ml-20">
              <ServiceCard
                image={pic4}
                title="Occupational Therapy"
                description="Motor Skills Independence & Confidence Building"
                onClick={() => handleNavigation("/servicepage1")}

              />
            </div>

            <div className="sm:ml-0">
              <ServiceCard
                image={pic5}
                title="Special Education"
                description="Academic Support in Core Subjects"
                onClick={() => handleNavigation("/servicepage1")}

              />
            </div>
          </div>
        </div>
      </div>


    </div>


  );
};

export default BookScreening;
