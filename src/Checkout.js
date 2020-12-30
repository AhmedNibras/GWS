import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal";
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct.js';
import userEvent from '@testing-library/user-event';
function Checkout() {
    const[{basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img 
                className ='checkout_ad'
                src="https://www.electronicfirst.com/wp-content/uploads/2018/05/PC-Games.jpg"
                alt=""
                />

                <div> 
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout_title">Your shopping Basket </h2>

                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            
                
                </div>

            </div>
                <div className="checkout_right"></div>
                <Subtotal />
        </div>
    )
}

export default Checkout
