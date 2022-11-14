import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { customization } from './customization';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [customization.name]: customization.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);