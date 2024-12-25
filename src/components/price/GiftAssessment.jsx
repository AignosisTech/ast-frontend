import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const GiftAssessment = () => {
  return (
    <div>
        <div className=" flex flex-col items-center gap-5 bg-[#1A0C25]  min-h-screen text-white">
 {/* Header Section */}
 

      <div className="w-[40vw] max-sm:w-[80vw]   mt-8 p-10 bg-[#9C00AD08] border border-[#B740A180] rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-[#ECECEC] text-center">Sender's Details</h3>
        <input type="text" placeholder="Name" className="w-full mb-3 p-2 rounded bg-[#2521276B]" />
        <input type="email" placeholder="Email" className="w-full mb-3 p-2 rounded bg-[#2521276B]" />
        <input type="tel" placeholder="Phone number" className="w-full mb-3 p-2 rounded bg-[#2521276B]" />
        <div className="flex items-center justify-center">
          <input type="checkbox" className="mr-2 rounded-full" />
          <label>Save my details</label>
        </div>
      </div>

      <div className="w-[40vw]  max-sm:w-[80vw]  p-6 bg-[#9C00AD08] border border-[#B740A180] rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-center">Receiver's Details</h3>
        <input type="text" placeholder="Name" className="w-full mb-3 p-2 rounded bg-[#2521276B]" />
        <input type="email" placeholder="Email" className="w-full mb-3 p-2 rounded bg-[#2521276B]" />
        <input type="tel" placeholder="Phone number" className="w-full mb-3 p-2 rounded bg-[#2521276B]" />
        <div className="flex space-x-2">
          <input type="text" placeholder="Area/City" className="w-full mb-3 p-2 rounded bg-[#2521276B]" />
          <input type="text" placeholder="State" className="w-full mb-3 p-2 rounded bg-[#2521276B]" />
        </div>
        <div className="flex items-center m-2">
          <input type="checkbox" className="mr-2 bg-[#2521276B]"  />
          <label>Add your name</label>
        </div>
        <input type="date" className="w-full mb-3 p-2 rounded bg-[#2521276B]" />
        <textarea placeholder="Your Message" className="w-full mb-3 p-2 rounded bg-[#2521276B]"></textarea>
        <div className='flex justify-center items-center'>
        <Link to="/payment" className="px-2 w-auto md:h-[2.5rem] text-[#F6E8FB]  py-4 max-sm:px-1 max-sm:py-0 rounded-full text-lg max-sm:text-sm  font-semibold flex items-center space-x-2 hover:bg-[#B7407D] transition-colors border border-[#9C00AD]">
              <span>Click to proceed</span>
              <div className="w-[2rem] text-white group-hover:text-black text-lg flex justify-center items-center h-[2rem] rounded-full bg-[#B740A1] group-hover:bg-white  ">
              <GoArrowUpRight />
            </div>
            </Link>
        </div>
      
      </div>
    </div>
    </div>
  )
}

export default GiftAssessment
