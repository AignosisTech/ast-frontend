import React, { useEffect } from "react";
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger separately
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // Register both plugins

const HeroSection = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        let heroElements = [];

        const applyAnimations = () => {
            if (window.innerWidth >= 768) {
                // Animations for larger screens (Laptop/Tablet)
                heroElements = [
                    { id: "#bgvdo", x: '0', y: "0", scale: 0.5, start: "top=40px bottom+=100px", duration: 2, scrub: true },
                    { id: "#textright", x: '-20vw', y: '0px', start: "top=50px bottom+=100px", duration: 2 },
                    { id: "#textleft", x: '20vw', y: '0px', start: "top=50px bottom+=100px", duration: 2 },
                ];
            } else {
                // Animations for smaller screens (Mobile)
                heroElements = [
                    { id: "#bgvdo", x: '0', y: "0", scale: 0.7, start: "top=0px bottom=0px" }, // Slightly larger scale for mobile
                    { id: "#textright", x: '-10vw', y: '0px', start: "top=50px bottom=0px" },  // Adjust positioning for smaller screens
                    { id: "#textleft", x: '10vw', y: '0px', start: "top=50px bottom=0px" },
                ];
            }

            heroElements.forEach(({ id, x, y, scale, start }) => {
                gsap.to(id, {
                    x,
                    y,
                    scale,
                    scrollTrigger: {
                        trigger: ".body",
                        start,
                        end: "bottom center",
                        scrub: true,
                        toggleActions: "restart none none none none",
                    },
                });
            });
        };

        // Check for the screen width and apply animations accordingly
        const handleResize = () => {
            applyAnimations();
        };

        // Initial check on component mount
        handleResize();

        // Attach event listener for future changes in screen width
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="body w-full h-screen relative flex-col flex justify-center items-center">
            <video id='bgvdo'
                loop
                autoPlay
                muted  src='https://firebasestorage.googleapis.com/v0/b/wedmonkey-d6e0e.appspot.com/o/hero%20section.mp4?alt=media&token=06672c0e-6f06-4f5f-b3bf-94d221392c97' alt="" className='w-full h-screen opacity-90 relative object-cover' />
            <div className='w-full h-full absolute flex-col flex justify-center items-center'>
                <div className="w-full overflow-hidden">
                    <h1 className="flex justify-center text-center text-fuchsia-50 tracking-tight max-sm:text-lg text-6xl font-semibold ">
                        <span id='textright' className="block"> Frontier AI for Your Child’s</span>
                        
                        <span id='textleft' className="  block">&nbsp; Best Development </span>
                    </h1>
                </div>
                <Link to="/BlogPages" className='w-[14rem] cursor-pointer mt-[5rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B740A1] transition-colors duration-300'>
                    <span className='text-white'>Learn more</span>
                    <div className='w-[2.5rem] h-[2.5rem] justify-center flex items-center text-white text-xl group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1]'>
                        <GoArrowUpRight />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection;
