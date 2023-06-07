import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import cartReducer from "./slices/cartSlice";
import mealModalReducer from "./slices/mealModalSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    mealModal: mealModalReducer,
  },
  devTools: true,
});
