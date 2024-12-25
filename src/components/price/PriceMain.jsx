import React from 'react'
import ChoosePlan from './ChoosePlan'
import Advantages from './Advantages'
import Faq from './Faq'
import Header from '../Header'
import Footer from '../Footer'
import ContactPage from '../ContactPage'


const PriceMain = () => {
  return (
    <>
    <div className='bg-[#1A0C25]'>
        <Header/>
        <ChoosePlan />
        <Advantages />
        <Faq />
        <ContactPage />
        <Footer/>
        </div>
    </>
  )
}

export default PriceMain
