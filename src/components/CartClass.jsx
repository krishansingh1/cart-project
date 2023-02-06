import React from "react";
import CartItemClass from "./CartItemClass";

class CartClass extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id: 1, title: "iPhone", price: 999, qty: 2 },
        { id: 2, title: "MacBook", price: 1999, qty: 4 },
        { id: 3, title: "Airpods", price: 99, qty: 1 },
      ],
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div id="cart">
        {products.map((product) => {
          return <CartItemClass product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default CartClass;
