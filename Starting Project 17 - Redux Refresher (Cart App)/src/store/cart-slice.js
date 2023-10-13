import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "forCart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {},
    removeFromCart(state, action) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
