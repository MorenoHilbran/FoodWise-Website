import React from 'react'
import Row from '../assets/Row.png'
import Row2 from '../assets/Row2.png'

const Pickup = () => {
    return (
    <section>
        <h2 className='text-teal-400 font-bold text-3xl text-center p-5 mt-20'>PICKUP FOOD WASTE SERVICES</h2>
        <div className='p-32'>
        <img src={Row} alt='Row.png' className='w-full'/>
        <img src={Row2} alt='Row2.png' className='w-full'/>
        </div>
    </section>
    )
}

export default Pickup;
