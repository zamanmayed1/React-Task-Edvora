import React, { useEffect, useState } from 'react';
import OrderTable from './OrderTable';

const Orders = () => {
    const [orders, setOrders] = useState([])
    let url = 'https://assessment.api.vweb.app/orders'
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setOrders(data));
    }, [])
    let reload;
    if (orders.length == 0) {
        return reload = 'Loading...'
    }
    return (
        <div className="overflow-auto rounded-lg shadow">
            {reload}
            <OrderTable orders={orders} />

        </div>
    );
};

export default Orders;