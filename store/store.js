import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { createWrapper } from 'next-redux-wrapper';
import { sideBar } from './sideBar';

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [sideBar.name]: sideBar.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);