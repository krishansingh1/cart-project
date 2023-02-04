import React, { useState } from 'react';
import CartItem from './CartItem';

function Cart() {
    const [data] = useState([{ id: 1, price: 999, title: "Mobile Phone" }, { id: 2, price: 99, title: "Watch" }, { id: 3, price: 599, title: "MacBook" }]);

    return (
        <div id="cart">
            {data.map((item) => {
                return <CartItem price={item.price} title={item.title} key={item.id} />
            })}
        </div>
    )

}

export default Cart;