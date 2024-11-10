import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    
    // Fungsi untuk mengecek apakah path saat ini sama dengan route tertentu
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="flex justify-between p-8">
            <div className=' text-teal-400 font-bold text-4xl ml-20'>Foodwise</div>
            <ul className='flex justify-between gap-7'>
                <li>
                    <Link to="/home" 
                        className={`text-black ${isActive('/home') ? 'text-teal-400 font-bold' : ''}`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/healthy" 
                        className={`text-black ${isActive('/healthy') ? 'text-teal-400 font-bold' : ''}`}
                    >
                        Healthy
                    </Link>
                </li>
                <li>
                    <Link to="/waste" 
                        className={`text-black ${isActive('/waste') ? 'text-teal-400 font-bold' : ''}`}
                    >
                        Waste
                    </Link>
                </li>
                <li>
                    <Link to="/program" 
                        className={`text-black ${isActive('/program') ? 'text-teal-400 font-bold' : ''}`}
                    >
                        Program
                    </Link>
                </li>
            </ul>
            <button className='bg-teal-400 rounded-xl px-5 py-1 font-semibold text-white mr-20'>
                Contact Us
            </button>
        </nav>
    );
};

export default Navbar;
