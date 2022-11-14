import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import * as actionTypes from 'actions/actions';
import config from 'config';


// Initial state
const initialState = {
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true,
};

// Actual Slice
export const customization = createSlice({
  name: 'customization',
  initialState,
  reducers: {

    // Action to set the authentication status
    setIsOpened(state, action) {
      state.opened = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state = initialState, action) => {
        let id;
        switch (action.type) {
            case actionTypes.MENU_OPEN:
                id = action.id;
                return {
                  ...state,
                  isOpen: [id]
                };
            case actionTypes.SET_MENU:
                return {
                  ...state,
                  opened: action.opened
                };
            case actionTypes.SET_FONT_FAMILY:
                return {
                  ...state,
                  fontFamily: action.fontFamily
                };
            case actionTypes.SET_BORDER_RADIUS:
                return {
                  ...state,
                  borderRadius: action.borderRadius
                };
            default:
              return state;
        }
      },
    },

  },
});

export const { setIsOpened } = customization.actions;

export const selectCustomizationIsOpened = (state) => state.customization.opened;

export default customization.reducer;