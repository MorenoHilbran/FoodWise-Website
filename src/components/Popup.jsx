import React, { useState } from 'react';
import LocationDetailPopup from './LocationDetailPopup'; // Import the new component

const Popup = ({ restaurant, imageRestaurant, description, menuDescription, onClose }) => {
    const [showLocationPopup, setShowLocationPopup] = useState(false);
    
    const handleLocationClick = () => {
        setShowLocationPopup(true);
    };

    const locationDetails = {
        name: restaurant,
        latitude: '-6.1751', // Replace with actual latitude
        longitude: '106.8650', // Replace with actual longitude
        address: 'Jakarta, Indonesia' // Replace with actual address
    };

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="w-[700px] h-auto bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
                    <button 
                        onClick={onClose} 
                        className="absolute top-3 right-3 text-xl text-gray-600 hover:text-teal-400 transition-colors"
                    >
                        &times;
                    </button>
                    <h1 className="font-bold text-3xl text-teal-500 text-center mb-4">{restaurant}</h1>
                    <img 
                        src={imageRestaurant} 
                        alt={restaurant} 
                        className="mx-auto w-full h-[250px] object-cover rounded-md shadow-md mb-4" 
                    />
                    <p className="text-gray-700 text-center mb-4">{description}</p>
                    <p className="text-gray-600 text-center mb-4">{menuDescription}</p>
                    
                    <div className="flex justify-center space-x-4 mt-4">
                        <button 
                            onClick={onClose} 
                            className="bg-gray-300 rounded-xl px-6 py-2 font-semibold text-black hover:bg-gray-400 transition-colors"
                        >
                            Tutup
                        </button>
                        <button 
                            onClick={handleLocationClick} 
                            className="bg-teal-500 rounded-xl px-6 py-2 font-semibold text-white hover:bg-teal-400 transition-colors"
                        >
                            Lihat Lokasi
                        </button>
                    </div>
                </div>
            </div>

            {showLocationPopup && (
                <LocationDetailPopup locationDetails={locationDetails} onClose={() => setShowLocationPopup(false)} />
            )}
        </>
    );
}

export default Popup;
