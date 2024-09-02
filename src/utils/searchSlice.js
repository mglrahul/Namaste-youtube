import { createSlice } from "@reduxjs/toolkit";

const searchSlice = new createSlice({
  name: "search",
  initialState: {
    cache: {}
  },
  reducers: {
    cacheResults: (state, action) => {
        state.cache = {...action.payload, ...state.cache}
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
