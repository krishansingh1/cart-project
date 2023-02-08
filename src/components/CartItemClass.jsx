import React from "react";

class CartItemClass extends React.Component {
  render() {
    const { price, title, qty } = this.props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
      this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 45 }}>{title}</div>
          <div style={{ fontSize: 20, color: "#777" }}>Rs {price}</div>
          <div style={{ fontSize: 20, color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              alt="increase"
              className="action-items"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
              alt="decrease"
              className="action-items"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              alt="delete"
              className="action-items"
              onClick={() => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 180,
    width: 180,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
};

export default CartItemClass;
