import React from 'react'
import {    useRecoilValue } from "recoil";
import { cartState } from './Items';
import { inventory } from '.';
import Shipping from './Shipping';
import Total from './Total';

function Cart() {
    const cart = useRecoilValue(cartState)

    if(Object.keys(cart).length === 0){
        return <h1>Cart is Empty</h1>
    }
    return (
        <div className='cart-container'>
            <h2 className='t-h'>Cart</h2>
            <ol>
                {Object.entries(cart).map(([id, quantity]) =>
                    <li className='cart-list' key={id}>
                        {inventory[id-1].name} * {quantity}
                    </li>
                )}
            </ol>
            <Shipping />
            <Total />
        </div>
    )
}

export default Cart