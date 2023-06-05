import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: () => {},
    removeFromCart: () => {},
    modifyQuantity: () => {},
  },
});

export const { addToCart, removeFromCart, modifyQuantity } = cartSlice.actions;

export default cartSlice.reducer;
