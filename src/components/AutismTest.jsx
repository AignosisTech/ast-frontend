import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import bg1 from '../assets/images/Autism/1.png';
import bg2 from '../assets/images/Autism/2.jpg';
import bg3 from '../assets/images/Autism/3.jpg';
import bg4 from '../assets/images/Autism/4.jpg';
import bg5 from '../assets/images/Autism/5.jpg';
import '../index.css';

const AutismTest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepsContent = [
    {
      title: "The Ai.gnosis Autism Test:",
      subtitle: "A quick, accurate, and non-invasive way to screen your child.",
      description: "This enables early detection and helps parents take proactive steps for their child's development.",
      bgColor: "rgba(26, 12, 37, 1)",
      header: "Recognize the Signs",
      ScreenNumber: 1,
      image: bg1,
    },
    {
      title: "Quick Screening Process",
      subtitle: "Step 1",
      description: "The Ai.gnosis Autism Test is designed to be swift and straightforward, allowing parents to complete the screening in just a few minutes.",
      bgColor: "#5E3C69",
      header: "Step 1",
      ScreenNumber: 2,
      image: bg2,
    },
    {
      title: "Accurate Results with AI",
      subtitle: "Step 2",
      description: "Powered by advanced AI, the test delivers reliable results, giving parents confidence in the screening outcomes.",
      bgColor: "#952981",
      header: "Step 2",
      ScreenNumber: 3,
      image: bg3,
    },
    {
      title: "Non-Invasive and Child-Friendly",
      subtitle: "Step 3",
      description: "The test is completely non-invasive, making it comfortable for children. We ensure a stress-free experience throughout the process.",
      bgColor: "#5E3C69",
      header: "Step 3",
      ScreenNumber: 4,
      image: bg4,
    },
    {
      title: "Empowering Early Intervention",
      subtitle: "Step 4",
      description: "Early detection is crucial in supporting your child’s growth. The Aignosis Autism Test empowers parents to take proactive steps.",
      bgColor: "#1A0C25",
      header: "Step 4",
      ScreenNumber: 5,
      image: bg5,
    },
  ];


  const scrollContainerRef = useRef(null);
  const isInitialRender = useRef(true);
  const animatingRef = useRef(false); // To track animation state and avoid overscrolling

  useEffect(() => {
    const handleWheel = (event) => {
      if (animatingRef.current) return; // Prevent scroll if an animation is in progress
      event.preventDefault();
      animatingRef.current = true; // Set animation in progress

      if (event.deltaY > 0) {
        setCurrentStep((prev) => Math.min(prev + 1, stepsContent.length));
      } else {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
      }

      // Allow new scroll only after animation completes
      setTimeout(() => animatingRef.current = false, 800);
    };

    const container = scrollContainerRef.current;
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  useLayoutEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    const section = scrollContainerRef.current.querySelector(`[data-step="${currentStep}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentStep]);
  const Divider = ({ title }) => (
    <div className="flex flex-row justify-center items-center max-sm:mx-auto max-sm:space-x-3 md:space-x-4 mb-8 mt-10">
        <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
                background:
                    "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
        ></span>
        <h1 className="2xl:text-[20px] md:text-sm text-[#F1C6FE] font-medium max-sm:text-sm">
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
      ref={scrollContainerRef}
      className="flex flex-col  snap-y w-full snap-mandatory mt-8 h-screen overflow-hidden"
      style={{ scrollBehavior: "smooth", overflowY: "hidden" }}
    >
      {stepsContent.map((content, index) => (

        <div
          key={index}
          className={`scroll-section flex justify-between min-h-screen snap-start p-8 
            ${index + 1 === currentStep ? "animate-slideUp" : ""}`}
          style={{ background: content.bgColor }}
          data-step={index + 1}
        >

          <div className="relative md:max-w-4xl 2xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-[5vw] max-sm:-gap-[10vw] ">
            {/* Left Side Content */}
            <div className="flex flex-col justify-center pr-[2rem] text-white space-y-4 transition-transform duration-700 transform 
              ${currentStep === index + 1 ? 'translate-y-0' : 'translate-y-10 opacity-0'}">
              <div className="flex items-center md:mr-[2rem]">
                {/* Header Line Decor */}
                <Divider title={content.header} />
              </div>
              <h2 className={`2xl:text-4xl md:text-3xl font-semibold leading-snug ${currentStep === index + 1 ? 'slide-right' : ''}`}
              >
                {content.title}
                <br />
                <span className={`font-light 2xl:text-3xl md:text-2xl italic ${currentStep === index + 1 ? 'slide-right' : ''}`}>{content.subtitle !== content.header ? content.subtitle : ""}</span>
              </h2>
              <p className={`text-gray-300 ${currentStep === index + 1 ? 'slide-right' : ''}`}>{content.description}</p>
              <Link
              onClick={()=>{
                console.log('we are going to take the assessment now')
              }}
                to="/test/fillup"
                className={`px-6 py-2 bg-transparent border border-pink-400 rounded-full text-white hover:bg-[#B7407D] hover:text-white transition w-[206px] ${currentStep === index + 1 ? 'slide-right-fast' : ''}`}
                style={{ textDecoration: "none" }}

              >
                Take Assignment
              </Link>
            </div>

            
            <div className="absolute left-[26vw] top-[15vw] bottom-[15vw] w-[15vw] h-[20vw]  inset-0 bg-[#B740A1] opacity-65 blur-[200px] rounded-lg "></div>
          
          
            {/* Right Side - Image and Indicator Wrapper */}
            <div className="relative flex justify-center md:items-center">
            <img
            src={content.image}
            alt={`Background for step ${content.ScreenNumber}`}
            className="
              md:w-[1101px] w-full h-auto 
              transition-transform duration-700
              transform
              scale-145 
              md:scale-100 
              sm:scale-110 
              ${currentStep === index + 1 ? 'scale-100' : 'scale-105'}
            "
            style={{ transform: currentStep === index + 1 ? "scale(1)" : "scale(1.1)" }} loading="lazy"
          />


              {/* Circle Indicators Container */}
              <div className="  absolute top-1/2 max-sm:-top-[108vw]  max-sm:flex-row transform -translate-y-1/2 right-[-70px] max-sm:right-[10vw] md:space-y-2 max-sm:space-x-1 max-sm:justify-center max-sm:items-center flex flex-col ">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex flex-col max-sm:flex-row items-center">
                    <div
                      onClick={() => setCurrentStep(item)}
                      className={`h-10 w-10 flex items-center justify-center rounded-full text-white font-semibold text-sm cursor-pointer 
                        ${currentStep === item ? "bg-[#952981]" : "bg-transparent border border-[#9C00AD]"}`}
                    >
                      {item}
                    </div>
                    {item === content.ScreenNumber && (
                      <div className="w-1 h-24 max-sm:w-8 max-sm:h-1 bg-[#952981] md:mt-2 max-sm:mx-1"></div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutismTest;
