import React from 'react';

const ConfirmationPopup = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-[400px] h-auto bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-3 text-xl text-gray-600 hover:text-teal-400 transition-colors"
                >
                    &times;
                </button>
                <h1 className="font-bold text-xl text-teal-500 text-center mb-4">Pemberitahuan</h1>
                <p className="text-gray-700 text-center mb-4">Tunggu petugas pengangkut sampah mengangkut ke lokasimu.</p>
                <div className="flex justify-center">
                    <button 
                        onClick={onClose} 
                        className="bg-teal-500 rounded-xl px-6 py-2 font-semibold text-white hover:bg-teal-400 transition-colors"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;
