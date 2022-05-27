import React from "react";
import { useDispatch } from "react-redux";
import cartActions from "../../actions/cartActions";

const CartItem = ({ id, imgUrl, price, title, totalPrice, quantity }) => {
  const dispatch = useDispatch();

  const changeQuantity = (newQuantity) => {
    dispatch(cartActions.changeQuantity(id, newQuantity));
  };

  return (
    <div className="product-info">
      <div className="product-info__detail">
        <div className="image-container">
          <img src={imgUrl} alt="" />
        </div>

        <div>
          <p>{title}</p>
        </div>
      </div>
      <p>{price.toFixed(2)}</p>
      <div className="quantity-input">
        <button onClick={() => changeQuantity(quantity - 1)}>-</button>
        <input type="number" step="1" value={quantity} />
        <button onClick={() => changeQuantity(quantity + 1)}>+</button>
      </div>
      <div className="total-price">
        <strong>${totalPrice.toFixed(2)}</strong>
      </div>
      <i className="bi bi-trash"></i>
    </div>
  );
};

export default CartItem;
