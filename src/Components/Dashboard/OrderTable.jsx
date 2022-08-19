import React from 'react';

const OrderTable = ({ orders }) => {

    return (
        <table className="mx-auto md:w-2/4  w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                    <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Order ID</th>
                    <th className="p-3  w-32 text-sm font-semibold tracking-wide text-left">User ID</th>
                    <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Product ID</th>
                    <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Quantity</th>
                    <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Order Date</th>

                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {
                    orders?.map(data => <tr className="bg-white">
                        <td className="p-3 text-left text-sm text-gray-700 whitespace-nowrap">
                            {data.order_id}
                        </td>
                        <td className="p-3 text-left text-sm text-gray-700 whitespace-nowrap">
                            {data.user_id}
                        </td>
                        <td className="p-3  text-left text-sm text-gray-700 whitespace-nowrap">
                            {data.product_id}
                        </td>
                        <td className="p-3 text-sm text-left text-gray-700 whitespace-nowrap">
                            {data.quantity}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                            {data.order_date}
                        </td>

                    </tr>)
                }


            </tbody>
        </table>
    );
};

export default OrderTable;