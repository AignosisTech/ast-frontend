import React, { useEffect } from 'react'
import Homepage from './Homepage'
import Laptop from './Laptop'
import Screen3 from './Screen3'
import Screen4 from './Screen4'
import Screen5 from './Screen5'
import MainComponent from './MainComponent'
import Footer from './Footer'
import PartnershipPage from './PartnershipPage'
import ContactPage from './ContactPage'
import WhatsAppButton from './WhatsAppButton'
import { useLocation } from 'react-router-dom'
const HomepageMain = () => {


  const location = useLocation();

  useEffect(() => {
    // Check if the navigation state includes scrollToContact
    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);
  return (
    <div className='bg-[#1A0C25]'>
    
      <Homepage />
      <Laptop />
      <WhatsAppButton />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <MainComponent />
      <PartnershipPage/>
      <ContactPage/>
      <Footer/>
      
    </div>
  )
}

export default HomepageMain