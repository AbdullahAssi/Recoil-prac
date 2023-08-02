import React from 'react';
import { inventory } from './'; 
import {
    atom,
    useRecoilState,} from "recoil";

export const cartState = atom({
        key : "cartState",
        default: {}
    })

function Items() {
    const [cart , setcart] = useRecoilState(cartState);
    return (
        <div>
            <h2>Available Items</h2>
            <div className='item-card'>
                {inventory.map((item) => (
                    <div key={item.id} className='card'>
                        <img src={item.icon} alt="img"className='item-image'/>
                        <h1 className='name'>{item.name}</h1>
                        <p className='price'><strong>{item.price}</strong> Pkr</p>
                        <button id="bottone1" onClick={()=> {
                            setcart({...cart, [item.id]: (cart[item.id] || 0 ) + 1})
                        }}><strong>Add to Cart</strong></button>

                        {cart[item.id] && <button id="bottone1"
                            onClick={()=>{
                                const copy = {...cart};
                                if(copy[item.id] ===1){
                                    delete copy[item.id];
                                    setcart(copy)
                                }
                                else{
                                    setcart({
                                        ...copy ,[item.id]: (copy[item.id])-1
                                    })
                                }
                            }}
                            ><strong>Remove From Cart</strong></button>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Items;
