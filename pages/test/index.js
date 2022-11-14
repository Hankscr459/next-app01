import React from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.css';
import Layout from 'components/layout';
import { selectAuthState, setAuthState } from 'store/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  // const userDetails = useSelector(state => state)
  // console.log('userDetails: ', userDetails)
  
  return pug`
    Layout
      div(className=${styles.container})
        Head
          title Next test
          meta(name="description", content="Generated by create next app")
          link(rel="icon" href="/favicon.ico")
        div
          button(onClick=${() => dispatch(setAuthState(!authState))}) authState
        if authState
          h3 authStat false
        else
          h3 authStat true
        h3 value: ${authState}
  `
}