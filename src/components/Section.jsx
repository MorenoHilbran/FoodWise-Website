import React from 'react'
import Doctor2 from '../assets/doctor.png'

const Section = ({image, judul, title, description}) => {
    return (
        <section className='flex max-w-screen'>

        <div className='w-1/2 h-auto m-auto w-[690px]'>
            <img src={image} className='h-3/4 w-auto ml-28 ' />
        </div>

        <div className='w-1/2 text-left p-28 m-auto'>
            <h2 className='font-light text-xl text-black'>
            {judul}
            </h2>
            <h3 className='text-6xl text-teal-400 font-bold mb-4 mt-4'>
            {title}
            </h3>
            <p className='text-lg mt-6 text-black'>
            {description}
            </p>
        </div>
        </section>
    );
    };

    export default Section;