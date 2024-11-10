import React from 'react';

const LocationDetailPopup = ({ locationDetails, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-[600px] h-auto bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-3 text-xl text-gray-600 hover:text-teal-400 transition-colors"
                >
                    &times;
                </button>
                <h1 className="font-bold text-2xl text-teal-500 text-center mb-4">Detail Lokasi</h1>
                
                <p className="text-gray-700 text-center mb-4">Berikut adalah lokasi dari {locationDetails.name}:</p>

                {/* Replace with actual latitude and longitude */}
                <iframe 
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10930.79887074591!2d106.81034225071079!3d-6.23408695667765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15bf0e09bc3%3A0x7c09f5086374b82d!2sFedwell%20Senopati!5e0!3m2!1sid!2sid!4v1729869918331!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`}
                    width="100%"
                    height="300"
                    className="rounded-md"
                    title="Google Map"
                ></iframe>
                
                <div className="mt-4">
                    <p className="text-gray-600 text-center">Alamat: {locationDetails.address}</p>
                </div>
            </div>
        </div>
    );
}

export default LocationDetailPopup;
