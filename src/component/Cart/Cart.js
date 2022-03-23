import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total=0;
    let shipping=0;
    for(const product of cart){
        total=total+product.price;
        shipping=shipping+product.shipping;
    }
    const tax=(total*0.1).toFixed(2);
    const grandTotal=total+shipping+parseFloat(tax);
    return (
        <div className='cart'>
             <h2>Product summary</h2>
            <p>Selected item: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping charge: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;