import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/addCartSlice";
import formReducer from "../features/formSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    accountForm: formReducer,
  },
});
