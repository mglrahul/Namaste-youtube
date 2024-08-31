import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { isMenuToggle: true },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuToggle = !state.isMenuToggle;
    },
    closeMenu: (state) => {
      state.isMenuToggle = false;
    }
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
