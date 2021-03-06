import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const ListCart = () => {
  const navigate = useNavigate();
  const { cart, totalPrice } = useSelector((state) => state.cart);

  return (
    <>
      <div className="list-cart__wrapper">
        <div className="list-cart__container">
          <div className="product-info product-title">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          {cart.map((item, index) => (
            <CartItem {...item} key={item.id + index} />
          ))}
        </div>
      </div>
      <p className="subtotal">Subtotal: ${totalPrice}</p>
      <div className="button-container">
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/checkouts/id?step=contact_information`)}
        >
          Checkout
        </button>
        <Link to="/">Continue to shopping</Link>
      </div>
    </>
  );
};

export default ListCart;
