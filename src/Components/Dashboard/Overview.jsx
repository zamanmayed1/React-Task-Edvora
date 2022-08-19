import React from 'react';
import Pie from '../Child/Pie'
import Users from './Users';

const Overview = () => {
    return (
        <div className="overflow-auto p-2 rounded-lg shadow">
            <div className="pt-6 flex flex-wrap justify-center gap-10">
                <Pie></Pie>
                <Pie></Pie>

            </div>
            <h1 className='text-xl font-bold text-gray-500 my-3'>Our Premium Users</h1>
            <Users />
        </div>

    );
};

export default Overview;