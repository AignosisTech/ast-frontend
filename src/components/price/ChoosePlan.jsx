import React, { useEffect, useState } from "react";
import { FiArrowRight, FiChevronsRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowUpRight, GoShare } from "react-icons/go";
import { FaShareAlt } from "react-icons/fa";
import img1 from '../../assets/assessments/as1.png';
import img2 from '../../assets/assessments/as2.png';
import img3 from '../../assets/assessments/as3.png';
import img4 from '../../assets/assessments/as4.png';
import GiftAssessment from "./GiftAssessment";
import PricingCard from "./PricingCard";
import popularImage from "../../assets/popular.png";
import PlanHeading from "./PlanHeading";
import GiftHeading from "./GiftHeading";

const ChoosePlan = () => {
  const [active, setActive] = useState("assessment");
  const [isGiftVisible, setIsGiftVisible] = useState(false);
 
  const navigate = useNavigate();

  const handleCardClick = (price) => {
    navigate("/payment", { state: { selectedPrice: price } }); // Pass price to Payment page
  };


  useEffect(()=>{
   setIsGiftVisible(false)
   
  },[active])


  const handleGift = () => {
    setIsGiftVisible(true);
  };

  return (
    <div className="bg-[#1A0C25] min-h-screen  flex flex-col justify-center items-center p-6">
      {/* Header, Title, Description, and Gift Section */}
      {isGiftVisible ? (
        <GiftHeading />
      ) : (
       
        <PlanHeading />
      )}

      {/* Toggle Buttons */}
      <div className="flex  w-[210px] bg-[#9C00AD4A] border border-[#B740A1] rounded-3xl mb-10">
        <button
          onClick={() => setActive("assessment")}
          className={`w-1/2 py-2 m-1 rounded-3xl text-[#F6E8FB] font-semibold ${active === "assessment" ? "bg-[#5D1661] border-[#B740A1]" : ""}`}
        >
          Assessment
        </button>
        <button
          onClick={() => setActive("therapy")}
          className={`w-1/2 py-2 m-1 rounded-3xl text-[#F6E8FB] font-semibold ${active === "therapy" ? "bg-[#5D1661] border-[#B740A1]" : ""}`}
        >
          Therapy
        </button>
      </div>

      {/* Render GiftAssessment component conditionally */}
      {isGiftVisible ? (
        <GiftAssessment />
      ) : (
        <div className="flex flex-row max-sm:flex-col gap-10 font-raleway">
          {active === "therapy" && (
            <>
              <PricingCard
                discount="10% Off!"
                price="24000"
                originalPrice="27000"
                validity="3-Month Validity"
                sessions="15 Sessions at ₹600/session"
                savings="Save ₹3000 overall!"
                background="bg-[#564A5957]"
              />
              <PricingCard
                discount="30% Off!"
                price="46000"
                originalPrice="54000"
                validity="6-Month Validity"
                sessions="30 Sessions at ₹600/session"
                savings="Save ₹8000 overall!"
                background="bg-[#564A5957]"
                isPopular
              />
              <PricingCard
                discount="20% Off!"
                price="90000"
                originalPrice="108000"
                validity="One Year Validity"
                sessions="60 Sessions at ₹600/session"
                savings="Save ₹18000 overall!"
                background="bg-[#564A5957]"
              />
            </>
          )}

          {/* Add Assessment cards here */}
          {active === "assessment" && (
            <div
              className="md:w-[80vw] flex justify-center items-center rounded-md min-h-screen p-4 md:p-6 lg:p-8"
              style={{
                background: "radial-gradient(83.36% 50.06% at 50.04% 49.94%, #070B0E 0%, rgba(94, 40, 100, 0.3) 100%)",
              }}
            >
              <div className="w-full md:w-[80vw] lg:w-[60vw] max-sm:w-[300px] p-4 md:p-6 lg:p-8 flex flex-col items-center space-y-14">
                
                {/* Top Content: Discount and Price */}
                <div className="w-full md:w-[40vw] lg:w-[20vw] h-auto flex flex-col bg-[#564A5957] border p-4 border-[#B740A180] items-center gap-5 text-center text-[#F6E8FB] rounded-xl font-raleway">
                  <div className="px-4 py-2 w-[100px] rounded-2xl bg-[#B7407D54] text-xs text-left font-semibold border border-[#B740A1]">
                    64% Off!
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4">₹700</h2>
                  <span className="text-sm font-normal text-gray-400">(originally ₹2000)</span>
                  <p className="text-xs md:text-sm lg:text-md font-normal">(Comprehensive Evaluation)</p>
                  <div className="space-y-2 text-center text-xs md:text-sm lg:text-md mt-4">
                    <p>Includes Formal Report</p>
                    <p>Detailed Explanation</p>
                    <p>Easy & fast procedure</p>
                  </div>
                </div>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-raleway text-[#F6E8FB] md:m-[10vw] italic font-bold">Autism screening test</h2>

                {/* Main Content: Screening Steps */}
<div className="w-full md:w-[70vw] flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:justify-center lg:justify-around text-[#F6E8FB] space-y-4 md:space-y-6 lg:space-y-0 md:space-x-4 font-raleway">
  
  {/* Step 1 */}
  <div className="flex flex-col items-center text-center md:w-[40%] lg:w-auto">
    <div className="mb-4">
      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] bg-[#382C3E73] rounded-md">
        <img src={img1} className="w-full h-full" alt="Step 1" loading="lazy" />
      </div>
    </div>
    <h3 className="font-bold text-base md:text-lg">In-Depth Assessment</h3>
    <p className="text-xs md:text-sm lg:text-md text-center">Specialized evaluations that uncover your child’s unique abilities and areas for growth, providing clear insights into their developmental journey.</p>
  </div>

  {/* Arrow between Step 1 and Step 2 */}
  <div className="hidden md:flex h-[7vw]  items-center justify-center ">
  <FiChevronsRight size={24} />
  </div>

  {/* Step 2 */}
  <div className="flex flex-col items-center text-center md:w-[40%] lg:w-auto">
    <div className="mb-4">
      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] bg-[#382C3E73] rounded-md">
        <img src={img2} className="w-full h-full" alt="Step 2" loading="lazy" />
      </div>
    </div>
    <h3 className="font-bold text-base md:text-lg">Personalized Therapy</h3>
    <p className="text-xs md:text-sm lg:text-md  ">Individualized sessions focused on building essential skills, designed to support your child’s specific developmental needs in a nurturing environment.</p>
  </div>

  {/* Arrow between Step 2 and Step 3 */}
  <div className="hidden md:flex h-[7vw] items-center justify-center">
  <FiChevronsRight size={24} />
  </div>

  {/* Step 3 */}
  <div className="flex flex-col items-center text-center md:w-[40%] lg:w-auto">
    <div className="mb-4">
      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] bg-[#382C3E73] rounded-md">
        <img src={img3} className="w-full h-full" alt="Step 3"  loading="lazy"/>
      </div>
    </div>
    <h3 className="font-bold text-base md:text-lg">Adaptive Learning Support</h3>
    <p className="text-xs md:text-sm lg:text-md">Resources and guidance tailored to promote learning success and help your child confidently engage with educational goals.</p>
  </div>

  {/* Arrow between Step 3 and Step 4 */}
  <div className="hidden md:flex h-[7vw] items-center justify-center ">
  <FiChevronsRight size={24} />
  </div>

  {/* Step 4 */}
  <div className="flex flex-col items-center text-center md:w-[40%] lg:w-auto">
    <div className="mb-4">
      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] bg-[#382C3E73] rounded-md">
        <img src={img4} className="w-full h-full" alt="Step 4" loading="lazy" />
      </div>
    </div>
    <h3 className="font-bold text-base md:text-lg">Continuous Feedback</h3>
    <p className="text-xs md:text-sm lg:text-md">Ongoing updates and strategies to help you track progress, refine approaches, and celebrate milestones with your child’s development.</p>
  </div>

</div>

   
      {/* Buttons Container */}
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-[80px] mt-8">
        <div
          onClick={() => handleCardClick(700)}
          className="px-4 w-full md:w-auto text-[#F6E8FB] py-2 rounded-full text-sm md:text-base lg:text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#B7407D] transition-colors border border-[#9C00AD]"
        >
          <span>Take the assessment</span>
          <div className="w-[1.5rem] sm:w-[2rem] text-white flex justify-center items-center h-[1.5rem] sm:h-[2rem] rounded-full bg-[#B740A1]">
            <GoArrowUpRight />
          </div>
        </div>
        
        <button
          onClick={handleGift}
          className="px-4 w-full md:w-auto text-[#F6E8FB] py-2 rounded-full text-sm md:text-base lg:text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#B7407D] transition-colors border border-[#9C00AD]"
        >
          <span>Share the assessment</span>
          <div className="w-[1.5rem] sm:w-[2rem] text-white flex justify-center items-center h-[1.5rem] sm:h-[2rem] rounded-full bg-[#B740A1]">
            <FaShareAlt />
          </div>
        </button>
      </div>


              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChoosePlan;
