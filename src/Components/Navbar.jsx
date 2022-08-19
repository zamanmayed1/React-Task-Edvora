import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className='py-4 shadow bg-gray-50 border'>
            <div className='container mx-auto px-2'>
                <div className="flex justify-between">
                    <div>
                        <h2 className='text-2xl text-blue-600'>Ed<span className='font-bold text-green-600'>vora</span></h2>
                    </div>
                    <div>
                        <ul className='flex gap-4 font-bold '>
                            <li className='text-gray-600 hover:text-green-500 cursor-pointer'><Link to='/'>Products</Link></li>
                            <li className='text-gray-600 hover:text-green-500 cursor-pointer'><Link to='dashboard'>Dashboard </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;