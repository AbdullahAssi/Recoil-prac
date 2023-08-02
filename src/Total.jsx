import React from 'react'
import { selector, useRecoilValue } from 'recoil'
import { cartState } from './Items'
import { methodState } from './Shipping'
import { inventory, methods } from '.'

export const totalState = selector({
    key : "totalState",
    get: ({get}) =>{

        const cart = get(cartState);
        const method = get( methodState );
        const subtotal = Object.entries(cart).reduce(
            (current , [key, quantity])=> current + inventory[(key)-1].price * quantity,0
        );
        const methodtotal = methods[method]
        return {
            subtotal: subtotal,
            shipping: methodtotal,
            total : subtotal + methodtotal
        }
    }
})
function Total() {
    const totals = useRecoilValue(totalState);
    return (
        <div>
            <h2 className='t-h'>Totals</h2>
            <p><span className='t'>Subtotal :</span> {totals.subtotal}Pkr</p>
            <p ><span className='t'>Shipping :</span>  {totals.shipping}Pkr</p>
            <p>
                <strong><span className='t , h'>Total :</span> {totals.total}Pkr</strong>
            </p>
        </div>
    )
}

export default Total