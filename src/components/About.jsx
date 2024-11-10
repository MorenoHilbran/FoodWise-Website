import React from 'react'
import Doctor2 from '../assets/doctor.png'

const About = () => {
    return (
        <section className='flex'>

        <div className='w-1/2 h-auto m-auto'>
            <img src={Doctor2} className='h-3/4 w-auto ml-28 ' />
        </div>

        <div className='w-1/2 text-left m-auto p-28'>
            <h2 className='font-light text-xl'>
            TENTANG KAMI
            </h2>
            <h3 className='text-6xl text-teal-400 font-bold mb-4 mt-4'>
            Foodwise
            </h3>
            <p className='text-lg mt-6 text-black'>
            Meningkatkan kesadaran masyarakat 
            Indonesia terhadap <br/>isu food 
            waste dan membantu mengubah perilaku konsumsi <br/>
            makanan yang berlebihan. FoodWise hadir 
            dengan solusi yang menggabungkan 
            teknologi dan pendekatan edukatif untuk <br/>
            mengurangi dampak buruk dari food waste 
            terhadap <br/>lingkungan dan perekonomian.
            </p>
        </div>
        </section>
    );
    };

    export default About;