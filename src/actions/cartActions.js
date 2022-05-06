const cartActions = {
  changeQuantity(id, newQuantity) {
    return {
      type: "CHANGE_QUANTITY",
      payload: { id, newQuantity },
    };
  },
};

export default cartActions;
