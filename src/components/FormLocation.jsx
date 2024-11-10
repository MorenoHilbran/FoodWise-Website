import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ConfirmationPopup from './ConfirmationPopup'; // Import the new component

const FormLocation = () => {
    const navigate = useNavigate(); 
    const [showPopup, setShowPopup] = useState(false); // State for popup visibility

    const handleLocationSubmit = () => {
        // Handle the submission of location data here
        console.log("Location submitted");
        setShowPopup(true); // Show the confirmation popup
    };

    return (
        <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto p-4 gap-8">
            <div className="flex-1">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.13932259354686!2d109.33633221708098!3d-7.428911860803552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6559814ade5b79%3A0xaef1b7bab5cba0f0!2sFakultas%20Teknik%20Universitas%20Jenderal%20Soedirman!5e0!3m2!1sid!2sid!4v1729860280696!5m2!1sid!2sid"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="flex-1 flex flex-col space-y-6">
                <div>
                    <label htmlFor="location" className="block font-semibold text-lg">Detail Lokasi</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 p-3 rounded-md"
                        placeholder="Masukkan detail lokasi"
                    />
                </div>
                <div>
                    <label htmlFor="patokan" className="block font-semibold text-lg">Patokan</label>
                    <input
                        type="text"
                        id="patokan"
                        name="patokan"
                        className="w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 p-3 rounded-md"
                        placeholder="Masukkan patokan"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block font-semibold text-lg">No. Telepon</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 p-3 rounded-md"
                        placeholder="Masukkan nomor telepon"
                    />
                </div>
                <button
                    onClick={handleLocationSubmit}
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                >
                    Kirim Lokasi
                </button>
                <button
                    onClick={() => navigate('/home')} // Navigate to the homepage
                    className="mt-4 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-md transition duration-300"
                >
                    Kembali
                </button>
            </div>
            {showPopup && (
                <ConfirmationPopup onClose={() => setShowPopup(false)} />
            )}
        </div>
    );
};

export default FormLocation;
