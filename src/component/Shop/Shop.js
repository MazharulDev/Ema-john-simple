import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useProducts()
    const [cart,setCart]=useState([])
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=> <Product
                         key={product.id}
                         product={product}
                         handleAddToCart={handleAddToCart}
                         ></Product>)
                }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;