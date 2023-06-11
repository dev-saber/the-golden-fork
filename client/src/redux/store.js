import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import cartReducer from "./slices/cartSlice";
import mealModalReducer from "./slices/mealModalSlice";
import orderReducer from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    mealModal: mealModalReducer,
    order: orderReducer,
  },
  devTools: true,
});
