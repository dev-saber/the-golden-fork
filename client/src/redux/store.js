import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import menuReducer from "./slices/menuSlice";
import cartReducer from "./slices/cartSlice";
import mealModalReducer from "./slices/mealModalSlice";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["menu"],
};

const persistedMenuReducer = persistReducer(persistConfig, menuReducer);

export const store = configureStore({
  reducer: {
    menu: persistedMenuReducer,
    cart: cartReducer,
    mealModal: mealModalReducer,
  },
  devTools: true,
});

export const persistor = persistStore(store);
