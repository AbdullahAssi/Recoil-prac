import React from 'react';
import { atom, useRecoilState } from 'recoil';
import { methods } from './';


export const methodState  = atom({
    key: "shippingState",
    default: "Dinning"
})
function Shipping() {
    const [method , setMethod] = useRecoilState(methodState)

    return (
        <div>
            {Object.entries(methods).map(([type, price]) => (
                <button className='button'
                    style={{
                        backgroundColor: method === type ? 'blue' : '',
                        color: method === type ? 'white' : 'black',
                    }}
                    key={type}
                    onClick={()=>{ setMethod(type) }}
                >
                    {type} + {price}Pkr
                </button>
            ))}
        </div>
    );
}

export default Shipping;
