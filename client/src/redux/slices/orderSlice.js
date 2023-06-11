import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {},
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    OrderInfo: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { OrderInfo } = orderSlice.actions;

export default orderSlice.reducer;
