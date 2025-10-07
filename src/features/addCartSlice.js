import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    shippingFee: JSON.parse(localStorage.getItem("fee")) ?? 50,
    discountedApplied: JSON.parse(localStorage.getItem("discount")) || false,
    couponChecked: false,
    couponAlreadyUsed: false,
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
      const itemId = action.payload;

      if (window.confirm(`Are you sure you want to remove your product?`)) {
        state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
      }

      if (state.cartItems.length === 0) {
        state.discountedApplied = false;
        state.shippingFee = 50;
        state.couponChecked = false;
        state.couponAlreadyUsed = false;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];

      state.discountedApplied = false;
      state.shippingFee = 50;
      state.couponChecked = false;
      state.couponAlreadyUsed = false;
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    applyCoupon: (state, action) => {
      const code = action.payload.trim().toLowerCase();
      state.couponChecked = true;

      if (!code) return;

      if (code === "kupal") {
        if (state.discountedApplied) {
          state.couponAlreadyUsed = true;
        } else {
          state.shippingFee = 0;
          state.discountedApplied = true;
          state.couponAlreadyUsed = false;
        }
      } else {
        state.couponAlreadyUsed = false;
        state.discountedApplied = false;
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
  applyCoupon,
  couponAlreadyUsed,
} = cartSlice.actions;
export default cartSlice.reducer;
