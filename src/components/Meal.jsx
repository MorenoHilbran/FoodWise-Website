import React from 'react';

const Meal = ({ title, calorie }) => (
  <div className="flex gap-2">
    <div className="bg-teal-400 w-[900px] p-2 font-bold text-white rounded-xl">
      <h1>{title}</h1>
    </div>
    <div className="bg-red-500 p-2 w-[445px] font-medium text-white rounded-xl">
      <h1>{calorie}</h1>
    </div>
  </div>
);

export default Meal;