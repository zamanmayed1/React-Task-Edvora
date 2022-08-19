import React from 'react';

const Product = ({ data }) => {
    return (
        <div className='m-2 bg-white shadow-md rounded-md p-4 w-96 cursor-pointer hover:translate-y-2 duration-200 hover:shadow-lg '>
            <h2 className='text-xl my-2 font-bold text-start text-gray-500'>{data.name}</h2>
            <div className="flex justify-between ">
                <h4 className='text-orange-700'>Stock : {data.stock}</h4>
                <h4 className='text-blue-400'>Price : {data.selling_price}</h4>
            </div>
        </div>
    );
};

export default Product;