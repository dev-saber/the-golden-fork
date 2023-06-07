import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const alreadyAdded = state.cart.find((meal) => meal.id === id);
      if (alreadyAdded) {
        state.cart = state.cart.filter((meal) => meal.id !== id);
      }
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: () => {},
    modifyQuantity: () => {},
  },
});

export const { addToCart, removeFromCart, modifyQuantity } = cartSlice.actions;

export default cartSlice.reducer;
