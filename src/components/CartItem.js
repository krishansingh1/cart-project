import React, { useState } from "react";

function CartItem() {

    const [quantity, setQuantity] = useState(0);
    const [data] = useState({ price: 999, title: "Mobile Phone" });

    const increaseCount = () => {
        setQuantity(quantity + 1);
    }

    const decreaseCount = () => {
        if (quantity === 0) {
            return;
        }
        setQuantity(quantity - 1);
    }

    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} alt="" />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 45 }}>{data.title}</div>
                <div style={{ fontSize: 20, color: "#777" }}>Rs {data.price}</div>
                <div style={{ fontSize: 20, color: "#777" }}>Qty: {quantity}</div>
                <div className="cart-item-actions">
                    <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="increase" className="action-items" onClick={increaseCount} />
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" alt="decrease" className="action-items" onClick={decreaseCount} />
                    <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete" className="action-items" />
                </div>
            </div>
        </div>
    )
}

const styles = {
    image: {
        height: 180,
        width: 180,
        borderRadius: 10,
        backgroundColor: "#ccc",
    }
}


export default CartItem;