/* eslint-disable no-case-declarations */
const initialValue = {
  cart: [],
};

export const cartReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "ADD":
      const existingItem = state.cart.find((item) => item.id === payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...payload, quantity: 1 }],
        };
      }

    case "Remove":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };

    case "UpdateCart":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.productId
            ? { ...item, quantity: payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};
