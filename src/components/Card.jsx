import React from 'react';

const Card = ({ image, title, description }) => {
    return (
        <div className="w-80 bg-white shadow-lg rounded-lg p-5 m-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold text-teal-400 mt-4">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
    );
};

export default Card;
