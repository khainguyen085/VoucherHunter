import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/layout/Home";
import Cart from "./pages/Cart";
import AboutUs from './components/layout/AboutUs';
import AllProduct from './components/layout/AllProduct';
import CheckOut from './components/layout/CheckOut';
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProduct />} />
          <Route path="/news" element={<p>News</p>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/account" element={<p>My account</p>} />
          <Route path="/login" element={<p>Login</p>} />
          <Route path="/register" element={<p>register</p>} />
          <Route path="/product/:id" element={<p>Product detail</p>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
