import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const mealModalSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    addToModal: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addToModal } = mealModalSlice.actions;

export default mealModalSlice.reducer;
