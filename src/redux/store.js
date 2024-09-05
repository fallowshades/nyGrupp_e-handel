import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import cartSlice from "./slice/cartSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartSlice,
  },
});
