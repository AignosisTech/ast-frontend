import React, { useState, useEffect } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import HeroSection from './InnerPages/HeroSection';
import Header from './Header';

const Homepage = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setShowNavbar(false);
            } else {
                // Scrolling up
                setShowNavbar(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Navbar */}
            {/* <div
                className={`text-white w-full font-montserrat fixed top-0 z-10 transition-transform duration-300 ${
                    showNavbar ? 'translate-y-0 backdrop-blur-md bg-opacity-60' : '-translate-y-full'
                } `}
            >
                <div className="navbar text-center w-full flex justify-between items-center px-5 py-3">
                    <div className="relative justify-center items-center inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg" ></div>
                        <Link to="/" className="relative md:text-xl 2xl:text-3xl font-semibold tracking-wide text-white z-10">
                            Ai.gnosis
                        </Link>
                    </div>
                    <div className='flex h-full justify-center 2xl:text-base md:text-xs font-medium items-center md:gap-[4rem] 2xl:gap-[8rem]'>
                        <Link to="/servicepage1">Services</Link>
                        <Link to="/aboutus">About</Link>
                        <Link to="/prices">Prices</Link>
                        <Link
                            to="/test/fillup"
                            className='2xl:w-[18rem] md:w-[14rem] gap-3 rounded-full flex justify-center cursor-pointer items-center text-[#0D0C0A] md:h-[3rem] 2xl:h-[3.5rem] bg-white group hover:bg-[#B7407D] hover:text-white transition-colors duration-300'
                        >
                            <span>Book an appointment</span>
                            <div className='2xl:w-[2.5rem] md:w-[2rem] md:h-[2rem] text-white group-hover:text-black text-xl flex justify-center items-center 2xl:h-[2.5rem] rounded-full bg-[#B740A1] group-hover:bg-white'>
                                <GoArrowUpRight />
                            </div>
                        </Link>
                    </div>
                </div>
            </div> */}
            <Header />
            {/* Hero Section */}
            <HeroSection />
        </>
    );
}

export default Homepage;
