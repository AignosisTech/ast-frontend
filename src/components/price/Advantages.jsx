import React from 'react'
import crossIcon from '../../assets/cross.png';
const Advantages = () => {
  return (
    <div className='bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center p-6'>
      <div className="flex flex-row items-center space-x-4 mb-8">
        <span
          className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
          style={{
            background:
              "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
          }}
        ></span>
        <span className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-sm">Choose A Plan</span>
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
        <h1 className="font-manrope text-[#F6E8FB] text-[40px] font-bold">
          Why Choose Ai.gnosis?
        </h1>
        <p className="text-[#ECECEC] text-md">
          Ai.gnosis combines technology and care to provide accurate assessments and personalized <br /> support for your child’s growth.
        </p>
      </div>
      <div className="bg-[#564A5957] rounded-3xl p-6 w-[700px] max-sm:w-auto mx-auto mt-10 font-raleway">
        <table className="w-full text-left text-gray-200">
          <thead>
            <tr>
              <th className="pb-4 text-lg"> </th>
              <th className="pb-4 text-lg text-center border-r border-[#F6E8FB80]">Online</th> {/* Added border here */}
              <th className="pb-4 text-lg text-center">Offline</th>
            </tr>
          </thead>
          <tbody>
            {[
              "Effortless scheduling",
              "Access global specialists from anywhere",
              "Select your preferred time and language",
              "Save on travel costs and time",
              "Get online reports, resources, and parent guidance",
              "Simple renewal process",
            ].map((feature, index) => (
              <tr key={index} className="border-t border-[#F6E8FB80]">
                <td className="py-3">{feature}</td>
                <td className="py-3 text-center border-r border-[#F6E8FB80]">✅</td> {/* Added border here */}
                <td className="py-3 text-center">
                  <img src={crossIcon} alt="Cross Icon" className="w-4 h-4 mx-auto" loading="lazy" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



    </div>
  )
}

export default Advantages
