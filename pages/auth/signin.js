import React from 'react';
import { Button } from '@mui/material';
import { Api } from '@/plugins/api';
import { to } from 'await-to-js';

export default function Signin() {
  const signin = async() => {
    const [err, res] = await to(Api.user.signin());
    if (err) {
      console.log('err: ', err);
    }
    console.log('res: ', res);
  }
  return pug`
    div
      Button(size="small", onClick=${signin}) Learn More
  `
}