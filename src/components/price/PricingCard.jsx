// PricingCard.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import popularImage from "../../assets/popular.png";
const PricingCard = ({ discount, price, originalPrice, validity, sessions, savings, background, isPopular }) =>{

  const Navigate=useNavigate();
  const handleCardClick = (price) => {
    Navigate("/payment", { state: { selectedPrice: price } }); // Pass price to Payment page
  };
  return (
    <div>
  <div className={`w-[320px] h-[400px] rounded-3xl p-8 flex flex-col justify-between items-center text-white relative ${background}`}>
    {isPopular && (
      <img src={popularImage} alt="Popular" className="absolute top-0 left-0 w-17 h-16" loading="lazy" />
    )}
    <div className="self-start px-4 py-2 rounded-2xl bg-[#B7407D54] text-xs font-semibold border border-[#B740A1]">
      {discount}
    </div>
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-2">₹{price}</h2>
      <span className="text-sm font-normal text-gray-400">(originally ₹{originalPrice})</span>
    </div>
    <div className="space-y-2 text-center text-md">
      <p>{validity}</p>
      <p>{sessions}</p>
      <p className="text-green-400 font-semibold">{savings}</p>
    </div>
    <div  onClick={() => handleCardClick(Number(price))} className="px-2 cursor-pointer w-auto md:h-[2.5rem] text-[#F6E8FB] py-4 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-[#B7407D] transition-colors border border-[#9C00AD]">
      <span>Click to proceed</span>
      <div className="w-[2rem] text-white flex justify-center items-center h-[2rem] rounded-full bg-[#B740A1] group-hover:bg-white">
        <GoArrowUpRight />
      </div>
    </div>
  </div>
  </div>
);
}

export default PricingCard;
