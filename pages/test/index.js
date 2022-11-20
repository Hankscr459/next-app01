import React from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.css';
import Layout2 from 'components/layout2';
import { selectAuthState, setAuthState } from 'store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';

export default function Test() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  // const userDetails = useSelector(state => state)
  // console.log('userDetails: ', userDetails)

  return pug`
    Layout2
      div(className=".container mx-5 my-5")
        Card(className="min-w-[100%]")
          CardContent
            Typography(sx=${{ fontSize: 14 }} color="text.secondary" gutterBottom) Word of the Day
            Typography(variant="h5" component="div") be{bull}nev{bull}o{bull}lent
            Typography(sx=${{ mb: 1.5 }} color="text.secondary") adjective
            Typography(variant="body2") well meaning and kindly. well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.
              br
          CardActions
            Button(size="small") Learn More
      // div(className=${styles.container})
      //   Head
      //     title Test Page
      //     meta(name="description", content="Generated by create next app")
      //     link(rel="icon" href="/favicon.ico")
      //   div
      //     button(onClick=${() => dispatch(setAuthState(!authState))}) authState
      //   if authState
      //     h3 authStat false
      //   else
      //     h3 authStat true
      //   h3 value: ${authState}
  `
}