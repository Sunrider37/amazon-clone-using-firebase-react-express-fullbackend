import React from 'react'
import { useStateValue } from '../../StateProvider';
import CheckOutProduct from '../checkoutProduct/CheckOutProduct';
import SubTotal from '../subTotal/SubTotal'
import './Checkout.css'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://www.frankwbaker.com/truthbillboard.jpg"
                 alt="" className="checkout__ad" />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {basket.map(item => (
                        <CheckOutProduct 
                        key={item.id}
                        id={item.id} 
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        ></CheckOutProduct>
                        ))}
                    
                </div>
            </div>
            <div className="checkout__right">
                <SubTotal></SubTotal>
            </div>
        </div>
    )
}

export default Checkout
