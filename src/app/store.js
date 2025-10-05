import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/addCartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
