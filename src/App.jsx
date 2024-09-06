import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails";
import Cart from "./components/pages/Cart";
import { CartContext } from "./contextAPIs";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleInc = (product) => {
    const prod = cartItems.find((item) => item._id == product._id);
    if (!prod) {
      return setCartItems((prev) => [...prev, { ...product, qty: 1 }]);
    }
    const _items = cartItems.map((item) => ({
      ...item,
      qty: product._id === item._id ? item.qty + 1 : item.qty,
    }));
    setCartItems(_items);
  };

  const handleDec = (product) => {
    if (product.qty > 1) {
      const _items = cartItems.map((item) => ({
        ...item,
        qty: product._id === item._id ? item.qty - 1 : item.qty,
      }));
      return setCartItems(_items);
    }
    const idx = cartItems.findIndex((item) => item._id == product._id);
    const _cartItms = [...cartItems];
    _cartItms.splice(idx, 1);
    setCartItems(_cartItms);
  };

  console.log(cartItems);

  return (
    <CartContext.Provider value={{ cartItems, handleInc, handleDec }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/product/:id" exact Component={ProductDetails} />
          <Route path="/cart" exact Component={Cart} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
