import React from "react";

const ProductItem = ({ imgUrl, price, title, quantity, id, totalPrice }) => {
  return (
    <div className="product-info">
      <div className="col-3 product-img">
        <img src={imgUrl} alt="" />
      </div>
      <div>
        <p>{title}</p>
        <p className="text-primary">
          {quantity} x ${price.toFixed(2)}
        </p>
      </div>
      <div>
        <i className="bi bi-trash"></i>
      </div>
    </div>
  );
};

export default ProductItem;
