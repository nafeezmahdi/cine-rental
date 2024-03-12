const initialState = {
  cartData: [],
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      return {
        cartData: [...state.cartData, action.payload],
      };
    case "Remove_From_Cart":
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
  }
};

export { initialState, CartReducer };
