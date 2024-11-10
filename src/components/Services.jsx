import React from 'react';
import Card from './Card';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';

const Services = () => {
    return (
        <section className="mx-24">
            <h2 className="text-center text-3xl font-semibold text-teal-400 p-8">
                LAYANAN KAMI
            </h2>
            <div className="flex p-5 max-w-screen">
                <Card 
                    image={service1}
                    title="Calories Counter"
                    description="We Calculate your BMI Index from data like age, height and weight"
                />
                <Card 
                    image={service2}
                    title="NutriWise"
                    description="We provide food recomendation according to your calorie requirements"
                />
                <Card 
                    image={service3}
                    title="Foodwise Program"
                    description="Volunteer activities share food and educate about waste"
                />
                <Card 
                    image={service4}
                    title="Waste Pickup"
                    description="managing organic waste so that our beloved environment is maintained"
                />
            </div>
        </section>
    );
};

export default Services;
