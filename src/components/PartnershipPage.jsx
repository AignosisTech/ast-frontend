import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoArrowUpRight } from "react-icons/go";
import brain from '../assets/images/brain.png'
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PartnershipPage = () => {
    const imageRef = useRef(null);
    const cardsRef = useRef([]);
    
    useEffect(() => {
        const isMobile = window.innerWidth <= 768; // Define mobile breakpoint
    const yPosition = isMobile ? 720 : 300;
        // Animate image on scroll
        const imageAnimation = gsap.to(imageRef.current, {
            y: yPosition, // The final position when fully scrolled
            autoAlpha: 5, // Fade in the image
            ease: "none", // No easing, for a direct scroll correlation
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top 35%", // Animation starts when the top of the image reaches 25% of the viewport
                end: "top 60%",
                scrub: 4, // Smooth scrubbing for responsive movement
            }
        });

        // Animate cards on scroll with better timing and effects
        cardsRef.current.forEach((card, index) => {
            const delay = index * 0.1; // Reduced delay for quicker animations
            gsap.fromTo(card,
                { y: 50, autoAlpha: 0 }, // Start cards slightly lower and fully transparent
                {
                    y: 0, // Move to original position
                    autoAlpha: 1,
                    duration: 0.8, // Shorter duration for a snappier feel
                    ease: "back.out(1.7)", // Add a bounce effect for smoother entry
                    delay: delay, // Delay between card animations
                    scrollTrigger: {
                        trigger: card,
                        start: "top 60%", // Start animating when the card is 60% from the top of the viewport
                        toggleActions: "play none none none", // Play animation when entering viewport
                    }
                }
            );
        });

        return () => {
            // Clean up the scroll triggers when the component unmounts
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);


    return (
        <div className='min-h-screen 2xl:px-[8rem] md:px-[4rem] text-white flex flex-col w-full font-montserrat bg-[#1A0C25] '>
            <div className="w-full flex 2xl:px-[2rem] py-[3rem]  flex-col justify-center items-center border-t rounded-[10rem] max-sm:rounded-[5rem] border-[#B874B580] md:mb-10 ">
                <div className='flex flex-col justify-center items-center px-4 md:mb-10'>
                    <div className="flex justify-center gap-5 items-center mb-4">
                        <span
                            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                            style={{
                                background:
                                    "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                            }}
                        ></span>
                        <h1 className="text-[#EDD0E7]">Connect with Sales</h1>
                        <span
                            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                            style={{
                                background:
                                    "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                            }}
                        ></span>
                    </div>
                    <div className="px-4 md:px-[8vw] mb-4 text-center">
                        <h1 className='2xl:text-5xl md:text-3xl tracking-tight font-semibold leading-[3rem]'>
                            If you are a healthcare provider, payor, or caregiver and want to partner with Ai.gnosis, let’s talk!
                        </h1>
                    </div>
                    <div className='px-4 2xl:text-lg md:text-xs md:px-[20vw] text-center'>
                        <p>Emphasis on partnerships within India, focusing on integration with local healthcare.</p>
                    </div>
                </div>

                {/* Partnership Benefits Boxes in 2x2 Grid */}
                <div className='w-full relative max-sm:max-w-[83vw] max-w-[60vw] grid grid-cols-1 md:grid-cols-2 gap-[10vw] justify-center items-center mt-10 px-4 md:px-0 mb-10'>
                    {[{
                        title: "Partnership Benefits Overview",
                        description: "Discover the advantages of collaborating with Ai.gnosis, including enhanced patient care, access to cutting-edge tools, and opportunities for joint research initiatives.",
                    },
                    {
                        title: "Scheduling Options",
                        description: "Schedule a consultation with our sales team directly through our integrated calendar, making it convenient for you to discuss partnership opportunities.",
                    },
                    {
                        title: "Quick Contact Form",
                        description: "Fill up the form, and our team will respond promptly to assist you.",
                    },
                    {
                        title: "Resource Downloads",
                        description: "Access valuable resources, such as brochures and case studies, to learn more about our services and the impact of Ai.gnosis in autism detection.",
                    }].map((item, index) => (
                        <div
                            key={index}
                            className="2xl:p-6 p-4 md:p-[2rem]  2xl:h-[18vw] md:h-[16vw] rounded-3xl w-auto bg-[#1A0C25] bg-gradient-to-b from-[#070B0E] to-[#300834] shadow-lg mb-6"
                            ref={el => cardsRef.current[index] = el} // Store reference to each card
                        >
                            <h1 className="2xl:text-2xl text-lg md:text-lg font-semibold text-white">{item.title}</h1>
                            <p className="mt-2 md:text-xs test-sm 2xl:text-lg text-white p-2 ">{item.description}</p>
                        </div>
                    ))}
                </div>
                 
                {/* Center Image between Boxes */}
                <div className="  flex absolute justify-center  items-center" ref={imageRef}>
                    <img src={brain} alt="Brain Icon" className="2xl:w-[10rem] md:w-[6rem] md:h-[6rem] md:scale-[2.5] 2xl:h-[10rem] 2xl:scale-[2]" loading="lazy" />
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-full flex flex-col md:flex-row 2xl:gap-[15vw] justify-center items-center mt-10 px-4 relative md:gap-16 mb-10">
                <img src={brain} alt="Brain Icon" className="max-sm:hidden w-[50vw] h-[50vw] 2xl:left-[18vw] md:left-[18vw] absolute scale-[2.5] md:w-[10vw] md:h-[10vw] mb-4 md:mb-0" loading="lazy" />
                <div className="w-full md:ml-[38vw] md:w-[40%] px-4">
                    <h1 className="2xl:text-lg md:text-base mb-4 max-sm:text-center">
                        Fill up the form, and our team will respond promptly to assist you.
                    </h1>
                    <form className="space-y-4 md:text-sm 2xl:text-lg">
                        <input type="text" placeholder="Your Name*" className="w-full px-4 py-2 border-2 border-[#B740A1] bg-[#2521276B]  rounded-md" />
                        <input type="email" placeholder="Your Email*" className="w-full px-4 py-2 border-2 border-[#B740A1] bg-[#2521276B]  rounded-md" />
                        <input type="tel" placeholder="Phone number" className="w-full px-4 py-2 border-2 border-[#B740A1] bg-[#2521276B]  rounded-md" />
                        <textarea placeholder="Your Message*" className="w-full h-32 px-4 py-2 border-2 border-[#B740A1] bg-[#2521276B]  rounded-md resize-none"></textarea>
                        <div className=' max-sm:mx-auto 2xl:w-[14rem] md:w-[11rem] w-[8rem] cursor-pointer mt-[1.5rem] border-2 border-[#B740A1] gap-2 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3rem] md:h-[3.5rem] group bg-transparent hover:bg-[#B740A1] transition-colors duration-300'>
    <button type="submit" className='text-white text-sm md:text-base'>Submit</button>
    <div className='2xl:w-[2.5rem] md:w-[2rem] w-[1.8rem] h-[1.8rem] md:h-[2rem] 2xl:h-[2.5rem] justify-center flex items-center text-white text-lg md:text-xl group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1]'>
        <GoArrowUpRight />
    </div>
</div>

                    </form>
                </div>
            </div>

           
            
        </div>
    );
};

export default PartnershipPage;
