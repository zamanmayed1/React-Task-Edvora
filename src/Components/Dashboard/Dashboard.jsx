import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import Orders from './Orders';
import Users from './Users';
const Dashboard = () => {
    return (
        <div className='container mx-auto px-2 my-3'>
            <div className='flex flex-wrap gap-5 justify-center '>
                <ul className='flex gap-4 font-bold my-2'>
                    <Link to={''} > <li className='text-gray-600 hover:text-green-500 cursor-pointer px-2 py-2 border border-blue-500'>Overview</li></Link>
                    <Link to={'orders'} ><li className='text-gray-600 hover:text-green-500 cursor-pointer px-2 py-2 border border-blue-500'>Orders</li></Link>
                    <Link to={'users'} > <li className='text-gray-600 hover:text-green-500 cursor-pointer px-2 py-2 border border-blue-500'>All Users</li></Link>

                </ul>
            </div>

            <Outlet />

        </div>
    );
};

export default Dashboard;