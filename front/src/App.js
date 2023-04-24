import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  { Navbar } from "./components/navbar";
import { Cart } from "./pages/cart/cart";
import { Products } from "./pages/products/products";
import { ProductsContextProvider } from "./context/products-context";
import { Detail } from "./pages/products/detail";
const App = () => {
  return (
    <div className="App">
       <ProductsContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Products/> }/>
          <Route path="/cart"  element={ <Cart/> }/>
          <Route path="/detail/:id"  element={ <Detail/> }/>
        </Routes>
      </Router>
      </ProductsContextProvider>
    </div>
  );
};

export default App;
