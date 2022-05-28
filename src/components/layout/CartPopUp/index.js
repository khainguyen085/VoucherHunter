import "@dotlottie/player-component";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";

const CartPopUp = ({ show, setShowCart }) => {
  const { cart, totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handlePushCheckout = () => {
    navigate(`/checkout`);
  };
  const handlePushCart = () => {
    navigate("/cart");
    setShowCart(false);
  };

  if (cart.length === 0) {
    return (
      <div className={`cart-pop-up ${show ? "show" : ""}`}>
        <dotlottie-player
          src="../image/empty-basket.lottie"
          autoplay
          loop
          style={{ width: "100%" }}
        />

        <p className="text-center fw-bold my-3">
          Your cart is currently empty!!
        </p>
      </div>
    );
  }

  return (
    <div
      className={`dropdown-menu cart-pop-up cart-wrapper ${show ? "show" : ""}`}
    >
      <div className="list-product pb-3">
        {cart.map((item) => (
          <ProductItem {...item} key={item.id} />
        ))}
      </div>
      <div className="py-3">
        <div className="d-flex justify-content-between">
          <p>Total</p>
          <p>${`${totalPrice}`}</p>
        </div>
        <p className="text-primary">
          Taxes and shipping calculated at checkout
        </p>
      </div>

      <div className="d-flex justify-content-center">
        <button className="btn btn-dark mx-2" onClick={handlePushCart}>
          YOUR CART
        </button>
        <button className="btn btn-primary mx-2" onClick={handlePushCheckout}>
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default CartPopUp;
