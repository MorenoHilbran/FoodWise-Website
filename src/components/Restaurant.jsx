import React from 'react'
import Fedwell from '../assets/Fedwell.png'
import Burgreens from '../assets/Burgreens.png'
import Saladstop from '../assets/Saladstop.png'

const Restaurant = ({ onRestaurantClick }) => {
    return (
        <section>
            <h2 className='text-3xl text-teal-400 font-semibold text-center p-5'>Restaurant Recomendation</h2>

            <div className='flex mb-20'>
                <div>
                    <img src={Fedwell} alt='Fedwell.png' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 ...' />
                    <div className='flex justify-between p-4'>
                        <h2 className='text-left text-2xl'>Fed Well Restaurant</h2>
                        <div className='ml-4 bg-yellow-400 text-white font-semibold px-2 py-1 rounded-lg'> 4.5 ★</div>
                    </div>
                    <button onClick={() => onRestaurantClick('Fedwell')} className='bg-teal-400 rounded-xl px-5 py-1 font-semibold text-white mt-2 flex m-auto'>View Details</button>
                </div>

                <div>
                    <img src={Burgreens} alt='Burgreens.png' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 ...' />
                    <div className='flex justify-between p-4'>
                        <h2 className='text-center text-2xl'>Burgreens Restaurant</h2>
                        <div className='ml-4 bg-yellow-400 text-white font-semibold px-2 py-1 rounded-lg'> 4.5 ★</div>
                    </div>
                    <button onClick={() => onRestaurantClick('Burgreens')} className='bg-teal-400 rounded-xl px-5 py-1 font-semibold text-white mt-2 flex m-auto'>View Details</button>
                </div>

                <div>
                    <img src={Saladstop} alt='Saladstop.png' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 ...' />
                    <div className='flex justify-between p-4'>
                        <h2 className='text-center text-2xl'>Saladstop Restaurant</h2>
                        <div className='ml-4 bg-yellow-400 text-white font-semibold px-2 py-1 rounded-lg'> 4.5 ★</div>
                    </div>
                    <button onClick={() => onRestaurantClick('Saladstop')} className='bg-teal-400 rounded-xl px-5 py-1 font-semibold text-white mt-2 flex m-auto'>View Details</button>
                </div>
            </div>
        </section>
    );
};

export default Restaurant;