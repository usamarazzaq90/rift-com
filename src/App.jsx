import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/product/:id" exact Component={ProductDetails} />
        <Route path="/cart" exact Component={Cart} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
