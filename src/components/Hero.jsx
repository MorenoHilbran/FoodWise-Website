import React from 'react';
import Doctor from '../assets/doctor2.png';

const Hero = () => {
    return (
        <section className='flex max-w-screen'>
            <div className='w-3/4 m-auto h-auto ml-28'>
                <p className='font-light text-black text-3xl mb-5'>Mari, untuk hidup sehat</p>
                <h1 className='text-7xl font-bold'>
                    <span className='text-teal-500 font-bold mb-4 block'>Solusi Hidup Sehat</span> 
                    <span className='text-black font-semibold mb-4 block'>Dengan Makanan </span> 
                    <span className='text-black font-semibold mb-4 block'>Sehat & Bergizi</span>
                </h1>
                <p className='text-2xl text-black mt-5'>Pengukuran index kalori untuk<br/> <span className='text-teal-500'><b>merekomendasikan makanan</b></span> yang tepat!</p>
            </div>
        
            <div className='items-center w-3/4 m-auto mr-16 pr-50 animate-floatimage'>
                <img src={Doctor} alt='dokter' className='size-fit' />
            </div>
        </section>
    );
};

export default Hero;
