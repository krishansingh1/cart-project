function CartItem() {
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} alt="" />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 40 }}>Phone</div>
                <div style={{ color: "#777" }}>Rs 999</div>
                <div style={{ color: "#777" }}>Qty: 1</div>
                <div className="cart-item-actions">
                    {/*Buttons*/}
                </div>
            </div>
        </div>
    )
}

const styles = {
    image: {
        height: 250,
        width: 250,
        borderRadius: 4,
        backgroundColor: "#ccc",
    }
}


export default CartItem;