import React, { useEffect, useRef, useState } from 'react';
import bg1 from '../../assets/images/img2.png';
import bg2 from '../../assets/images/img1.png';

const UnderstandingNumber = () => {
  const [showSecondCard, setShowSecondCard] = useState(false);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        // Scroll down - show the second card
        setShowSecondCard(true);
      } else {
        // Scroll up - hide the second card
        setShowSecondCard(false);
      }
    };

    const handleTouchStart = (event) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      touchEndY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (touchStartY.current - touchEndY.current > 50) {
        // Swipe up - show the second card
        setShowSecondCard(true);
      } else if (touchEndY.current - touchStartY.current > 50) {
        // Swipe down - hide the second card
        setShowSecondCard(false);
      }
    };

    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div
    ref={containerRef}
    className=" 2xl:w-[100%] md:w-[50%] h-[35vw]  flex flex-col justify-center   items-center   overflow-hidden  mb-10 relative max-sm:w-[90vw] max-sm:h-[85vw]"
    style={{
      scrollBehavior: 'smooth',
      overflowY: 'hidden',
      position: 'relative',
    }}
  >
    <div
      
      className="  2xl:w-[60%] md:w-[100%] h-[25vw]  flex flex-col border border-[#B874B540] overflow-hidden rounded-3xl mb-10 relative max-sm:w-[90vw] max-sm:h-[78vw]"
    
    >
       
      {/* First Card */}
      <div
        className={`firstCard flex absolute inset-0 transition-all duration-700 ease-in-out ${
          showSecondCard ? '-translate-y-full z-10' : 'translate-y-0 z-10'
        }`}
        style={{
          background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, rgba(48, 8, 52, 0.6) 100%)',
        }}
      >
        <div className="w-[50%] ml-[5rem] max-sm:ml-[2rem] md:text-3xl 2xl:text-4xl max-sm:text-lg h-full flex flex-col justify-center items-start font-bold">
          <h1 className="text-[#F6E8FB] font-raleway italic">
            <span className="text-[#F6E8FB] italic font-raleway font-semibold text-5xl max-sm:text-2xl">
              1 in 10{' '}
            </span>{' '}
            children experience developmental delays
          </h1>
          <h1 className="font-medium flex gap-4 items-center">
            <span className="w-[2rem] h-[2rem] max-sm:w-[1.5rem] max-sm:h-[1.5rem] rounded-full bg-red-600 text-xs flex justify-center items-center ml-[26vw] max-sm:ml-[30vw]">
              SOS
            </span>
          </h1>
          <h1 className="text-base max-sm:text-sm mt-2 text-[#F6E8FB]">
            Early identification is essential for better support
          </h1>
          <div className="w-[10rem] max-sm:w-[7rem] cursor-pointer group hover:bg-[#B740A1] transition-colors duration-300 mt-[2rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3rem] bg-transparent">
            <a href="" className="text-white text-base max-sm:text-sm">
              Learn more
            </a>
          </div>
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
          <img className="w-[60%] h-[60%] max-sm:w-auto object-cover" src={bg1} alt="Developmental Delays" />
        </div>
      </div>

      {/* Second Card */}
      <div
        className={`secondCard flex absolute inset-0 transition-all duration-700 ease-in-out ${
          showSecondCard ? 'translate-y-0 z-10' : 'translate-y-full z-10'
        }`}
        style={{
          background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, rgba(48, 8, 52, 0.6) 100%)',
        }}
      >
        <div className="w-[50%] ml-[5rem] max-sm:ml-[2rem] text-4xl italic max-sm:text-lg h-full flex flex-col justify-center items-start font-bold">
          <h1 className="text-[#F6E8FB] font-raleway italic">
            <span className="text-[#F6E8FB] italic font-raleway font-semibold text-4xl max-sm:text-2xl">
              1 in 68{' '}
            </span>{' '}
            children are autistic in India
          </h1>
          <h1 className="font-medium flex gap-4 items-center">
            <span className="w-[2rem] h-[2rem] max-sm:w-[1.5rem] max-sm:h-[1.5rem] rounded-full bg-red-600 text-xs flex justify-center items-center ml-[19vw] max-sm:ml-[33vw] ">
              SOS
            </span>
          </h1>
          <h1 className="text-base max-sm:text-sm mt-2 text-[#F6E8FB]">
            Autism awareness and early detection can make a difference.
          </h1>
          <div className="w-[10rem] cursor-pointer max-sm:w-[7rem] group hover:bg-[#B740A1] transition-colors duration-300 mt-[2rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3rem] bg-transparent">
            <a href="" className="text-white text-base max-sm:text-sm">
              Learn more
            </a>
          </div>
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
          <img className="w-[60%] h-[60%] max-sm:w-auto object-cover" src={bg2} alt="Autism Awareness" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default UnderstandingNumber;
