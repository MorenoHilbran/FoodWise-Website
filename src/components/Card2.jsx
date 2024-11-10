import React from 'react';

/**
 * Komponen Card2 yang menampilkan informasi tentang suatu program
 * 
 *  image - URL gambar yang akan ditampilkan
 *  title - judul program
 *  description - deskripsi program
 *  followers - jumlah pengikut program
 *  status - status program (aktif/tidak aktif)
 *  onMoreInfo - function untuk menampilkan detail program
 */
const Card2 = ({ image, title, description, followers, status, onMoreInfo }) => {
    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-4 m-4 border relative transition-transform duration-300 hover:scale-105">
            {status ? (
                <div className="absolute top-0 left-10 text-xs font-bold text-white bg-red-500 px-2 py-1 rounded-bl-lg rounded-br-lg inline-block">
                    {status}
                </div>
            ) : (
                <div className="absolute top-0 left-10 bg-yellow-400 w-8 h-8 rounded-bl-lg rounded-br-lg"></div>
            )}
            <img 
                src={image} 
                alt={title} 
                className="w-full h-40 object-cover rounded-md mt-6" 
            />
            <h3 className="text-xl font-semibold mt-4">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
            <div className="mt-4">
                <p className="font-semibold text-lg">{followers} Mengikuti</p>
                <hr className="my-2 border-gray-300" />
                <p className="text-sm text-gray-400">Segera Ikuti</p>
            </div>
            <button 
                style={{ backgroundColor: '#15977F' }} 
                className="mt-2 w-full text-white py-2 rounded-full hover:opacity-80"
                onClick={onMoreInfo} // Trigger the more info function
            >
                Selengkapnya ↗
            </button>
        </div>
    );
};

export default Card2;
