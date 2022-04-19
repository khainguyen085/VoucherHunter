import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<p>Home page</p>} />
          <Route path="/products" element={<p>Products</p>} />
          <Route path="/news" element={<p>News</p>} />
          <Route path="/aboutus" element={<p>About us</p>} />
          <Route path="/account" element={<p>My account</p>} />
          <Route path="/login" element={<p>Login</p>} />
          <Route path="/register" element={<p>register</p>} />
          <Route path="/product/:id" element={<p>Product detail</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
