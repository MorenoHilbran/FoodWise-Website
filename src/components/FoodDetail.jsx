import React from 'react';

const FoodDetail = ({ headline, description }) => {
  return (
    <div className="p-10 bg-[#F7FFFE] mt-5 rounded-lg mb-5 hover:scale-105 transition-transform duration-300 h-[472px]">
      <h2 className="font-bold text-2xl text-center mt-[13px]">{headline}</h2>
      <p className="text-justify text-[20px] mt-8">{description}</p>
    </div>
  );
};

export default FoodDetail;