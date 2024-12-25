import React from 'react'

const PlanHeading = () => {
  return (
    <div className='bg-[#1A0C25]  flex flex-col justify-center items-center p-6 '>
     
    {/* Header Section */}
    <div className="flex flex-row 2xl:mt-[4vw] mt-[6vw] max-sm:mt-[15vw] items-center space-x-4 mb-8">
        <span
          className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
          style={{
            background:
              "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
          }}
        ></span>
        <span className="text-[24px]  text-[#F1C6FE] font-medium max-sm:text-sm">Choose A Plan</span>
        <span
  className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
  style={{
    background:
      "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
  }}
></span>

      </div>

      {/* Title and Description */}
      <div className="flex flex-col items-center gap-4 text-center mb-10 px-6">
        <h1 className="font-raleway text-[#F6E8FB] text-[40px] max-sm:text-[20px] font-bold">
          Select Perfect Plan For Your Child's Needs
        </h1>
        <p className="text-[#ECECEC] text-md max-sm:text-sm">
          Find the ideal support plan tailored to your child’s unique journey. Our options are designed to provide targeted guidance, <br />
          whether for developmental assessments, therapy, or academic support, ensuring a comprehensive
          approach to their growth <br />and success.
        </p>


        <div className="w-[40vw] max-sm:w-[55vw] max-sm:text-sm h-auto bg-[#9C00AD08] border border-[#B740A180] p-3 rounded-xl">
         <p className="text-[#F6E8FB] font-raleway text-center italic">"Looking to support another child’s journey? You can also gift this assessment, offering meaningful support and valuable insights to families navigating similar paths."</p>

       </div>

      </div>
   
       



    </div>
  )
}

export default PlanHeading
