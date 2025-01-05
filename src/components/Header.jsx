import React, { useEffect, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isHovered, setIsHovered] = useState(false);
  const [selectedService, setSelectedService] = useState(''); // Renamed state variable

  const [isMenuVisible, setIsMenuVisible] = useState(true); // Menu visibility
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // Services dropdown visibility
  const [currentActiveLink, setCurrentActiveLink] = useState("/");

  const navigate = useNavigate();

  const handleNavigate = () => {
    // Navigate to home with state to trigger scrolling
    navigate('/', { state: { scrollToContact: true } });
  };
  

  const handleServiceClick = (link) => {
    setActiveLink(link);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); // Close dropdown if main menu is toggled
  };
  
 const location=useLocation()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

   // Update activeLink when the location changes
   useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="text-white w-full bg-[#1A0C25] 2xl:h-[4vw] md:h-[6vw] font-montserrat fixed top-0 z-20 transition-transform duration-300 translate-y-0 backdrop-blur-md bg-opacity-60">
      <div className="navbar text-center w-full flex justify-between items-center px-[5vw] md:py-[14px] 2xl:py-[10px]">
        
        {/* Logo Section */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
          <Link to="/" onClick={() => handleLinkClick('/')} className="relative md:text-xl 2xl:text-3xl ml-5 font-semibold tracking-wide text-white z-10">
            Ai.gnosis
          </Link>
        </div>
        
        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex justify-center font-medium items-center gap-[8rem]">
         
        <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to=""
        onClick={() => handleServiceClick('/service1')} // Updated function name
        className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${selectedService === '/service1' ? 'border-b-2 border-white' : ''}`} // Updated condition
        style={{ textDecoration: "none" }}
      >
        Services
      </Link>

      {/* Dropdown menu */}
      {isHovered && (
  <div className="absolute text-white p-2 rounded-lg shadow-lg top-[70%]  -left-[8vw] w-[22vw] z-10 mt-2 transition-all duration-200 ease-in-out" style={{ 
    background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, #300834 100%)', 
    
    padding: '1rem 0',
    
    borderRadius: '8px'
  }}>
    <ul className="space-y-2 flex flex-col justify-center items-center">
  <li>
    <Link 
      to="/service1" 
      onClick={() => handleServiceClick('/service1')}
      className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1] text-white transition duration-200 ${
        activeLink === '/service1' ? 'text-[#B740A1]' : ''
      }`}
      style={{ textDecoration: "none" }}
      aria-label="Service 1"
    >
      Assessments & Evaluation
    </Link>
  </li>
  <li>
    <Link 
      to="/service2" 
      onClick={() => handleServiceClick('/service2')}
      className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1] text-white transition duration-200 ${
        activeLink === '/service2' ? 'text-[#B740A1]' : ''
      }`}
      style={{ textDecoration: "none" }}
      aria-label="Service 2"
    >
      Speech & Language
    </Link>
  </li>
  <li>
    <Link 
      to="/service3" 
      onClick={() => handleServiceClick('/service3')}
      className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1] text-white  transition duration-200 ${
        activeLink === '/service3' ? 'text-[#B740A1]' : ''
      }`}
      style={{ textDecoration: "none" }}
      aria-label="Service 3"
    >
      Behaviour Therapy
    </Link>
  </li>
  <li>
    <Link 
      to="/service4" 
      onClick={() => handleServiceClick('/service4')}
      className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1] text-white  transition duration-200 ${
        activeLink === '/service4' ? 'text-[#B740A1]' : ''
      }`}
      style={{ textDecoration: "none" }}
      aria-label="Service 4"
    >
      Occupational Therapy
    </Link>
  </li>
  <li>
    <Link 
      to="/service5" 
      onClick={() => handleServiceClick('/service5')}
      className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1] text-white transition duration-200 ${
        activeLink === '/service5' ? 'text-[#B740A1]' : ''
      }`}
      style={{ textDecoration: "none" }}
      aria-label="Service 5"
    >
      Special Education
    </Link>
  </li>
