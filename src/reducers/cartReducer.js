const inititalState = {
  cart: [
    {
      id: 1,
      title: "Tien Giang",
      price: 300,
      totalPrice: 300,
      quantity: 1,
      imgUrl:
        "https://cdnimg.vietnamplus.vn/t620/uploaded/fsmsy/2021_10_13/my_tho_tien_giang.jpg",
    },
    {
      id: 2,
      title: "Tien Giang",
      price: 300,
      totalPrice: 300,
      quantity: 1,
      imgUrl:
        "https://cdnimg.vietnamplus.vn/t620/uploaded/fsmsy/2021_10_13/my_tho_tien_giang.jpg",
    },
    {
      id: 3,
      title: "Tien Giang",
      price: 300,
      totalPrice: 300,
      quantity: 1,
      imgUrl:
        "https://cdnimg.vietnamplus.vn/t620/uploaded/fsmsy/2021_10_13/my_tho_tien_giang.jpg",
    },
  ],
  totalPrice: 900,
};

const cartReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "CHANGE_QUANTITY":
      const { id, newQuantity } = action.payload;
      if (newQuantity === 0) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== id),
        };
      }

      const newCart = state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
              totalPrice: newQuantity * item.price,
            }
          : item
      );

      const totalPrice = state.cart.reduce(
        (total, current) => total + current.totalPrice,
        0
      );

      return {
        ...state,
        cart: newCart,
        totalPrice,
      };
    default:
      return state;
  }
};

export default cartReducer;
