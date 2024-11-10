import React from 'react';
import stats from '../assets/stats.png';

const Stats = () => {
  return (
    <div>
      <div className="grid grid-cols-8 grid-rows-8 gap-4 p-24">
          <div className="col-span-2 row-span-2 bg-slate-400 h-[200px]">1</div>
          <div className="col-span-2 row-span-2 col-start-3 bg-cyan-500">2</div>
          <div className="col-span-2 row-span-2 col-start-5 bg-red-400">3</div>
          <div className="col-span-3 row-span-3 col-start-1 row-start-3 bg-blue-500">4</div>
          <div className="col-span-3 row-span-3 col-start-4 row-start-3 bg-green-400">5</div>
          <div className="col-span-2 row-span-8 col-start-7 row-start-1 bg-yellow-300">6</div>
          <div className="col-span-6 row-span-3 row-start-6 bg-violet-400">7</div>
      </div>
    </div>
  );
};

export default Stats;
