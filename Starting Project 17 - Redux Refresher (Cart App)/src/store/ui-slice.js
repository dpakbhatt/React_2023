import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  isCartVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "forUI",
  initialState: initialUIState,
  reducers: {
    toggleVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
