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
      !alreadyAdded && (state.cart = [...state.cart, action.payload]);
    },
    removeFromCart: () => {},
    modifyQuantity: () => {},
  },
});

export const { addToCart, removeFromCart, modifyQuantity } = cartSlice.actions;

export default cartSlice.reducer;
