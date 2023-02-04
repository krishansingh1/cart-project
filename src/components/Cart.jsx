import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
  const [data, setState] = useState([
    { id: 1, price: 999, title: "Mobile Phone" },
    { id: 2, price: 99, title: "Watch" },
    { id: 3, price: 599, title: "MacBook" },
  ]);

  const handleDelete = (id) => {
    const items = data.filter((item) => item.id !== id);

    setState(items);
  };
  return (
    <div id="cart">
      {data.map((item) => {
        return (
          <CartItem
            id={item.id}
            price={item.price}
            title={item.title}
            key={item.id}
            onDeleteProduct={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default Cart;
