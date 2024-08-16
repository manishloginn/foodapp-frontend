import React from 'react'
import { useSelector } from 'react-redux'
import "./cart.css"
import CartNav from './cartNav'

function Cart() {

    const cartData = useSelector((e) => e.cart)

    console.log(cartData)



    return (
        <div className='cartComponent'>
            <div className='insideComponent'>
                <CartNav />
            </div>

        </div>
    )
}

export default Cart