</ul>

  </div>

)}

    </div>
          <Link 
            to="/aboutus" 
            onClick={() => handleLinkClick('/aboutus')}
            className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${activeLink === '/aboutus' ? 'border-b-2 border-white' : ''}`}
            style={{ textDecoration: "none" }}
          >
            About Us
          </Link>
          <Link 
            to="/prices" 
            onClick={() => handleLinkClick('/prices')}
            className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${activeLink === '/prices' ? 'border-b-2 border-white' : ''}`}
            style={{ textDecoration: "none" }}
          >
            Prices
          </Link>
          <Link 
            to="/BlogPages" 
            onClick={() => handleLinkClick('/prices')}
            className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${activeLink === '/BlogPages' ? 'border-b-2 border-white' : ''}`}
            style={{ textDecoration: "none" }}
          >
            Blogs
          </Link>
          <div
     onClick={handleNavigate}
  className="2xl:w-[17rem] md:w-[14rem] gap-3 rounded-full flex justify-center cursor-pointer items-center text-[#0D0C0A] md:h-[3rem] 2xl:h-[3.5rem] bg-white group hover:bg-[#B7407D] hover:text-white transition-colors duration-300"
>
  <span className="2xl:text-base md:text-sm">Book an appointment</span>
  <div className="2xl:w-[2.5rem] md:w-[2rem] md:h-[2rem] text-white group-hover:text-black text-xl flex justify-center items-center 2xl:h-[2.5rem] rounded-full bg-[#B740A1] group-hover:bg-white">
    <GoArrowUpRight />
  </div>
</div>


        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden items-center">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen&& (
        <div className="flex justify-center items-center">
          <div
            className="md:hidden flex flex-col mt-2 pb-4"
            style={{
              background:
                "radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, #300834 100%)",
              width: "80%",
              borderRadius: "8px",
              padding: "1.5rem",
            }}
          >
            {/* HOME Link */}
            <Link
              to="/"
              
              className={`text-sm font-raleway text-[#F6E8FB] mt-2 border-b-2 p-2 border-[#952981] `}
            >
              HOME
            </Link>

            {/* SERVICES Dropdown */}
            <div className="flex flex-col mt-2">
              <div
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
                className="cursor-pointer  text-sm font-raleway text-[#F6E8FB] flex justify-between items-center"
              >
                SERVICES
                <span>{isServicesDropdownOpen ? "▾" : "▸"}</span>
              </div>
              {isServicesDropdownOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <Link
                    to="/service1"
                    
                    className="text-sm text-[#F6E8FB] hover:text-[#B740A1] text-white"
                  >
                    Assessments & Evaluation
                  </Link>
                  <Link
                    to="/service2"
                    
                    className="text-sm text-[#F6E8FB] hover:text-[#B740A1] text-white"
                  >
                    Speech & Language
                  </Link>
                  <Link
                    to="/service3"
                    
                    className="text-sm text-[#F6E8FB] hover:text-[#B740A1] text-white"
                  >
                    Behaviour Therapy
                  </Link>
                  <Link
                    to="/service4"
                    
                    className="text-sm text-[#F6E8FB] hover:text-[#B740A1] text-white"
                  >
                    Occupational Therapy
                  </Link>
                  <Link
                    to="/service5"
                    
                    className="text-sm text-[#F6E8FB] hover:text-[#B740A1] text-white"
                  >
                    Special Education
                  </Link>
                </div>
              )}
              <p className=' border-b-2 p-2 border-[#952981]'></p>
            </div>

            {/* ABOUT Link */}
            <Link
              to="/aboutus"
              
              className={`text-sm font-raleway text-[#F6E8FB] mt-4  border-b-2 p-2 border-[#952981]`}
            >
              ABOUT
            </Link>
            <Link
              to="/prices"
              
              className={`text-sm font-raleway text-[#F6E8FB] mt-4  border-b-2 p-2 border-[#952981]`}
            >
              Prices
            </Link>
            {/* BLOGS Link */}
            <Link
              to="/BlogPages"
              
              className={`text-sm font-raleway text-[#F6E8FB] mt-4  border-b-2 p-2 border-[#952981]`}
            >
              BLOGS
            </Link>

            {/* Book Appointment Button */}
            <div
               onClick={handleNavigate}
             
              className="w-full mt-6 flex justify-center items-center gap-2 rounded-full cursor-pointer h-[2.5rem] bg-white group hover:bg-[#B7407D] hover:text-white transition-colors duration-300"
            >
              <span className="text-sm text-center text-[#0D0C0A] group-hover:text-white">
                Book an appointment
              </span>
              <div className="w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-[#B740A1] text-white group-hover:bg-white group-hover:text-black">
                <GoArrowUpRight />
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Header;
