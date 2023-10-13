import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  isCartVisible: false,
};

const uiSlice = createSlice({
  name: "forUI",
  initialState: initialUIState,
  reducers: {
    toggleVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
