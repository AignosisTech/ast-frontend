import React from 'react';
import { FaTwitter, FaDiscord, FaMedium, FaBlog, FaLock, FaFileAlt, FaMoneyBillAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer text-white">
            <div className='w-full h-auto bg-[#731762] flex flex-col items-center p-6 md:p-12'>
                <h1 className='text-lg md:text-xl lg:text-2xl tracking-wide uppercase font-montserrat mt-4 md:mt-6 lg:mt-8'>
                    Get in Touch or Visit Us
                </h1>
                <h1 className='text-sm md:text-base lg:text-lg mt-4 text-center px-4 lg:px-0'>
                    Stay connected with us! Follow us for the latest updates, news, and insights. We’d love to engage with you online!
                </h1>
                <div className='flex justify-center max-sm:gap-[3vw] gap-8 md:gap-10 mt-6 md:mt-8 items-center'>
                    {/* Group icon and text together */}
                    {/* <div className="flex flex-col items-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
                            <FaTwitter />
                        </div>
                        <h1 className="text-sm md:text-base mt-2">Twitter</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
                            <FaDiscord />
                        </div>
                        <h1 className="text-sm md:text-base mt-2">Discord</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
                            <FaMedium />
                        </div>
                        <h1 className="text-sm md:text-base mt-2">Medium</h1>
                    </div> */}
                    <Link to='/BlogPages' className="flex flex-col items-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
                            <FaBlog />
                        </div>
                        <h1 className="text-sm md:text-base mt-2 text-white" style={{ textDecoration: "none" }}>Blog</h1>
                    </Link>
                    <Link to='/privacy' className="flex flex-col items-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
                            <FaLock />
                        </div>
                        <h1 className="text-sm md:text-base mt-2 text-white" style={{ textDecoration: "none" }}>Privacy Policy</h1>
                    </Link>
                    
                    <Link to='/terms' className="flex flex-col items-center">
  <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
    <FaFileAlt />
  </div>
  <h1 className="text-sm md:text-base mt-2 text-white" style={{ textDecoration: "none" }}>Terms & Conditions</h1>
</Link>
<Link to='/refundandreschedule' className="flex flex-col items-center">
  <div className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl rounded-full text-[#731762] bg-[#2d153f] flex justify-center items-center">
    <FaMoneyBillAlt />
  </div>
  <h1 className="text-sm md:text-base mt-2 text-white" style={{ textDecoration: "none" }}>Refund & Reschedule</h1>
</Link>

 


                </div>
            </div>
        </div>
    );
}

export default Footer;
