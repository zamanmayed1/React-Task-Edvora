import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([1,2,3])
    let url = 'https://assessment.api.vweb.app/products'
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [])
    return (
        <div className='container mx-auto px-2 flex flex-wrap gap-5 justify-center my-3'>
            {
                products.map(data => <Product key={data.product_id} data={data} />)
            }

        </div>
    );
};

export default Products;