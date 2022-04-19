import React from "react";
import "@dotlottie/player-component";

const CartPopUp = ({ show }) => {
  const items = [];

  if (items.length === 0) {
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

  return <div className={`cart-pop-up ${show ? "show" : ""}`}></div>;
};

export default CartPopUp;
