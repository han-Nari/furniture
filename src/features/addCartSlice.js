import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((i) => i.id === item.id);

      existItem
        ? (existItem.quantity += 1)
        : state.cartItems.push({ ...item, quantity: 1 });
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);

      if (item) {
        item.quantity -= 1;
      }
    },
  },
});

export const myCart = (state) => state.cart;
export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
