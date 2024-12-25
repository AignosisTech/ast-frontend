import React, { useState } from 'react';
import bg from '../assets/images/poster4.png';
import bg2 from '../assets/images/poster5.png';
import bg3 from '../assets/images/poster6.png';
import bg4 from '../assets/images/poster7.png';
import bg5 from '../assets/images/poster8.png';
import { useSwipeable } from 'react-swipeable';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const Screen5 = () => {
    const slides = [
        {
            subTitle:"3 months old",
            title: "Does NOT follow moving objects with eyes",
            description: "Prolonged screen time can impact social interaction and communication skills, which are crucial in early autism detection. Monitor your child’s screen habits closely.",
            img: bg
        },
        {subTitle:"1 year old",
            title: "Does NOT use gestures like waving or shaking head",
            description: "Prolonged screen time can impact social interaction and communication skills, which are crucial in early autism detection. Monitor your child’s screen habits closely.",
            img: bg2
        },
        {subTitle:"2 Year old",
            title: "Does NOT speak two-word sentences",
            description: "Prolonged screen time can impact social interaction and communication skills, which are crucial in early autism detection. Monitor your child’s screen habits closely.",
            img: bg3
        },
        {subTitle:"3 Year old",
            title: "Has DIFFICULTY manipulating small objects",
            description: "Prolonged screen time can impact social interaction and communication skills, which are crucial in early autism detection. Monitor your child’s screen habits closely.",
            img: bg4
        },
        {subTitle:"4 Year old",
            title: "Has DIFFICULTY scribbling or drawing",
            description: "Prolonged screen time can impact social interaction and communication skills, which are crucial in early autism detection. Monitor your child’s screen habits closely.",
            img: bg5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Swipe Handlers for Mobile
    const handlers = useSwipeable({
        onSwipedLeft: goToNextSlide,
        onSwipedRight: goToPreviousSlide,
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
    });

    const Divider = ({ title }) => (
        <div className="flex flex-row justify-center items-center space-x-4 max-sm:mb-2 max-sm:mt-2 mb-8 mt-10">
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
        <div className='h-screen max-sm:h-auto max-sm:mt-[220px]  text-white flex justify-center items-center w-full font-montserrat bg-[#1A0C25]'>
            <div className="w-full h-full flex justify-center items-center flex-col px-4 md:px-0">

                {/* Header Section */}
                <div className='w-full flex-col md:h-[20vw] justify-center flex items-center mb-10'>
                <Divider title="Recognize the Signs " />

                    <div className="mt-4 mx-sm:[mt-0] md:mt-[0rem] font-manrope">
                        <h1 className='text-2xl 2xl:text-5xl w-full text-center md:text-4xl tracking-tight font-semibold leading-[3rem] text-[#F6E8FB] max-sm:text-center'>Upto 1 in 5 children are at risk of developmental delays*</h1>
                        <h1 className='text-center 2xl:text-5xl text-2xl md:text-4xl italic tracking-tight font-semibold mt-5 max-sm:mt-0 max-sm:mr-[20px] md:leading-[.1rem] 2xl:leading-[3rem] text-[#F6E8FB]'>Is Your Child at Risk?</h1>
                    </div>
                    <div className='px-4 md:px-[10rem] mt-4 md:mt-[2rem] text-sm md:text-base'>
                        <p className='text-center text-[#ECECEC] text-sm 2xl:text-xl md:text-base'>
                            Gain insight into the prevalence of developmental challenges and autism among children. Each data point highlights the urgency of early detection, supporting parents with reliable information to act quickly. Learn more about the numbers that drive our mission.
                        </p>
                    </div>
                </div>

                {/* Slide Section */}
                <div className="w-full 2xl:w-[80%] md:w-[80%] h-auto md:h-[25vw] flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[5rem] "  {...handlers}>
                    <div onClick={goToPreviousSlide} className="cursor-pointer w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] flex justify-center items-center text-base md:text-xl bg-[#382C3E] rounded-full">
                        <GoArrowLeft />
                    </div>

                    <div className='w-[350px] md:w-[80%] h-auto md:h-[25vw] flex overflow-hidden border border-[#B874B540] rounded-3xl'>
                        <div
                            className="flex transition-transform duration-500 ease-in-out "
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="w-full max-sm:w-[100%] flex-shrink-0 flex flex-col md:flex-row">
                                    <div className="w-full 2xl:w-[28vw] max-sm:w-[68%] md:w-[20vw] 2xl:h-full md:h-full flex justify-center items-center">
                                        <img className='w-full max-sm:w-[79%]   h-full object-fit scale-[.7]' src={slide.img} alt={slide.title} loading="lazy" />
                                    </div>
                                    <div className="w-full max-sm:w-[60%] 2xl:w-[20vw] md:w-[28vw] md:py-[2rem] mt-4 md:mt-0 md:ml-[5rem] text-base md:text-4xl flex flex-col justify-center items-start">
                                        <span className="text-[#B7407D] text-sm max-sm:ml-[4vw]">{slide.subTitle}</span>
                                        <h1 className='font-medium w-[full] text-left max-sm:text-center md:text-lg 2xl:text-2xl'>{slide.title}</h1>
                                        <p className='mt-2 text-sm max-sm:text-center  2xl:text-lg md:text-base'>{slide.description}</p>
                                        <div className='w-full max-sm:w-[50%] max-sm:mt-[21px] max-sm:mb-[15px] max-sm:m-[auto] md:w-[10rem] cursor-pointer group hover:bg-[#B740A1] transition-colors duration-300 mt-4 md:mt-[2rem] border-2 border-[#B740A1] rounded-full flex justify-center items-center text-[#0D0C0A] h-[2.5rem] md:h-[3rem] bg-transparent '>
                                            <a href="#" className='text-white text-sm md:text-base'>Learn more</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div onClick={goToNextSlide} className="cursor-pointer w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] flex justify-center items-center text-base md:text-xl bg-[#382C3E] rounded-full">
                        <GoArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screen5;
