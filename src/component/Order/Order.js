import React from 'react';
import useProducts from '../../Hooks/useProducts';

const Order = () => {
    const [products,setProducts]=useProducts()
    return (
        <div>
            <h2>Products count: {products.length}</h2>
        </div>
    );
};

export default Order;