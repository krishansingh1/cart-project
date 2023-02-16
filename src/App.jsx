import React from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    const productsRef = collection(db, "products");

    this.unsubscribe = onSnapshot(productsRef, (snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });

      this.setState({ products, loading: false });
    });
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

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let count = 0;

    products.map((product) => {
      count += count + product.qty * product.price;
    });

    return count;
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div id="total">Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
