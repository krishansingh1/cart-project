import React from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { db } from "./firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

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

    // products[index].qty += 1;

    // this.setState({
    //   products,
    // });

    const productRef = doc(db, "products", products[index].id);

    const docRef = updateDoc(productRef, {
      qty: products[index].qty + 1,
    })
      .then(() => {
        console.log("Increased Successfully", docRef);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty -= 1;

    // this.setState({
    //   product,
    // });

    const productsRef = doc(db, "products", products[index].id);

    const docRef = updateDoc(productsRef, {
      qty: products[index].qty - 1,
    })
      .then(() => {
        console.log("Decreased Sucessfully", docRef);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items,
    // });

    const productRef = doc(db, "products", id);

    const docRef = deleteDoc(productRef)
      .then(() => {
        console.log("Delted Successfully", docRef);
      })
      .catch((error) => {
        console.log("Error", error);
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

  addProduct = () => {
    const productsRef = collection(db, "products");

    const docRef = addDoc(productsRef, {
      img: "https://images.unsplash.com/photo-1529336953128-a85760f58cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Desktop",
      price: "1399",
      qty: 1,
    });

    docRef
      .then((docRef) => {
        console.log("Product is added", docRef);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct}>Add Product</button> */}
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
