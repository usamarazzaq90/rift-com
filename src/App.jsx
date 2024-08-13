import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/product-details" exact Component={ProductDetails} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
