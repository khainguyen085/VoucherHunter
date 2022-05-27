import React from "react";
import Slider from "./Silder";
import Product from "./Products";
import HotProduct from "./HotProducts";
import Voucher from "./Voucher";
import News from "./News";

const Home = () => {
  return (
    <div>
      <Slider />
      <Product />
      <HotProduct />
      <Voucher />
      <News />
    </div>
  );
};
export default Home;
