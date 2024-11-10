import React from 'react';
import carbo from '../assets/carbo.png';  
// import fat from '../assets/fat.png';
import protein from '../assets/protein.png';



const Food = ({ image, food, detail, amntFat, amntCarbo, amntProtein}) => {
  return (
    <div className="bg-[#F7FFFE] rounded-lg h-40 items-center justify-around my-5 w-[660px] mb-5 hover:scale-105 transition-transform duration-300 ">
      
      <div className='flex gap-5 my-3 ml-10'>
        <div className=" flex items-center mt-5">
          <img src={image} className="h-20 w-auto rounded-lg" alt={food} />
        </div>
        <div className=" my-3 text-left mt-8">
          <h2 className="font-bold text-lg">{food}</h2>
          <p className="text-sm">{detail}</p>
        </div>
        <span className="text-3xl p-4 mt-3">+</span>
      </div>
     

      <div className='flex gap-6 justify-center mt-2 '>
        <img src={carbo} className='w-5 h-5' />
        <p className="text-sm">{amntFat} Lemak</p>

        <img src={carbo} className='w-5 h-5'/>
        <p className="text-sm">{amntCarbo} Karbohidrat</p>
        
        <img src={protein} className='w-5 h-5'/>
        <p className="text-sm">{amntProtein} Protein</p>
      </div>
    </div>
  );
};

export default Food;