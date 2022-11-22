import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";


// Initial state
const initialState = {
  isOpen: true,
};

// Actual Slice
export const sideBar = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {

    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.sideBar,
        };
      },
    },

  },
});

export const { setIsOpen } = sideBar.actions;

export const selectSideBarState = (state) => state.sideBar.isOpen;

export default sideBar.reducer;