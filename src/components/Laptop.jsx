import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
// import frameImg from '../assets/images/pcvideo.svg'; // Update the path as per your project structure
// import aivideo from '../assets/video/Aignosis_Product_intro.mp4'; // Update the path as per your project structure

const Laptop = () => {
    return (
        <div className="landing_sec mb-4 2xl:mb-24">
             
            <div className="lan_sec_bottom 2xl:mt-[130px] md:mt-[100px] relative text-center">
                {/* Main video */}
                <video
                    loop
                    autoPlay controls muted
                    
  
                    className="border-[26px] border-[#a19e9e6e] rounded-[22px] w-[80%] mx-auto"
                >
                    <source src='https://firebasestorage.googleapis.com/v0/b/wedmonkey-d6e0e.appspot.com/o/Aignosis_Product_intro%20(1).mp4?alt=media&token=d9c52a79-1717-4cab-906b-4f475dfe0a4b' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Decorative circles */}
                <div className="absolute top-[8px] left-1/2 w-[10px] h-[10px] rounded-full bg-[#252525] transform -translate-x-1/2 z-10"></div>
                <div className="absolute top-[11px] left-1/2 w-[6px] h-[6px] rounded-full bg-[#252525] transform translate-x-[calc(100%_+_5px)] z-10"></div>

                {/* Blur effect */}
                <div className="absolute inset-0 bg-[#B740A1] w-[15vw] sm:w-[10vw] h-[15vw] sm:h-[10vw] bottom-0 left-0 top-[90%] opacity-65 blur-[120px] rounded-xl"></div>
            </div>
        </div>
    );
};

export default Laptop;
