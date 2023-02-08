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

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      product,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div id="cart">
        {products.map((product) => {
          return (
            <CartItemClass
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default CartClass;
